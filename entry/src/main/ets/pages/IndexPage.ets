/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { IconButton } from '../components/IconButton'
import { curves, promptAction, router, window } from '@kit.ArkUI';
import Constants from '../common/constants/Constants';
import PhotoItem from '../view/PhotoItem';
import { CustomDialogAdd } from '../components/CustomDialog'
import { abilityAccessCtrl, common, Permissions, UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AuthUtil, ToastUtil,} from '@yunkss/ef_ui'
import { GridItemDeletionCtrl } from '../common/modules/GridItemDeletionCtrl';
import { resourceManager } from '@kit.LocalizationKit';
import { image } from '@kit.ImageKit';
import { effectKit } from '@kit.ArkGraphics2D';

const permissions: Array<Permissions> = ['ohos.permission.READ_MEDIA','ohos.permission.WRITE_MEDIA'];
// 使用UIExtensionAbility：将common.UIAbilityContext 替换为common.UIExtensionContext
function reqPermissionsFromUser(permissions: Array<Permissions>, context: common.UIAbilityContext): void {
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  // requestPermissionsFromUser会判断权限的授权状态来决定是否唤起弹窗
  atManager.requestPermissionsFromUser(context, permissions).then((data) => {
    let grantStatus: Array<number> = data.authResults;
    let length: number = grantStatus.length;
    for (let i = 0; i < length; i++) {
      if (grantStatus[i] === 0) {
        // 用户授权，可以继续访问目标操作
      } else {
        // 用户拒绝授权，提示用户必须授权才能访问当前页面的功能，并引导用户到系统设置中打开相应的权限
        return;
      }
    }
    // 授权成功
  }).catch((err: BusinessError) => {
    console.error(`Failed to request permissions from user. Code is ${err.code}, message is ${err.message}`);
  })
}

@Observed
class resourceArray extends Array<Resource> {
}

@Entry
@Component
struct IndexPage {
  swiperController: SwiperController = new SwiperController();
  scroller: Scroller = new Scroller();
  dialogController : CustomDialogController = new CustomDialogController({
    builder : CustomDialogAdd({
      cancel: this.onCancel,
      confirm: this.onAccept.bind(this)
    }),
    offset:{dx:0,dy:-20},
    alignment:DialogAlignment.Bottom,
    cancel:()=>{
      this.appInfoList.push(new Array<Resource>().concat(Constants.SCENE_LIST, Constants.LIFE_LIST, Constants.MEN_LIST))
    }
  })
  @State visib: Visibility = Visibility.Visible
  @State set: ResourceStr = '隐藏轮播'
  @State currentIndex: number = 0;
  @State angle: number = 0;
  @State appInfoList: Array<resourceArray> = Constants.IMG_ARR;
  @State addList: resourceArray = Constants.SCENE_LIST;
  @State isAddApp: boolean = false; // 应用被添加到首页应用时为true
  private itemAreaWidth: number = 0;
  private isChange: boolean = false;
  @Provide GridItemDeletion: GridItemDeletionCtrl<Resource[]> = new GridItemDeletionCtrl<Resource[]>(this.appInfoList);
  @State movedItem: resourceArray = [];
  // 初始背景色赋值
  @State bgColor: string = "#fffffff";
  // 顶部安全高度赋值
  @State topSafeHeight: number = 0;
  /**
   * 应用被添加到首页应用所展示的动画
   */
  private effect: TransitionEffect =
    TransitionEffect.OPACITY.animation({
      curve: curves.springMotion(0.6, 0.8)
    })
      // 通过combine方法,这里的动画参数会跟随上面的TransitionEffect，也就是springMotion(0.6, 0.8)
      .combine(TransitionEffect.scale({
        x: 0,
        y: 0
      }))
        // 添加旋转转场效果，这里的动画参数会跟随上面带animation的TransitionEffect，也就是springMotion(0.6, 0.8)
      .combine(TransitionEffect.rotate({ angle: 0 }))
        // 添加平移转场效果，这里的动画参数使用指定的springMotion()
      .combine(TransitionEffect.translate({ x: 150 })
        .animation({ curve: curves.springMotion() }))
        // 添加move转场效果，这里的动画参数会跟随上面的TransitionEffect，也就是springMotion()
      .combine(TransitionEffect.move(TransitionEdge.END))
  onCancel(){

  }

  onAccept(){
    this.isAddApp = true
    this.isAddApp = true
    this.appInfoList.push(this.appInfoList[Math.floor(Math.random() * 4)])
    setTimeout(() => {
      this.isAddApp = false
    }, 2000);
  }

  @Builder
  pixelMapBuilder() {
    PhotoItem({ photoArr: this.movedItem })
      .width('45%')
      .height('30%')
  }

  async aboutToAppear() {
    // 使用UIExtensionAbility：将common.UIAbilityContext 替换为common.UIExtensionContext
    const context1: common.UIAbilityContext = getContext(this) as common.UIAbilityContext;

    let result = AuthUtil.checkPermissions('ohos.permission.READ_MEDIA');
    if (!result) {
      reqPermissionsFromUser(permissions, context1)
      promptAction.showToast({
        message: '未授予权限，无法获取本地图片！',
      })
    } else {

    }
    let windowClass: window.Window = await window.getLastWindow(getContext(this));;
    // 2.实现沉浸式效果：设置窗口可以全屏绘制。
    // 将UI内容顶入状态栏下方
    windowClass.setWindowLayoutFullScreen(true)
      .then(() => {
        //3、设置状态栏 可见
        windowClass.setWindowSystemBarEnable(['status']).then(() => {
          //4、设置状态栏透明背景
          const systemBarProperties: window.SystemBarProperties = {
            statusBarColor: '#00000000'
          };
          //设置窗口内导航栏、状态栏的属性
          windowClass.setWindowSystemBarProperties(systemBarProperties)
        })
      })
    // TODO 知识点：初始化页面获取第一张图片的颜色
    const context = getContext(this);
    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
    const fileData: Uint8Array = await resourceMgr.getMediaContent(Constants.BANNER_IMG_LIST[0]);
    const buffer = fileData.buffer as ArrayBuffer;
    const imageSource: image.ImageSource = image.createImageSource(buffer);
    const pixelMap: image.PixelMap = await imageSource.createPixelMap();

    // TODO 知识点：智能取色器接口使用，初始化背景色
    effectKit.createColorPicker(pixelMap, (err, colorPicker) => {
      let color = colorPicker.getMainColorSync();
      // 将取色器选取的color示例转换为十六进制颜色代码
      this.bgColor = "#" + color.alpha.toString(16) + color.red.toString(16) + color.green.toString(16) + color.blue.toString(16)
    })
  }

  changeIndex(itemIndex: number, insertIndex: number): void {
    const item = this.appInfoList.splice(itemIndex, 1)[0];
    this.appInfoList.splice(insertIndex, 0, item);
    // 创建一个新的数组副本来触发更新
    this.appInfoList = [...this.appInfoList]
  }
  // 监听数据变化函数
  monitoringData(): void {
    this.isChange = true;
    this.GridItemDeletion = new GridItemDeletionCtrl<Resource[]>(this.appInfoList);
  }

  build() {
    Column() {
      Row() {
        Text($r('app.string.EntryAbility_label'))
          .fontSize($r('app.float.title_font_size'))
          .fontWeight(Constants.TITLE_FONT_WEIGHT)
        IconButton({
          options: {
            iconRes: $r('app.media.icon_add'),
            iconColor: Color.Black,
            buttonColor: Color.Transparent
          }
        })
          .bindMenu([
            {
              value: '新建相册',
              action: () => {
                this.dialogController.open()
              }
            },
            {
              value: this.set,
              action: () => {
                if (this.set == '隐藏轮播'){
                  this.visib = Visibility.None
                  this.set = '显示轮播'
                }else{
                  this.visib = Visibility.Visible
                  this.set = '隐藏轮播'
                }

              }
            },
          ])
      }
      .height($r('app.float.navi_bar_height'))
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.SpaceBetween)
      .margin({ top: '30vp' })
      .padding({ left: $r('app.float.title_padding') })
      .width(Constants.FULL_PERCENT)

      Swiper(this.swiperController) {
        ForEach(Constants.BANNER_IMG_LIST, (item: Resource) => {
          Row() {
            Image(item)
              .width(Constants.FULL_PERCENT)
              .height(Constants.FULL_PERCENT)
          }
          .width(Constants.FULL_PERCENT)
          .aspectRatio(Constants.BANNER_ASPECT_RATIO)
        }, (item: Resource, index?: number) => JSON.stringify(item) + index)
      }
      .visibility(this.visib)
      .autoPlay(true)
      .loop(true)
      .margin($r('app.float.grid_padding'))
      .borderRadius($r('app.float.img_border_radius'))
      .clip(true)
      .duration(Constants.BANNER_ANIMATE_DURATION)
      .indicator(false)
      .onAnimationStart(async (index, targetIndex) => {
        try {
          const context = getContext(this);
          // 获取resourceManager资源管理器
          const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
          const fileData: Uint8Array = await resourceMgr.getMediaContent(Constants.BANNER_IMG_LIST[targetIndex]);
          // 获取图片的ArrayBuffer
          const buffer = fileData.buffer as ArrayBuffer;
          // 创建imageSource
          const imageSource: image.ImageSource = image.createImageSource(buffer);
          // 创建pixeMap
          const pixelMap: image.PixelMap = await imageSource.createPixelMap();

          effectKit.createColorPicker(pixelMap, (err, colorPicker) => {
            // 读取图像主色的颜色值，结果写入Color
            let color = colorPicker.getMainColorSync();
            // 开启背景颜色渲染的属性动画
            animateTo({ duration: 500, curve: Curve.Linear, iterations: 1 }, () => {
              // 将取色器选取的color示例转换为十六进制颜色代码
              this.bgColor = "#" + color.alpha.toString(16) + color.red.toString(16) + color.green.toString(16) + color.blue.toString(16);
            })
          })

        } catch (e) {
        }
      })


      Grid() {
        ForEach(this.appInfoList, (photoArr: Array<Resource>, index: number) => {
          GridItem() {
            PhotoItem({ photoArr : photoArr })
          }
          .width(Constants.FULL_PERCENT)
          .aspectRatio(Constants.STACK_IMG_RATIO)
          // 使用isAddApp控制动画是否显示，只有app添加到首页应用里才显示
          .transition(this.isAddApp ? this.effect : null)
          .onAreaChange((oldValue: Area, newValue: Area) => {
            this.itemAreaWidth = Number(newValue.width);
          })
          .onTouch((event: TouchEvent) => {
            if (event.type === TouchType.Down) {
              this.movedItem = this.appInfoList[index];
            }
          })
          .attributeModifier(this.GridItemDeletion.getModifier(photoArr))
          .onClick(() => {
            router.pushUrl({
              url: Constants.URL_LIST_PAGE,
              params: { photoArr: photoArr }
            });
          })
        }, (photoArr: Resource, index?: number) => JSON.stringify(photoArr) + index)
      }
      .scrollBar(BarState.Off)
      .columnsTemplate(Constants.INDEX_COLUMNS_TEMPLATE)
      .columnsGap($r('app.float.grid_padding'))
      .rowsGap($r('app.float.grid_padding'))
      .padding({ left: $r('app.float.grid_padding'), right: $r('app.float.grid_padding') })
      .width(Constants.FULL_PERCENT)
      .layoutWeight(1)
      .supportAnimation(true)
      .editMode(true)
      .onItemDragStart((event: ItemDragInfo, itemIndex: number) => {
        // TODO:知识点:在onItemDragStart函数返回自定义组件，可在拖拽过程中显示此自定义组件。
        return this.pixelMapBuilder();
      })
      .onItemDrop((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => {
        // TODO:知识点:执行gridItem切换操作
        if (isSuccess && insertIndex < this.appInfoList.length) {
          this.changeIndex(itemIndex, insertIndex);

        }

      })

    }
    .width(Constants.FULL_PERCENT)
    .height(Constants.FULL_PERCENT)
    .linearGradient({
      // 渐变方向
      direction: GradientDirection.Bottom,
      // 数组末尾元素占比小于1时，满足重复着色的效果
      colors: [[this.bgColor, 0.0], [Color.White, 0.5]]
    })

  }

}
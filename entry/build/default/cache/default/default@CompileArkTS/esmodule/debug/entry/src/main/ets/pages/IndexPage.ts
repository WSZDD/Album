if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface IndexPage_Params {
    swiperController?: SwiperController;
    scroller?: Scroller;
    dialogController?: CustomDialogController;
    currentIndex?: number;
    angle?: number;
    appInfoList?: Array<resourceArray>;
    isAddApp?: boolean;
    itemAreaWidth?: number;
    isChange?: boolean;
    GridItemDeletion?: GridItemDeletionCtrl<Resource[]>;
    movedItem?: resourceArray;
    bgColor?: string;
    topSafeHeight?: number;
    effect?: TransitionEffect;
}
import { IconButton } from "@bundle:com.example.electronicalbum/entry/ets/components/IconButton";
import curves from "@native:ohos.curves";
import promptAction from "@ohos:promptAction";
import router from "@ohos:router";
import window from "@ohos:window";
import Constants from "@bundle:com.example.electronicalbum/entry/ets/common/constants/Constants";
import PhotoItem from "@bundle:com.example.electronicalbum/entry/ets/view/PhotoItem";
import { CustomDialogAdd } from "@bundle:com.example.electronicalbum/entry/ets/components/CustomDialog";
import abilityAccessCtrl from "@ohos:abilityAccessCtrl";
import type common from "@ohos:app.ability.common";
import type { Permissions } from "@ohos:abilityAccessCtrl";
import type { BusinessError } from "@ohos:base";
import { AuthUtil, } from "@package:pkg_modules/.ohpm/@yunkss+ef_ui@1.0.0/pkg_modules/@yunkss/ef_ui/Index";
import { GridItemDeletionCtrl } from "@bundle:com.example.electronicalbum/entry/ets/common/modules/GridItemDeletionCtrl";
import type resourceManager from "@ohos:resourceManager";
import image from "@ohos:multimedia.image";
import effectKit from "@ohos:effectKit";
const permissions: Array<Permissions> = ['ohos.permission.READ_MEDIA', 'ohos.permission.WRITE_MEDIA'];
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
            }
            else {
                // 用户拒绝授权，提示用户必须授权才能访问当前页面的功能，并引导用户到系统设置中打开相应的权限
                return;
            }
        }
        // 授权成功
    }).catch((err: BusinessError) => {
        console.error(`Failed to request permissions from user. Code is ${err.code}, message is ${err.message}`);
    });
}
@Observed
class resourceArray extends Array<Resource> {
}
class IndexPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.swiperController = new SwiperController();
        this.scroller = new Scroller();
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new CustomDialogAdd(this, {}, undefined, -1, () => { }, { page: "entry/src/main/ets/pages/IndexPage.ets", line: 60, col: 15 });
                jsDialog.setController(this.dialogController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {};
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            offset: { dx: 0, dy: -20 },
            alignment: DialogAlignment.Bottom,
            cancel: this.onCancel.bind(this)
        }, this);
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__angle = new ObservedPropertySimplePU(0, this, "angle");
        this.__appInfoList = new ObservedPropertyObjectPU(Constants.IMG_ARR, this, "appInfoList");
        this.__isAddApp = new ObservedPropertySimplePU(false, this, "isAddApp");
        this.itemAreaWidth = 0;
        this.isChange = false;
        this.__GridItemDeletion = new ObservedPropertyObjectPU(new GridItemDeletionCtrl<Resource[]>(this.appInfoList), this, "GridItemDeletion");
        this.addProvidedVar("GridItemDeletion", this.__GridItemDeletion, false);
        this.__movedItem = new ObservedPropertyObjectPU([], this, "movedItem");
        this.__bgColor = new ObservedPropertySimplePU("#fffffff", this, "bgColor");
        this.__topSafeHeight = new ObservedPropertySimplePU(0, this, "topSafeHeight");
        this.effect = TransitionEffect.OPACITY.animation({
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
            .combine(TransitionEffect.move(TransitionEdge.END));
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: IndexPage_Params) {
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.angle !== undefined) {
            this.angle = params.angle;
        }
        if (params.appInfoList !== undefined) {
            this.appInfoList = params.appInfoList;
        }
        if (params.isAddApp !== undefined) {
            this.isAddApp = params.isAddApp;
        }
        if (params.itemAreaWidth !== undefined) {
            this.itemAreaWidth = params.itemAreaWidth;
        }
        if (params.isChange !== undefined) {
            this.isChange = params.isChange;
        }
        if (params.GridItemDeletion !== undefined) {
            this.GridItemDeletion = params.GridItemDeletion;
        }
        if (params.movedItem !== undefined) {
            this.movedItem = params.movedItem;
        }
        if (params.bgColor !== undefined) {
            this.bgColor = params.bgColor;
        }
        if (params.topSafeHeight !== undefined) {
            this.topSafeHeight = params.topSafeHeight;
        }
        if (params.effect !== undefined) {
            this.effect = params.effect;
        }
    }
    updateStateVars(params: IndexPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__angle.purgeDependencyOnElmtId(rmElmtId);
        this.__appInfoList.purgeDependencyOnElmtId(rmElmtId);
        this.__isAddApp.purgeDependencyOnElmtId(rmElmtId);
        this.__GridItemDeletion.purgeDependencyOnElmtId(rmElmtId);
        this.__movedItem.purgeDependencyOnElmtId(rmElmtId);
        this.__bgColor.purgeDependencyOnElmtId(rmElmtId);
        this.__topSafeHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__angle.aboutToBeDeleted();
        this.__appInfoList.aboutToBeDeleted();
        this.__isAddApp.aboutToBeDeleted();
        this.__GridItemDeletion.aboutToBeDeleted();
        this.__movedItem.aboutToBeDeleted();
        this.__bgColor.aboutToBeDeleted();
        this.__topSafeHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private swiperController: SwiperController;
    private scroller: Scroller;
    private dialogController: CustomDialogController;
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __angle: ObservedPropertySimplePU<number>;
    get angle() {
        return this.__angle.get();
    }
    set angle(newValue: number) {
        this.__angle.set(newValue);
    }
    private __appInfoList: ObservedPropertyObjectPU<Array<resourceArray>>;
    get appInfoList() {
        return this.__appInfoList.get();
    }
    set appInfoList(newValue: Array<resourceArray>) {
        this.__appInfoList.set(newValue);
    }
    private __isAddApp: ObservedPropertySimplePU<boolean>; // 应用被添加到首页应用时为true
    get isAddApp() {
        return this.__isAddApp.get();
    }
    set isAddApp(newValue: boolean) {
        this.__isAddApp.set(newValue);
    }
    private itemAreaWidth: number;
    private isChange: boolean;
    private __GridItemDeletion: ObservedPropertyObjectPU<GridItemDeletionCtrl<Resource[]>>;
    get GridItemDeletion() {
        return this.__GridItemDeletion.get();
    }
    set GridItemDeletion(newValue: GridItemDeletionCtrl<Resource[]>) {
        this.__GridItemDeletion.set(newValue);
    }
    private __movedItem: ObservedPropertyObjectPU<resourceArray>;
    get movedItem() {
        return this.__movedItem.get();
    }
    set movedItem(newValue: resourceArray) {
        this.__movedItem.set(newValue);
    }
    // 初始背景色赋值
    private __bgColor: ObservedPropertySimplePU<string>;
    get bgColor() {
        return this.__bgColor.get();
    }
    set bgColor(newValue: string) {
        this.__bgColor.set(newValue);
    }
    // 顶部安全高度赋值
    private __topSafeHeight: ObservedPropertySimplePU<number>;
    get topSafeHeight() {
        return this.__topSafeHeight.get();
    }
    set topSafeHeight(newValue: number) {
        this.__topSafeHeight.set(newValue);
    }
    /**
     * 应用被添加到首页应用所展示的动画
     */
    private effect: TransitionEffect;
    //定义onCancel回调方法
    onCancel() {
        console.info('Callback when the first button is clicked');
        this.appInfoList.push(new Array<Resource>().concat(Constants.SCENE_LIST, Constants.LIFE_LIST, Constants.MEN_LIST));
    }
    pixelMapBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.width('45%');
            __Common__.height('30%');
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PhotoItem(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, { photoArr: this.movedItem }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/IndexPage.ets", line: 107, col: 5 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            photoArr: this.movedItem
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        photoArr: this.movedItem
                    });
                }
            }, { name: "PhotoItem" });
        }
        __Common__.pop();
    }
    async aboutToAppear() {
        // 使用UIExtensionAbility：将common.UIAbilityContext 替换为common.UIExtensionContext
        const context1: common.UIAbilityContext = getContext(this) as common.UIAbilityContext;
        let result = AuthUtil.checkPermissions('ohos.permission.READ_MEDIA');
        if (!result) {
            reqPermissionsFromUser(permissions, context1);
            promptAction.showToast({
                message: '未授予权限，无法获取本地图片！',
            });
        }
        else {
        }
        let windowClass: window.Window = await window.getLastWindow(getContext(this));
        ;
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
                windowClass.setWindowSystemBarProperties(systemBarProperties);
            });
        });
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
            this.bgColor = "#" + color.alpha.toString(16) + color.red.toString(16) + color.green.toString(16) + color.blue.toString(16);
        });
    }
    changeIndex(itemIndex: number, insertIndex: number): void {
        const item = this.appInfoList.splice(itemIndex, 1)[0];
        this.appInfoList.splice(insertIndex, 0, item);
        // 创建一个新的数组副本来触发更新
        this.appInfoList = [...this.appInfoList];
    }
    // 监听数据变化函数
    monitoringData(): void {
        this.isChange = true;
        this.GridItemDeletion = new GridItemDeletionCtrl<Resource[]>(this.appInfoList);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(Constants.FULL_PERCENT);
            Column.height(Constants.FULL_PERCENT);
            Column.linearGradient({
                // 渐变方向
                direction: GradientDirection.Bottom,
                // 数组末尾元素占比小于1时，满足重复着色的效果
                colors: [[this.bgColor, 0.0], [Color.White, 0.5]]
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 16777226, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({ top: '30vp' });
            Row.padding({ left: { "id": 16777228, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" } });
            Row.width(Constants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777219, "type": 10003, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Text.fontSize({ "id": 16777227, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Text.fontWeight(Constants.TITLE_FONT_WEIGHT);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.bindMenu([
                {
                    value: '新建相册',
                    action: () => {
                        console.info('handle Menu1 select');
                        this.dialogController.open();
                    }
                },
                {
                    value: '设置',
                    action: () => {
                        console.info('handle Menu2 select');
                    }
                },
            ]);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new IconButton(this, {
                        options: {
                            iconRes: { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" },
                            iconColor: Color.Black,
                            buttonColor: Color.Transparent
                        }
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/IndexPage.ets", line: 174, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            options: {
                                iconRes: { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" },
                                iconColor: Color.Black,
                                buttonColor: Color.Transparent
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "IconButton" });
        }
        __Common__.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create(this.swiperController);
            Swiper.autoPlay(true);
            Swiper.loop(true);
            Swiper.margin({ "id": 16777224, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Swiper.borderRadius({ "id": 16777225, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Swiper.clip(true);
            Swiper.duration(Constants.BANNER_ANIMATE_DURATION);
            Swiper.indicator(false);
            Swiper.onAnimationStart(async (index, targetIndex) => {
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
                        Context.animateTo({ duration: 500, curve: Curve.Linear, iterations: 1 }, () => {
                            // 将取色器选取的color示例转换为十六进制颜色代码
                            this.bgColor = "#" + color.alpha.toString(16) + color.red.toString(16) + color.green.toString(16) + color.blue.toString(16);
                        });
                    });
                }
                catch (e) {
                }
            });
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(Constants.FULL_PERCENT);
                    Row.aspectRatio(Constants.BANNER_ASPECT_RATIO);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.width(Constants.FULL_PERCENT);
                    Image.height(Constants.FULL_PERCENT);
                }, Image);
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, Constants.BANNER_IMG_LIST, forEachItemGenFunction, (item: Resource, index?: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.scrollBar(BarState.Off);
            Grid.columnsTemplate(Constants.INDEX_COLUMNS_TEMPLATE);
            Grid.columnsGap({ "id": 16777224, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777224, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Grid.padding({ left: { "id": 16777224, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" }, right: { "id": 16777224, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" } });
            Grid.width(Constants.FULL_PERCENT);
            Grid.layoutWeight(1);
            Grid.supportAnimation(true);
            Grid.editMode(true);
            Grid.onItemDragStart((event: ItemDragInfo, itemIndex: number) => {
                // TODO:知识点:在onItemDragStart函数返回自定义组件，可在拖拽过程中显示此自定义组件。
                return { builder: () => {
                        this.pixelMapBuilder.call(this);
                    } };
            });
            Grid.onItemDrop((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => {
                // TODO:知识点:执行gridItem切换操作
                if (isSuccess && insertIndex < this.appInfoList.length) {
                    this.changeIndex(itemIndex, insertIndex);
                }
            });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const photoArr = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.width(Constants.FULL_PERCENT);
                        GridItem.aspectRatio(Constants.STACK_IMG_RATIO);
                        GridItem.transition(this.isAddApp ? this.effect : null);
                        GridItem.onAreaChange((oldValue: Area, newValue: Area) => {
                            this.itemAreaWidth = Number(newValue.width);
                        });
                        GridItem.onTouch((event: TouchEvent) => {
                            if (event.type === TouchType.Down) {
                                this.movedItem = this.appInfoList[index];
                            }
                        });
                        GridItem.attributeModifier.bind(this)(this.GridItemDeletion.getModifier(photoArr));
                        GridItem.onClick(() => {
                            router.pushUrl({
                                url: Constants.URL_LIST_PAGE,
                                params: { photoArr: photoArr }
                            });
                        });
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new PhotoItem(this, { photoArr: photoArr }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/IndexPage.ets", line: 253, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            photoArr: photoArr
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        photoArr: photoArr
                                    });
                                }
                            }, { name: "PhotoItem" });
                        }
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.appInfoList, forEachItemGenFunction, (photoArr: Resource, index?: number) => JSON.stringify(photoArr) + index, true, true);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "IndexPage";
    }
}
registerNamedRoute(() => new IndexPage(undefined, {}), "", { bundleName: "com.example.electronicalbum", moduleName: "entry", pagePath: "pages/IndexPage", pageFullPath: "entry/src/main/ets/pages/IndexPage", integratedHsp: "false" });

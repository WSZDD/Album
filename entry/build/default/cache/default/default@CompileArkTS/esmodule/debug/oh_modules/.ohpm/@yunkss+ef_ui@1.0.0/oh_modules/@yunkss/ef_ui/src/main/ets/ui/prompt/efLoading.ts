if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface efAlert_Params {
    rotateAngle?: number;
    options?: efLoadingOptions;
}
import { UiConst } from "@package:pkg_modules/.ohpm/@yunkss+ef_core@1.0.1/pkg_modules/@yunkss/ef_core/Index";
/**
 * @Author csx
 * @DateTime 2024/5/24 21:05
 * @TODO Loading
 */
function __Text__loadingTxt(fontSize: string | number): void {
    Text.fontSize(fontSize);
    Text.fontColor("#fff");
}
class efAlert extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__rotateAngle = new ObservedPropertySimplePU(0, this, "rotateAngle");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: efAlert_Params) {
        if (params.rotateAngle !== undefined) {
            this.rotateAngle = params.rotateAngle;
        }
    }
    updateStateVars(params: efAlert_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__rotateAngle.purgeDependencyOnElmtId(rmElmtId);
        this.__options.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__rotateAngle.aboutToBeDeleted();
        this.__options.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __rotateAngle: ObservedPropertySimplePU<number>;
    get rotateAngle() {
        return this.__rotateAngle.get();
    }
    set rotateAngle(newValue: number) {
        this.__rotateAngle.set(newValue);
    }
    /**
     * 属性配置
     */
    private __options: ObservedPropertyAbstractPU<efLoadingOptions> = this.createLocalStorageProp<efLoadingOptions>('efLoadingOptions', new efLoadingOptions(), "options");
    get options() {
        return this.__options.get();
    }
    set options(newValue: efLoadingOptions) {
        this.__options.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.alignContent(this.options.position ? this.options.position : Alignment.Center);
            Stack.width('100%');
            Stack.height('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor('#aa000000');
            Column.borderRadius(UiConst.NUMBER_10);
            Column.margin({
                top: this.options.position === Alignment.Top ? UiConst.NUMBER_40 : UiConst.NUMBER_20,
                bottom: this.options.position === Alignment.Bottom ? UiConst.NUMBER_40 : UiConst.NUMBER_20,
                left: UiConst.NUMBER_20,
                right: UiConst.NUMBER_20
            });
            Column.padding({
                top: UiConst.NUMBER_20,
                bottom: UiConst.NUMBER_20,
                left: UiConst.NUMBER_20,
                right: UiConst.NUMBER_20
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.options.imgLayout != undefined && this.options.imgLayout === ImgLayout.TOP) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(this.options.layoutShape != undefined && this.options.layoutShape === LoadingShape.RECTANGLE ? '100%' :
                            '50%');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
                        Context.animation({
                            duration: 50,
                            curve: Curve.Linear,
                            iterations: 1,
                            tempo: 100,
                            playMode: PlayMode.Normal,
                            onFinish: () => {
                                this.rotateAngle = this.rotateAngle + 15;
                            }
                        });
                        Image.width('30');
                        Context.animation(null);
                        Image.rotate({ angle: this.rotateAngle });
                        Image.onAppear(() => {
                            this.rotateAngle = 15;
                        });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.options.content);
                        Text.margin({ top: UiConst.NUMBER_20 });
                        __Text__loadingTxt(this.options.fontSize ? this.options.fontSize : UiConst.FONT_16);
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.options.imgLayout != undefined && this.options.imgLayout === ImgLayout.BOTTOM) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(this.options.layoutShape != undefined && this.options.layoutShape === LoadingShape.RECTANGLE ? '100%' :
                            '50%');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.options.content);
                        __Text__loadingTxt(this.options.fontSize ? this.options.fontSize : UiConst.FONT_16);
                        Text.margin({ bottom: UiConst.NUMBER_20 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
                        Context.animation({
                            duration: 50,
                            curve: Curve.Linear,
                            iterations: 1,
                            tempo: 100,
                            playMode: PlayMode.Normal,
                            onFinish: () => {
                                this.rotateAngle = this.rotateAngle + 15;
                            }
                        });
                        Image.width('30');
                        Context.animation(null);
                        Image.rotate({ angle: this.rotateAngle });
                        Image.onAppear(() => {
                            this.rotateAngle = 15;
                        });
                    }, Image);
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.options.imgLayout != undefined && this.options.imgLayout === ImgLayout.RIGHT) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(this.options.layoutShape != undefined && this.options.layoutShape === LoadingShape.RECTANGLE ? '100%' :
                            '50%');
                        Row.alignItems(VerticalAlign.Center);
                        Row.justifyContent(FlexAlign.SpaceBetween);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.options.content);
                        __Text__loadingTxt(this.options.fontSize ? this.options.fontSize : UiConst.FONT_16);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
                        Context.animation({
                            duration: 50,
                            curve: Curve.Linear,
                            iterations: 1,
                            tempo: 100,
                            playMode: PlayMode.Normal,
                            onFinish: () => {
                                this.rotateAngle = this.rotateAngle + 15;
                            }
                        });
                        Image.width('30');
                        Context.animation(null);
                        Image.rotate({ angle: this.rotateAngle });
                        Image.onAppear(() => {
                            this.rotateAngle = 15;
                        });
                    }, Image);
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.options.imgLayout != undefined && this.options.imgLayout === ImgLayout.LEFT) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(this.options.layoutShape != undefined && this.options.layoutShape === LoadingShape.RECTANGLE ? '100%' :
                            '50%');
                        Row.alignItems(VerticalAlign.Center);
                        Row.justifyContent(FlexAlign.Start);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
                        Context.animation({
                            duration: 50,
                            curve: Curve.Linear,
                            iterations: 1,
                            tempo: 100,
                            playMode: PlayMode.Normal,
                            onFinish: () => {
                                this.rotateAngle = this.rotateAngle + 15;
                            }
                        });
                        Image.width('30');
                        Context.animation(null);
                        Image.rotate({ angle: this.rotateAngle });
                        Image.onAppear(() => {
                            this.rotateAngle = 15;
                        });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.options.content);
                        __Text__loadingTxt(this.options.fontSize ? this.options.fontSize : UiConst.FONT_16);
                        Text.margin({ left: UiConst.NUMBER_20 });
                    }, Text);
                    Text.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "efAlert";
    }
}
/**
 * 窗口loading方式入参实体
 */
@Observed
export class efLoadingOptions {
    /**
     * 加载内容
     */
    @Track
    content: string = '';
    /**
     * 内容字体大小
     */
    @Track
    fontSize?: string | number;
    /**
     * loading位置
     */
    @Track
    position?: Alignment;
    /**
     * 图片布局方式
     */
    @Track
    imgLayout?: ImgLayout;
    /**
     * 弹框形状
     */
    @Track
    layoutShape?: LoadingShape;
    constructor() {
        this.content = '小的正在努力加载中...';
    }
}
/**
 * 弹框形状布局
 */
export enum LoadingShape {
    /**
     * 正方形
     */
    SQUARE = 0,
    /**
     * 矩形
     */
    RECTANGLE = 1
}
/**
 * 图片文字布局枚举
 */
export enum ImgLayout {
    /**
     * 图片在文字上方
     */
    TOP = 0,
    /**
     * 图片在文字下方
     */
    BOTTOM = 1,
    /**
     * 图片在文字左侧
     */
    LEFT = 2,
    /**
     * 图片在文字右侧
     */
    RIGHT = 3
}
{
    let routeNameNode = 'efLoading';
    if (routeNameNode != undefined) {
        registerNamedRoute(() => new efAlert(undefined, {}, LocalStorage.getShared()), routeNameNode, { bundleName: "com.example.electronicalbum", moduleName: "entry", pagePath: "../../../../oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efLoading", pageFullPath: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efLoading", integratedHsp: "false" });
    }
    else {
        registerNamedRoute(() => new efAlert(undefined, {}, LocalStorage.getShared()), "", { bundleName: "com.example.electronicalbum", moduleName: "entry", pagePath: "../../../../oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efLoading", pageFullPath: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efLoading", integratedHsp: "false" });
    }
}

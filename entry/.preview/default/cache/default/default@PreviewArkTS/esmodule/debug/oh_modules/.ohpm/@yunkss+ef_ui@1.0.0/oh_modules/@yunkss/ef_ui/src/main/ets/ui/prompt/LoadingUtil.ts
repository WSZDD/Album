if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LoadingUtil_Params {
    options?: LoadOptions;
    dialogControllerProgress?: CustomDialogController;
}
import { LoadingDialog } from "@ohos:arkui.advanced.Dialog";
export class LoadingUtil extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.dialogControllerProgress = new CustomDialogController({
            builder: () => {
                let jsDialog = new LoadingDialog(this, {
                    content: this.options.content
                }, undefined, -1, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/LoadingUtil.ets", line: 33, col: 14 });
                jsDialog.setController(this.dialogControllerProgress);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        content: this.options.content
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: false,
            alignment: this.options.alignment != undefined ? this.options.alignment : DialogAlignment.Center,
            offset: this.options.offset != undefined ? this.options.offset :
                this.options.alignment == DialogAlignment.Bottom || this.options.alignment == DialogAlignment.BottomEnd ||
                    this.options.alignment == DialogAlignment.BottomStart ? {
                    dx: 0,
                    dy: -20
                } : this.options.alignment == DialogAlignment.Top || this.options.alignment == DialogAlignment.TopStart ||
                    this.options.alignment == DialogAlignment.TopEnd ? {
                    dx: 0,
                    dy: 50
                } : { dx: 0, dy: 0 },
            customStyle: true,
            gridCount: 10,
            maskRect: {
                x: 0,
                y: 0,
                width: '100%',
                height: '100%'
            },
            openAnimation: { duration: 500, tempo: 0.7, curve: Curve.EaseInOut },
            closeAnimation: { duration: 500, tempo: 0.7, curve: Curve.FastOutLinearIn },
            showInSubWindow: this.options.showInSubWindow != undefined ? this.options.showInSubWindow : false,
            isModal: true
        }, this);
        this.setInitiallyProvidedValue(params);
        this.declareWatch("options", this.change);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LoadingUtil_Params) {
        if (params.options === undefined) {
            this.__options.set(new LoadOptions());
        }
        if (params.dialogControllerProgress !== undefined) {
            this.dialogControllerProgress = params.dialogControllerProgress;
        }
    }
    updateStateVars(params: LoadingUtil_Params) {
        this.__options.reset(params.options);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__options.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__options.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __options: SynchedPropertySimpleOneWayPU<LoadOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: LoadOptions) {
        this.__options.set(newValue);
    }
    /**
     * 自定义loading
     */
    private dialogControllerProgress: CustomDialogController;
    change() {
        if (!this.options.content) {
            this.options.content = '正在拼命加载中,请稍后...';
        }
        if (this.options.alignment == undefined) {
            this.options.alignment = DialogAlignment.Center;
        }
        if (this.options.show) {
            this.show();
        }
        else {
            this.close();
        }
    }
    /**
     * 打开全局加载模态框
     */
    show() {
        this.dialogControllerProgress.open();
    }
    /**
     * 关闭全局加载模态框
     */
    close() {
        this.dialogControllerProgress.close();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/LoadingUtil.ets(91:5)", "@yunkss/ef_ui");
        }, Row);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * 加载框参数
 */
class LoadOptions {
    /**
     * 弹窗在竖直方向上的对齐方式
     */
    public alignment?: DialogAlignment;
    /**
     * 弹窗相对alignment所在位置的偏移量
     */
    public offset?: Offset;
    /**
     * 是否显示在主窗口之外
     */
    public showInSubWindow?: boolean;
    /**
     * 加载内容
     */
    public content?: ResourceStr;
    /**
     * 是否显示
     */
    public show?: boolean;
}

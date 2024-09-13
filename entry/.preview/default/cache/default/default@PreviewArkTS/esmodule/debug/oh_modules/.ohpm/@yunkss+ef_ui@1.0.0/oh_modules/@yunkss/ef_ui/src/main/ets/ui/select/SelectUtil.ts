if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SelectUtil_Params {
    options?: SelectOptions;
    radioIndex?;
    radioList?: Array<SheetInfo>;
    dialogControllerProgress?: CustomDialogController;
}
import { SelectDialog } from "@ohos:arkui.advanced.Dialog";
import { UiConst } from "@package:pkg_modules/.ohpm/@yunkss+ef_core@1.0.1/pkg_modules/@yunkss/ef_core/Index";
export class SelectUtil extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.radioIndex = -1;
        this.radioList = new Array<SheetInfo>();
        this.dialogControllerProgress = new CustomDialogController({
            builder: () => {
                let jsDialog = new SelectDialog(this, {
                    title: this.options.title != undefined ? this.options.title : '请选择',
                    content: this.options.content != undefined ? this.options.content : '',
                    selectedIndex: this.radioIndex,
                    confirm: {
                        value: this.options.btnTxt != undefined ? this.options.btnTxt : '取消',
                        background: UiConst.DIALOG_OK_COLOR,
                        fontColor: UiConst.ALERT_OK_COLOR,
                        action: () => {
                            this.options.clickCallBack("");
                        }
                    },
                    radioContent: this.radioList
                }, undefined, -1, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/SelectUtil.ets", line: 35, col: 14 });
                jsDialog.setController(this.dialogControllerProgress);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        title: this.options.title != undefined ? this.options.title : '请选择',
                        content: this.options.content != undefined ? this.options.content : '',
                        selectedIndex: this.radioIndex,
                        confirm: {
                            value: this.options.btnTxt != undefined ? this.options.btnTxt : '取消',
                            background: UiConst.DIALOG_OK_COLOR,
                            fontColor: UiConst.ALERT_OK_COLOR,
                            action: () => {
                                this.options.clickCallBack("");
                            }
                        },
                        radioContent: this.radioList
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
            // maskColor: UiConst.DIALOG_CANCEL_COLOR,
            openAnimation: { duration: 500, tempo: 0.7, curve: Curve.EaseInOut },
            closeAnimation: { duration: 500, tempo: 0.7, curve: Curve.FastOutLinearIn },
            showInSubWindow: false,
            isModal: true
        }, this);
        this.setInitiallyProvidedValue(params);
        this.declareWatch("options", this.change);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SelectUtil_Params) {
        if (params.options === undefined) {
            this.__options.set(new SelectOptions());
        }
        if (params.radioIndex !== undefined) {
            this.radioIndex = params.radioIndex;
        }
        if (params.radioList !== undefined) {
            this.radioList = params.radioList;
        }
        if (params.dialogControllerProgress !== undefined) {
            this.dialogControllerProgress = params.dialogControllerProgress;
        }
    }
    updateStateVars(params: SelectUtil_Params) {
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
    private __options: SynchedPropertySimpleOneWayPU<SelectOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: SelectOptions) {
        this.__options.set(newValue);
    }
    private radioIndex;
    private radioList: Array<SheetInfo>;
    /**
     * 自定义Tips
     */
    private dialogControllerProgress: CustomDialogController;
    change() {
        if (this.options.ctxList) {
            this.radioList = new Array();
            this.options.ctxList.forEach((item) => {
                this.radioList.push({
                    title: item,
                    action: () => {
                        this.radioIndex = this.options.ctxList.indexOf(item);
                        this.options.clickCallBack(this.options.ctxList[this.radioIndex]);
                    }
                });
            });
        }
        if (this.options.show) {
            this.show();
        }
        else {
            this.radioIndex = -1;
            this.radioList = new Array();
            this.close();
        }
    }
    /**
     * 打开提示模态框
     */
    show() {
        this.dialogControllerProgress.open();
    }
    /**
     * 关闭提示模态框
     */
    close() {
        this.dialogControllerProgress.close();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/SelectUtil.ets(113:5)", "@yunkss/ef_ui");
        }, Row);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * 下拉框框参数
 */
class SelectOptions {
    /**
     * 选择弹出框标题
     */
    public title?: ResourceStr;
    /**
     * 选择弹出框内容
     */
    public content?: ResourceStr;
    /**
     * 选项内容数组
     */
    public ctxList: Array<string> = new Array();
    /**
     * 按钮字符串
     */
    public btnTxt?: string;
    /**
     * 点击弹框按钮回调函数
     */
    public clickCallBack: (selectData: string) => void = () => {
    };
    /**
     * 是否显示
     */
    public show: boolean = false;
    /**
     * 弹窗在竖直方向上的对齐方式
     */
    public alignment?: DialogAlignment;
    /**
     * 弹窗相对alignment所在位置的偏移量
     */
    public offset?: Offset;
}

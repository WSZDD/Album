if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ConfirmUtil_Params {
    options?: ConfirmOptions;
    isChecked?: boolean;
    dialogControllerProgress?: CustomDialogController;
}
import { ConfirmDialog } from "@ohos:arkui.advanced.Dialog";
import { UiConst } from "@package:pkg_modules/.ohpm/@yunkss+ef_core@1.0.1/pkg_modules/@yunkss/ef_core/Index";
export class ConfirmUtil extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.isChecked = false;
        this.dialogControllerProgress = new CustomDialogController({
            builder: () => {
                let jsDialog = new ConfirmDialog(this, {
                    title: this.options.title,
                    content: this.options.content,
                    checkTips: this.options.checkTips != undefined ? this.options.checkTips : '禁止后不再提醒',
                    isChecked: this.isChecked,
                    primaryButton: {
                        value: this.options.btnList ? this.options.btnList[0] : '禁止',
                        background: UiConst.DIALOG_OK_COLOR,
                        fontColor: UiConst.ALERT_OK_COLOR,
                        action: () => {
                            this.isChecked = true;
                            this.options.clickCallBack(0, this.isChecked);
                        }
                    },
                    secondaryButton: {
                        value: this.options.btnList && this.options.btnList.length > 1 ? this.options.btnList[1] : '允许',
                        background: UiConst.DIALOG_CANCEL_COLOR,
                        fontColor: UiConst.ALERT_OK_COLOR,
                        action: () => {
                            this.isChecked = false;
                            this.options.clickCallBack(1, this.isChecked);
                        }
                    }
                }, undefined, -1, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/ConfirmUtil.ets", line: 33, col: 14 });
                jsDialog.setController(this.dialogControllerProgress);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        title: this.options.title,
                        content: this.options.content,
                        checkTips: this.options.checkTips != undefined ? this.options.checkTips : '禁止后不再提醒',
                        isChecked: this.isChecked,
                        primaryButton: {
                            value: this.options.btnList ? this.options.btnList[0] : '禁止',
                            background: UiConst.DIALOG_OK_COLOR,
                            fontColor: UiConst.ALERT_OK_COLOR,
                            action: () => {
                                this.isChecked = true;
                                this.options.clickCallBack(0, this.isChecked);
                            }
                        },
                        secondaryButton: {
                            value: this.options.btnList && this.options.btnList.length > 1 ? this.options.btnList[1] : '允许',
                            background: UiConst.DIALOG_CANCEL_COLOR,
                            fontColor: UiConst.ALERT_OK_COLOR,
                            action: () => {
                                this.isChecked = false;
                                this.options.clickCallBack(1, this.isChecked);
                            }
                        }
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: false,
            alignment: this.options.alignment != undefined ? this.options.alignment : DialogAlignment.Center,
            offset: this.options.offset != undefined ? this.options.offset : this.options.alignment == DialogAlignment.Bottom || this.options.alignment == DialogAlignment.BottomEnd || this.options.alignment == DialogAlignment.BottomStart ? {
                dx: 0,
                dy: -20
            } : this.options.alignment == DialogAlignment.Top || this.options.alignment == DialogAlignment.TopStart || this.options.alignment == DialogAlignment.TopEnd ? {
                dx: 0,
                dy: 50
            } : { dx: 0, dy: 0 },
            customStyle: true,
            gridCount: 10,
            maskRect: { x: 0, y: 0, width: '100%', height: '100%' },
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
    setInitiallyProvidedValue(params: ConfirmUtil_Params) {
        if (params.options === undefined) {
            this.__options.set(new ConfirmOptions());
        }
        if (params.isChecked !== undefined) {
            this.isChecked = params.isChecked;
        }
        if (params.dialogControllerProgress !== undefined) {
            this.dialogControllerProgress = params.dialogControllerProgress;
        }
    }
    updateStateVars(params: ConfirmUtil_Params) {
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
    private __options: SynchedPropertySimpleOneWayPU<ConfirmOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: ConfirmOptions) {
        this.__options.set(newValue);
    }
    private isChecked: boolean;
    /**
     * 自定义Tips
     */
    private dialogControllerProgress: CustomDialogController;
    change() {
        if (!this.options.title) {
            this.options.title = '操作确认';
        }
        if (this.options.show) {
            this.show();
        }
        else {
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
        }, Row);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * Tips框参数
 */
class ConfirmOptions {
    /**
     * 提示框标题
     */
    public title?: ResourceStr;
    /**
     * 提示框内容
     */
    public content?: ResourceStr;
    /**
     * 弹窗在竖直方向上的对齐方式
     */
    public checkTips?: ResourceStr;
    /**
     * 按钮字符串数组
     */
    public btnList?: Array<string>;
    /**
     * 点击弹框按钮回调函数
     */
    public clickCallBack: (index: number, isCheck: boolean) => void = () => {
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

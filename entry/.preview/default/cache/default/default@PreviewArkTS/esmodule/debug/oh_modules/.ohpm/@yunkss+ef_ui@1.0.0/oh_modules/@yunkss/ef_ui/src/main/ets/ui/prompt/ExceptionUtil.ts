if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ExceptionUtil_Params {
    options?: PromOptions;
}
import { ExceptionPrompt, MarginType } from "@ohos:arkui.advanced.ExceptionPrompt";
export class ExceptionUtil extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__options = new SynchedPropertyObjectOneWayPU(params.options, this, "options");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ExceptionUtil_Params) {
        if (params.options === undefined) {
            this.__options.set(new PromOptions());
        }
    }
    updateStateVars(params: ExceptionUtil_Params) {
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
    private __options: SynchedPropertySimpleOneWayPU<PromOptions>;
    get options() {
        return this.__options.get();
    }
    set options(newValue: PromOptions) {
        this.__options.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/ExceptionUtil.ets(30:5)", "@yunkss/ef_ui");
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ExceptionPrompt(this, {
                        options: {
                            tip: this.options.content != undefined ? this.options.content : '连接服务器异常,请重试!',
                            icon: { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" },
                            marginType: MarginType.FIT_MARGIN,
                            actionText: this.options.actionText != undefined ? this.options.actionText : '重试',
                            marginTop: '40vp',
                            isShown: this.options.show
                        },
                        onTipClick: () => {
                            this.options.clickCallBack(0);
                        },
                        onActionTextClick: () => {
                            this.options.clickCallBack(1);
                        },
                    }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/ExceptionUtil.ets", line: 31, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            options: {
                                tip: this.options.content != undefined ? this.options.content : '连接服务器异常,请重试!',
                                icon: { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" },
                                marginType: MarginType.FIT_MARGIN,
                                actionText: this.options.actionText != undefined ? this.options.actionText : '重试',
                                marginTop: '40vp',
                                isShown: this.options.show
                            },
                            onTipClick: () => {
                                this.options.clickCallBack(0);
                            },
                            onActionTextClick: () => {
                                this.options.clickCallBack(1);
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        options: {
                            tip: this.options.content != undefined ? this.options.content : '连接服务器异常,请重试!',
                            icon: { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" },
                            marginType: MarginType.FIT_MARGIN,
                            actionText: this.options.actionText != undefined ? this.options.actionText : '重试',
                            marginTop: '40vp',
                            isShown: this.options.show
                        }
                    });
                }
            }, { name: "ExceptionPrompt" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * Tips框参数
 */
class PromOptions {
    /**
     * 提示框内容
     */
    public content?: ResourceStr;
    /**
     * 指定当前异常提示的右侧图标按钮的文字
     */
    public actionText?: ResourceStr;
    /**
     * 是否显示
     */
    public show: boolean = false;
    /**
     * 点击弹框按钮回调函数
     */
    public clickCallBack: (index: number) => void = () => {
    };
}

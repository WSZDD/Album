if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface efAlert_Params {
    options?: efAlertOptions;
}
import { UiConst } from "@package:pkg_modules/.ohpm/@yunkss+ef_core@1.0.1/pkg_modules/@yunkss/ef_core/Index";
import { WinDialogUtil } from "@package:pkg_modules/.ohpm/@yunkss+ef_ui@1.0.0/pkg_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/WinDialogUtil";
class efAlert extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: efAlert_Params) {
    }
    updateStateVars(params: efAlert_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__options.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__options.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    /**
     * 属性配置
     */
    private __options: ObservedPropertyAbstractPU<efAlertOptions> = this.createLocalStorageProp<efAlertOptions>('efAlertOptions', new efAlertOptions(), "options");
    get options() {
        return this.__options.get();
    }
    set options(newValue: efAlertOptions) {
        this.__options.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(34:5)", "@yunkss/ef_ui");
            Stack.width('100%');
            Stack.height('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(35:7)", "@yunkss/ef_ui");
            Column.backgroundColor('#fff');
            Column.borderRadius(UiConst.NUMBER_10);
            Column.margin({
                top: UiConst.NUMBER_20,
                bottom: UiConst.NUMBER_20,
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
            Row.create();
            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(36:9)", "@yunkss/ef_ui");
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.options.title);
            Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(37:11)", "@yunkss/ef_ui");
            Text.fontSize(UiConst.FONT_18);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Image.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(39:11)", "@yunkss/ef_ui");
            Image.width(UiConst.NUMBER_18);
            Image.margin({ left: UiConst.NUMBER_5 });
            Image.padding({ bottom: UiConst.NUMBER_3 });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(45:9)", "@yunkss/ef_ui");
            Row.margin({ top: UiConst.NUMBER_20 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.options.content);
            Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(46:11)", "@yunkss/ef_ui");
            Text.fontSize(UiConst.FONT_16);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(52:9)", "@yunkss/ef_ui");
            Row.padding({ top: UiConst.NUMBER_20 });
            Row.width('100%');
            Row.alignItems(VerticalAlign.Bottom);
            Row.justifyContent(FlexAlign.SpaceAround);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.options.okText);
            Button.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(53:11)", "@yunkss/ef_ui");
            Button.backgroundColor(UiConst.ALERT_OK_BG_COLOR);
            Button.padding({ left: UiConst.NUMBER_50, right: UiConst.NUMBER_50 });
            Button.onClick(() => {
                //当前窗体名称
                let winName = LocalStorage.getShared().get<string>("efDialogName");
                //确定点击事件
                this.getUIContext().runScopedTask(() => {
                    if (this.options.okCallBack) {
                        //如果非自动关闭回调函数返回当前窗体名称
                        if (this.options.isAutoClose == false) {
                            this.options.okCallBack(winName);
                        }
                        else {
                            this.options.okCallBack();
                        }
                    }
                });
                if (this.options.isAutoClose) {
                    if (winName) {
                        //关闭弹窗
                        WinDialogUtil.closeAlert(winName);
                    }
                }
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.options.cancelText);
            Button.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert.ets(77:11)", "@yunkss/ef_ui");
            Button.backgroundColor(UiConst.DIALOG_CANCEL_COLOR);
            Button.padding({ left: UiConst.NUMBER_50, right: UiConst.NUMBER_50 });
            Button.onClick(() => {
                //当前窗体名称
                let winName = LocalStorage.getShared().get<string>("efDialogName");
                //取消点击事件
                this.getUIContext().runScopedTask(() => {
                    if (this.options.cancelCallBack) {
                        //如果非自动关闭回调函数返回当前窗体名称
                        if (this.options.isAutoClose == false) {
                            this.options.cancelCallBack(winName);
                        }
                        else {
                            this.options.cancelCallBack();
                        }
                    }
                });
                if (this.options.isAutoClose) {
                    if (winName) {
                        //关闭弹窗
                        WinDialogUtil.closeAlert(winName);
                    }
                }
            });
        }, Button);
        Button.pop();
        Row.pop();
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
 * 窗口弹框方式入参实体
 */
export class efAlertOptions {
    /**
     * 提醒标题
     */
    title?: string;
    /**
     * 提醒内容
     */
    content: string = '';
    /**
     * 确认文本
     */
    okText?: string;
    /**
     * 取消文本
     */
    cancelText?: string;
    /**
     * 是否点击时自动关闭弹框(1.1.13+)
     */
    isAutoClose?: boolean;
    /**
     * 确认回调函数,非自动关闭窗体时winName为当前窗体名称
     */
    okCallBack?: (winName?: string) => void;
    /**
     * 取消回调函数,非自动关闭窗体时winName为当前窗体名称
     */
    cancelCallBack?: (winName?: string) => void;
    constructor() {
        this.title = '温馨提示';
        this.okText = "确定";
        this.cancelText = "取消";
        this.isAutoClose = true;
    }
}
{
    let routeNameNode = 'efAlert';
    if (routeNameNode != undefined) {
        registerNamedRoute(() => new efAlert(undefined, {}, LocalStorage.getShared()), routeNameNode, { bundleName: "com.example.electronicalbum", moduleName: "entry", pagePath: "../../../../oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert", pageFullPath: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert", integratedHsp: "false" });
    }
    else {
        registerNamedRoute(() => new efAlert(undefined, {}, LocalStorage.getShared()), "", { bundleName: "com.example.electronicalbum", moduleName: "entry", pagePath: "../../../../oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert", pageFullPath: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert", integratedHsp: "false" });
    }
}

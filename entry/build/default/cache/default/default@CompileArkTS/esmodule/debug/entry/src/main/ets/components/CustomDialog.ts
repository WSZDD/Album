if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CustomDialogAdd_Params {
    controller?: CustomDialogController;
    textValue?: string;
    cancel?: () => void;
    confirm?: () => void;
}
export class CustomDialogAdd extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = undefined;
        this.textValue = '';
        this.cancel = () => {
        };
        this.confirm = () => {
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CustomDialogAdd_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.textValue !== undefined) {
            this.textValue = params.textValue;
        }
        if (params.cancel !== undefined) {
            this.cancel = params.cancel;
        }
        if (params.confirm !== undefined) {
            this.confirm = params.confirm;
        }
    }
    updateStateVars(params: CustomDialogAdd_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    private textValue: string;
    private cancel: () => void;
    private confirm: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('新建相册');
            Text.fontSize(20);
            Text.margin(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '', text: this.textValue });
            TextInput.height(60);
            TextInput.width('90%');
            TextInput.onChange((value: string) => {
                this.textValue = value;
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceAround
            });
            Flex.margin({
                bottom: 20,
                top: 20
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('取消');
            Button.backgroundColor('#00000000');
            Button.fontColor(Color.Black);
            Button.onClick(() => {
                this.controller.close();
                this.cancel();
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('确认');
            Button.backgroundColor('#00000000');
            Button.fontColor(Color.Red);
            Button.onClick(() => {
                this.controller.close();
                this.confirm();
            });
        }, Button);
        Button.pop();
        Flex.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

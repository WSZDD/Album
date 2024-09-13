if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface IconButton_Params {
    options?: IconButtonOptions;
}
export interface IconButtonOptions {
    iconRes: PixelMap | ResourceStr | DrawableDescriptor;
    rotate?: number;
    iconColor?: ResourceColor;
    iconSize?: Size;
    buttonSize?: Size;
    buttonColor?: ResourceColor;
}
export class IconButton extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.options = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: IconButton_Params) {
        if (params.options !== undefined) {
            this.options = params.options;
        }
    }
    updateStateVars(params: IconButton_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private options?: IconButtonOptions;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.debugLine("entry/src/main/ets/components/IconButton.ets(15:9)", "entry");
            Button.type(ButtonType.Circle);
            Button.buttonStyle(ButtonStyleMode.TEXTUAL);
            Button.backgroundColor(this.options?.buttonColor);
            Button.size({
                width: this.options?.buttonSize?.width ?? 36,
                height: this.options?.buttonSize?.height ?? 36
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.options?.iconRes);
            Image.debugLine("entry/src/main/ets/components/IconButton.ets(16:13)", "entry");
            Image.fillColor(this.options?.iconColor);
            Image.size({
                width: this.options?.iconSize?.width ?? 24,
                height: this.options?.iconSize?.height ?? 24
            });
            Image.rotate({
                centerX: '50%',
                centerY: '50%',
                angle: this.options?.rotate ?? 0
            });
        }, Image);
        Button.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

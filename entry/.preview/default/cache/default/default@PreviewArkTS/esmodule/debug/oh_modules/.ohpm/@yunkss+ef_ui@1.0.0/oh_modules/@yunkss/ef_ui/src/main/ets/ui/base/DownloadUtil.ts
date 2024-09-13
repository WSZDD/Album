if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DownloadUtil_Params {
    halfProgress?: number;
    ctx?: string;
    progressState?: Visibility;
}
import { ProgressButton } from "@ohos:arkui.advanced.ProgressButton";
export class DownloadUtil extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__halfProgress = new SynchedPropertySimpleOneWayPU(params.halfProgress, this, "halfProgress");
        this.__ctx = new SynchedPropertySimpleOneWayPU(params.ctx, this, "ctx");
        this.__progressState = new SynchedPropertySimpleOneWayPU(params.progressState, this, "progressState");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DownloadUtil_Params) {
        if (params.halfProgress === undefined) {
            this.__halfProgress.set(0
            /**
             * 下载提示内容
             */
            );
        }
        if (params.ctx === undefined) {
            this.__ctx.set('下载中...'
            /**
             * 是否显示
             */
            );
        }
        if (params.progressState === undefined) {
            this.__progressState.set(Visibility.None);
        }
    }
    updateStateVars(params: DownloadUtil_Params) {
        this.__halfProgress.reset(params.halfProgress);
        this.__ctx.reset(params.ctx);
        this.__progressState.reset(params.progressState);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__halfProgress.purgeDependencyOnElmtId(rmElmtId);
        this.__ctx.purgeDependencyOnElmtId(rmElmtId);
        this.__progressState.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__halfProgress.aboutToBeDeleted();
        this.__ctx.aboutToBeDeleted();
        this.__progressState.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    /**
     * 当前下载进度
     */
    private __halfProgress: SynchedPropertySimpleOneWayPU<number>;
    get halfProgress() {
        return this.__halfProgress.get();
    }
    set halfProgress(newValue: number) {
        this.__halfProgress.set(newValue);
    }
    /**
     * 下载提示内容
     */
    private __ctx: SynchedPropertySimpleOneWayPU<string>;
    get ctx() {
        return this.__ctx.get();
    }
    set ctx(newValue: string) {
        this.__ctx.set(newValue);
    }
    /**
     * 是否显示
     */
    private __progressState: SynchedPropertySimpleOneWayPU<Visibility>;
    get progressState() {
        return this.__progressState.get();
    }
    set progressState(newValue: Visibility) {
        this.__progressState.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/DownloadUtil.ets(40:5)", "@yunkss/ef_ui");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.visibility(this.progressState);
            __Common__.padding({ top: 12, bottom: 12 });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ProgressButton(this, {
                        progress: this.halfProgress,
                        progressButtonWidth: "120",
                        content: this.ctx,
                        enable: true,
                        clickCallback: () => {
                        }
                    }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/DownloadUtil.ets", line: 41, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            progress: this.halfProgress,
                            progressButtonWidth: "120",
                            content: this.ctx,
                            enable: true,
                            clickCallback: () => {
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        progress: this.halfProgress,
                        content: this.ctx,
                        enable: true
                    });
                }
            }, { name: "ProgressButton" });
        }
        __Common__.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

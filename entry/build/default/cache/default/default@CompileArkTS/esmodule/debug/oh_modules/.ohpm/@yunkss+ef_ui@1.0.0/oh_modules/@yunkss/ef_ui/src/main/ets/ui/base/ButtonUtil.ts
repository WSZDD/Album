if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ButtonUtil_Params {
    btnOptions?: BtnOptions;
}
import { FunctionalButton, functionalButtonComponentManager } from "@hms:core.atomicserviceComponent.atomicserviceUi";
import { ToastUtil } from "@package:pkg_modules/.ohpm/@yunkss+ef_ui@1.0.0/pkg_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/ToastUtil";
import { JSONObject } from "@package:pkg_modules/.ohpm/@yunkss+ef_json@1.0.1/pkg_modules/@yunkss/ef_json/Index";
/**
 * 场景按钮UI
 * @param params  场景类型参数
 * @param callBack  按钮回调函数
 */
function buildFunctionBtn(params: functionalButtonComponentManager.FunctionalButtonParams, callBack: (data: string) => void, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //快速验证手机号
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onGetPhoneNumber((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('快速验证手机号失败,原因为:' + err.message);
                                    }
                                    else {
                                        if (data.code) {
                                            callBack(data.code);
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 32, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onGetPhoneNumber((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('快速验证手机号失败,原因为:' + err.message);
                                        }
                                        else {
                                            if (data.code) {
                                                callBack(data.code);
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.GET_REALTIME_PHONENUMBER) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //实时验证手机号
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onGetRealtimePhoneNumber((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('实时验证手机号失败,原因为:' + err.message);
                                    }
                                    else {
                                        if (data.code) {
                                            callBack(data.code);
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 48, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onGetRealtimePhoneNumber((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('实时验证手机号失败,原因为:' + err.message);
                                        }
                                        else {
                                            if (data.code) {
                                                callBack(data.code);
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.LAUNCH_APP) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //打开应用
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onLaunchApp((err) => {
                                    if (err) {
                                        ToastUtil.showToast('打开APP失败,原因为:' + err.message);
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 64, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onLaunchApp((err) => {
                                        if (err) {
                                            ToastUtil.showToast('打开APP失败,原因为:' + err.message);
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.OPEN_SETTING) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //打开设置
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onOpenSetting((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('打开设置失败,原因为:' + err.message);
                                    }
                                    else {
                                        if (data.permissions) {
                                            callBack(JSONObject.toJSONString(data.permissions));
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 76, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onOpenSetting((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('打开设置失败,原因为:' + err.message);
                                        }
                                        else {
                                            if (data.permissions) {
                                                callBack(JSONObject.toJSONString(data.permissions));
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.CHOOSE_AVATAR) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //选择头像
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onChooseAvatar((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('选择头像失败,原因为:' + err.message);
                                    }
                                    else {
                                        if (data.avatarUri) {
                                            callBack(data.avatarUri);
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 92, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onChooseAvatar((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('选择头像失败,原因为:' + err.message);
                                        }
                                        else {
                                            if (data.avatarUri) {
                                                callBack(data.avatarUri);
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.CHOOSE_ADDRESS) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //选择地址
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onChooseAddress((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('选择地址失败,原因为:' + err.message);
                                    }
                                    else {
                                        if (data) {
                                            callBack(JSONObject.toJSONString(data));
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 108, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onChooseAddress((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('选择地址失败,原因为:' + err.message);
                                        }
                                        else {
                                            if (data) {
                                                callBack(JSONObject.toJSONString(data));
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.CHOOSE_INVOICE_TITLE) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //选择发票抬头
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onChooseInvoiceTitle((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('选择发票抬头失败,原因为:' + err.message);
                                    }
                                    else {
                                        if (data) {
                                            callBack(JSONObject.toJSONString(data));
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 124, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onChooseInvoiceTitle((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('选择发票抬头失败,原因为:' + err.message);
                                        }
                                        else {
                                            if (data) {
                                                callBack(JSONObject.toJSONString(data));
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.FACE_AUTHENTICATION) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //人脸核验
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onFaceAuthentication((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('人脸核验错误,原因为:' + err.message);
                                    }
                                    else {
                                        if (data) {
                                            callBack(JSONObject.toJSONString(data));
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 140, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onFaceAuthentication((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('人脸核验错误,原因为:' + err.message);
                                        }
                                        else {
                                            if (data) {
                                                callBack(JSONObject.toJSONString(data));
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.REAL_NAME_AUTHENTICATION) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //实名认证
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onRealNameAuthentication((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('实名认证失败,原因为:' + err.message);
                                    }
                                    else {
                                        if (data) {
                                            callBack(JSONObject.toJSONString(data));
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 157, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onRealNameAuthentication((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('实名认证失败,原因为:' + err.message);
                                        }
                                        else {
                                            if (data) {
                                                callBack(JSONObject.toJSONString(data));
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (params.openType === functionalButtonComponentManager.OpenType.CHOOSE_LOCATION) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            //地图选点
                            FunctionalButton(ViewPU.__proto__ !== NativeViewPartialUpdate && parent instanceof PUV2ViewBase ? parent : this, {
                                params: params,
                                controller: new functionalButtonComponentManager.FunctionalButtonController()
                                    .onChooseLocation((err, data) => {
                                    if (err) {
                                        ToastUtil.showToast('地图选点失败,原因为:' + err.message);
                                    }
                                    else {
                                        if (data) {
                                            callBack(JSONObject.toJSONString(data));
                                        }
                                    }
                                })
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/base/ButtonUtil.ets", line: 173, col: 5 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    params: params,
                                    controller: new functionalButtonComponentManager.FunctionalButtonController()
                                        .onChooseLocation((err, data) => {
                                        if (err) {
                                            ToastUtil.showToast('地图选点失败,原因为:' + err.message);
                                        }
                                        else {
                                            if (data) {
                                                callBack(JSONObject.toJSONString(data));
                                            }
                                        }
                                    })
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                params: params
                            });
                        }
                    }, { name: "FunctionalButton" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
}
/**
 * 创建场景按钮全局构造器
 */
export let FunctionalButtonBuilder: WrappedBuilder<[
    functionalButtonComponentManager.FunctionalButtonParams,
    (data: string) => void
]> = wrapBuilder(buildFunctionBtn);
export class ButtonUtil extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__btnOptions = new SynchedPropertyObjectOneWayPU(params.btnOptions, this, "btnOptions");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ButtonUtil_Params) {
        if (params.btnOptions === undefined) {
            this.__btnOptions.set(new BtnOptions());
        }
    }
    updateStateVars(params: ButtonUtil_Params) {
        this.__btnOptions.reset(params.btnOptions);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__btnOptions.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__btnOptions.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    /**
     * 场景按钮入参实体
     */
    private __btnOptions: SynchedPropertySimpleOneWayPU<BtnOptions>;
    get btnOptions() {
        return this.__btnOptions.get();
    }
    set btnOptions(newValue: BtnOptions) {
        this.__btnOptions.set(newValue);
    }
    initialRender() {
        FunctionalButtonBuilder.builder.bind(this)({
            openType: this.btnOptions.type,
            label: this.btnOptions.label,
            styleOption: {
                //按钮镂空
                plain: true
            },
            appParam: this.btnOptions.appParams
        }, (data) => {
            ToastUtil.showToast(data);
        }, this);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * 场景按钮实体
 */
export class BtnOptions {
    /**
     * 按钮文本
     */
    label: string = '';
    /**
     * 场景按钮类型
     */
    type: functionalButtonComponentManager.OpenType = functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER;
    /**
     * 如果是app时所需参数
     */
    appParams?: functionalButtonComponentManager.AppParam;
}

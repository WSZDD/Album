if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Cascade_Params {
    callCity?: string;
    show?: boolean;
    showCity?: boolean;
    showArea?: boolean;
    provinceList?: Array<City>;
    selectData?: cascadeCity;
    currentList?: Array<City>;
    selectIndex?: number;
    titleFontSize?: number | string;
}
import { UiConst } from "@package:pkg_modules/.ohpm/@yunkss+ef_core@1.0.1/pkg_modules/@yunkss/ef_core/Index";
import util from "@ohos:util";
import type { BusinessError } from "@ohos:base";
import { ToastUtil } from "@package:pkg_modules/.ohpm/@yunkss+ef_ui@1.0.0/pkg_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/ToastUtil";
/**
 * 下划线样式
 */
function __Text__cascadeUnderLine(selected: boolean): void {
    Text.height(UiConst.VP_3);
    Text.backgroundColor(selected ? "#1989fa" : "fff");
    Text.width(UiConst.VP_45);
    Text.margin({ top: UiConst.NUMBER_5 });
}
/**
 * 顶部省市区文字样式
 * @param selected
 */
function __Text__txtColor(selected: boolean, fontSize: number | string): void {
    Text.fontSize(fontSize);
    Text.fontColor(selected ? "#969799" : "#000");
    Text.fontWeight(selected ? FontWeight.Normal : FontWeight.Bold);
}
/**
 * 省市区list样式
 */
function __Text__cityTxtColor(): void {
    Text.fontSize(UiConst.FONT_16);
    Text.textAlign(TextAlign.Start);
    Text.padding({ top: UiConst.NUMBER_3, bottom: UiConst.NUMBER_3 });
}
export class Cascade extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__callCity = new SynchedPropertySimpleTwoWayPU(params.callCity, this, "callCity");
        this.__show = new SynchedPropertySimpleTwoWayPU(params.show, this, "show");
        this.__showCity = new ObservedPropertySimplePU(false
        //显示区域
        , this, "showCity");
        this.__showArea = new ObservedPropertySimplePU(false, this, "showArea");
        this.provinceList = new Array();
        this.__selectData = new ObservedPropertyObjectPU(new cascadeCity(), this, "selectData");
        this.__currentList = new ObservedPropertyObjectPU(new Array(), this, "currentList");
        this.__selectIndex = new ObservedPropertySimplePU(0, this, "selectIndex");
        this.__titleFontSize = new ObservedPropertySimplePU(UiConst.FONT_16, this, "titleFontSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Cascade_Params) {
        if (params.showCity !== undefined) {
            this.showCity = params.showCity;
        }
        if (params.showArea !== undefined) {
            this.showArea = params.showArea;
        }
        if (params.provinceList !== undefined) {
            this.provinceList = params.provinceList;
        }
        if (params.selectData !== undefined) {
            this.selectData = params.selectData;
        }
        if (params.currentList !== undefined) {
            this.currentList = params.currentList;
        }
        if (params.selectIndex !== undefined) {
            this.selectIndex = params.selectIndex;
        }
        if (params.titleFontSize !== undefined) {
            this.titleFontSize = params.titleFontSize;
        }
    }
    updateStateVars(params: Cascade_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__callCity.purgeDependencyOnElmtId(rmElmtId);
        this.__show.purgeDependencyOnElmtId(rmElmtId);
        this.__showCity.purgeDependencyOnElmtId(rmElmtId);
        this.__showArea.purgeDependencyOnElmtId(rmElmtId);
        this.__selectData.purgeDependencyOnElmtId(rmElmtId);
        this.__currentList.purgeDependencyOnElmtId(rmElmtId);
        this.__selectIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__titleFontSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__callCity.aboutToBeDeleted();
        this.__show.aboutToBeDeleted();
        this.__showCity.aboutToBeDeleted();
        this.__showArea.aboutToBeDeleted();
        this.__selectData.aboutToBeDeleted();
        this.__currentList.aboutToBeDeleted();
        this.__selectIndex.aboutToBeDeleted();
        this.__titleFontSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    //反会给上一级的数据
    private __callCity: SynchedPropertySimpleTwoWayPU<string
    //是否显示
    >;
    get callCity() {
        return this.__callCity.get();
    }
    set callCity(newValue: string) {
        this.__callCity.set(newValue);
    }
    //是否显示
    private __show: SynchedPropertySimpleTwoWayPU<boolean
    //显示城市
    >;
    get show() {
        return this.__show.get();
    }
    set show(newValue: boolean) {
        this.__show.set(newValue);
    }
    //显示城市
    private __showCity: ObservedPropertySimplePU<boolean>;
    get showCity() {
        return this.__showCity.get();
    }
    set showCity(newValue: boolean) {
        this.__showCity.set(newValue);
    }
    //显示区域
    private __showArea: ObservedPropertySimplePU<boolean>;
    get showArea() {
        return this.__showArea.get();
    }
    set showArea(newValue: boolean) {
        this.__showArea.set(newValue);
    }
    private provinceList: Array<City>;
    //点击选择的数据
    private __selectData: ObservedPropertyObjectPU<cascadeCity>;
    get selectData() {
        return this.__selectData.get();
    }
    set selectData(newValue: cascadeCity) {
        this.__selectData.set(newValue);
    }
    //当前list显示的数据
    private __currentList: ObservedPropertyObjectPU<Array<City>>;
    get currentList() {
        return this.__currentList.get();
    }
    set currentList(newValue: Array<City>) {
        this.__currentList.set(newValue);
    }
    //当前省市区选择的下标
    private __selectIndex: ObservedPropertySimplePU<number>;
    get selectIndex() {
        return this.__selectIndex.get();
    }
    set selectIndex(newValue: number) {
        this.__selectIndex.set(newValue);
    }
    //顶部已选择省市区字体大小
    private __titleFontSize: ObservedPropertySimplePU<number | string>;
    get titleFontSize() {
        return this.__titleFontSize.get();
    }
    set titleFontSize(newValue: number | string) {
        this.__titleFontSize.set(newValue);
    }
    aboutToAppear() {
        if (this.provinceList.length == 0) {
            this.init();
        }
    }
    /**
     * 初始化城市数据
     */
    private init() {
        try {
            //获取区域数据
            let jsonStr = getContext().resourceManager.getRawFileContentSync("area.json");
            //转码
            let textCoder = util.TextDecoder.create('utf-8', { ignoreBOM: true });
            let vStr = textCoder.decodeWithStream(jsonStr, { stream: false });
            //获取数据
            this.provinceList = JSON.parse(vStr) as Array<City>;
            this.provinceList.forEach(province => {
                //默认将省数据赋值给当前listview对应的数据
                this.currentList.push(new City(province.name, province.code));
            });
        }
        catch (error) {
            let code = (error as BusinessError).code;
            let message = (error as BusinessError).message;
            ToastUtil.showToast(`获取区域数据出错, 错误编码: ${code}, 原因: ${message}.`);
        }
    }
    /**
     * 获取城市数据
     * @param prevCode 省code
     * @returns
     */
    private getCityData(prevCode: string): Array<City> {
        return (this.provinceList.filter((pro: City) => pro.code == prevCode).pop() as City).children;
    }
    /**
     * 获取区县数据
     * @param prevCode 省code
     * @param cityCode 市code
     * @returns
     */
    private getAreaData(prevCode: string, cityCode: string): Array<City> {
        return ((this.provinceList.filter((pro: City) => pro.code == prevCode)
            .pop() as City).children.filter((city: City) => city.code == cityCode).pop() as City).children;
    }
    /**
     * 重置数据
     */
    private reset() {
        this.show = !this.show;
        this.showCity = false;
        this.showArea = false;
        this.selectData = new cascadeCity();
        this.currentList = new Array();
        this.selectIndex = 0;
        this.currentList = this.getProvinceData();
    }
    /**
     * 获取省数据
     * @returns
     */
    private getProvinceData(): Array<City> {
        let provList: Array<City> = new Array();
        this.provinceList.forEach(province => {
            //默认将省数据赋值给当前listview对应的数据
            provList.push(new City(province.name, province.code));
        });
        return provList;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Panel.create(this.show);
            Panel.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(157:5)", "@yunkss/ef_ui");
            Panel.type(PanelType.CUSTOM);
            Panel.dragBar(false);
            Panel.height(PanelHeight.WRAP_CONTENT);
            Panel.customHeight(600);
            Panel.position({ x: 0, y: 0 });
        }, Panel);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //顶部
            Column.create();
            Column.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(159:7)", "@yunkss/ef_ui");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(160:9)", "@yunkss/ef_ui");
            Row.width('100%');
            Row.padding({
                top: UiConst.NUMBER_15,
                left: UiConst.NUMBER_20,
                right: UiConst.NUMBER_25,
                bottom: UiConst.NUMBER_10
            });
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('请选择地区');
            Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(161:11)", "@yunkss/ef_ui");
            Text.fontWeight('bold');
            Text.fontSize(UiConst.FONT_16);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(getContext().resourceManager.getMediaBase64ByNameSync("close"));
            Image.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(162:11)", "@yunkss/ef_ui");
            Image.width(UiConst.VP_15);
            Image.height(UiConst.VP_15);
            Image.onClick(() => {
                this.reset();
            });
        }, Image);
        Row.pop();
        //顶部
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //中部选择区域
            Row.create();
            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(181:7)", "@yunkss/ef_ui");
            //中部选择区域
            Row.width("100%");
            //中部选择区域
            Row.margin({ top: UiConst.NUMBER_10, left: UiConst.VP_35 });
            //中部选择区域
            Row.justifyContent(FlexAlign.Start);
            //中部选择区域
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //省市区
            Column.create();
            Column.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(183:9)", "@yunkss/ef_ui");
            //省市区
            Column.margin({ right: UiConst.NUMBER_20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.selectIndex == 0 && !this.selectData.provinceName) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create("请选择");
                        Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(185:13)", "@yunkss/ef_ui");
                        __Text__txtColor(true, this.titleFontSize);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(" ");
                        Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(186:13)", "@yunkss/ef_ui");
                        __Text__cascadeUnderLine(true);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.selectData.provinceName);
                        Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(188:13)", "@yunkss/ef_ui");
                        __Text__txtColor(false, this.titleFontSize);
                        Text.onClick(() => {
                            this.selectIndex = 0;
                            this.currentList = this.getProvinceData();
                        });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(" ");
                        Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(192:13)", "@yunkss/ef_ui");
                        __Text__cascadeUnderLine(this.selectIndex == 0);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        //省市区
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            //市
            if (this.showCity) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(198:11)", "@yunkss/ef_ui");
                        Column.margin({ right: UiConst.NUMBER_20 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.selectIndex === 1 && !this.selectData.cityName) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create("请选择");
                                    Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(200:15)", "@yunkss/ef_ui");
                                    __Text__txtColor(true, this.titleFontSize);
                                }, Text);
                                Text.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(" ");
                                    Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(201:15)", "@yunkss/ef_ui");
                                    __Text__cascadeUnderLine(true);
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(this.selectData.cityName);
                                    Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(203:15)", "@yunkss/ef_ui");
                                    __Text__txtColor(false, this.titleFontSize);
                                    Text.onClick(() => {
                                        this.selectIndex = 1;
                                        this.currentList = this.getCityData(this.selectData.provinceCode);
                                    });
                                }, Text);
                                Text.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(" ");
                                    Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(207:15)", "@yunkss/ef_ui");
                                    __Text__cascadeUnderLine(this.selectIndex == 1);
                                }, Text);
                                Text.pop();
                            });
                        }
                    }, If);
                    If.pop();
                    Column.pop();
                });
            }
            //区
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            //区
            if (this.showArea) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        //区域
                        Column.create();
                        Column.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(214:11)", "@yunkss/ef_ui");
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.selectIndex === 2 && !this.selectData.areaName) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create("请选择");
                                    Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(216:15)", "@yunkss/ef_ui");
                                    __Text__txtColor(true, this.titleFontSize);
                                }, Text);
                                Text.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(" ");
                                    Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(217:15)", "@yunkss/ef_ui");
                                    __Text__cascadeUnderLine(true);
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(this.selectData.areaName);
                                    Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(219:15)", "@yunkss/ef_ui");
                                    __Text__txtColor(false, this.titleFontSize);
                                    Text.onClick(() => {
                                        this.selectIndex = 2;
                                        this.currentList = this.getAreaData(this.selectData.provinceCode, this.selectData.cityCode);
                                    });
                                }, Text);
                                Text.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(" ");
                                    Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(223:15)", "@yunkss/ef_ui");
                                    __Text__cascadeUnderLine(this.selectIndex == 2);
                                }, Text);
                                Text.pop();
                            });
                        }
                    }, If);
                    If.pop();
                    //区域
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        //中部选择区域
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(233:7)", "@yunkss/ef_ui");
            Row.height('100%');
            Row.width("100%");
            Row.alignItems(VerticalAlign.Top);
            Row.padding({ left: UiConst.NUMBER_20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: UiConst.NUMBER_5, initialIndex: 0 });
            List.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(234:9)", "@yunkss/ef_ui");
            List.listDirection(Axis.Vertical);
            List.edgeEffect(EdgeEffect.None);
            List.width('100%');
            List.scrollBar(BarState.Auto);
            List.scrollBarWidth(UiConst.NUMBER_3);
            List.scrollBarColor(UiConst.PRIMARY_COLOR);
            List.padding({ bottom: UiConst.NUMBER_10 });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.margin({ top: UiConst.NUMBER_5, bottom: UiConst.NUMBER_5 });
                        ListItem.onClick(() => {
                            //点击赋值选中的数据
                            if (this.selectIndex === 0) {
                                this.selectData.provinceName = item.name;
                                this.selectData.provinceCode = item.code;
                                this.selectData.cityCode = "";
                                this.selectData.cityName = "";
                                this.selectData.areaCode = "";
                                this.selectData.areaName = "";
                                this.showCity = true;
                                setTimeout(() => {
                                    this.currentList = this.getCityData(item.code);
                                    this.selectIndex = 1;
                                }, 200);
                            }
                            if (this.selectIndex === 1) {
                                this.selectData.cityName = item.name;
                                this.selectData.cityCode = item.code;
                                this.selectData.areaCode = "";
                                this.selectData.areaName = "";
                                this.showArea = true;
                                setTimeout(() => {
                                    this.currentList = this.getAreaData(this.selectData.provinceCode, item.code);
                                    this.selectIndex = 2;
                                }, 200);
                            }
                            if (this.selectIndex === 2) {
                                this.selectData.areaName = item.name;
                                this.selectData.areaCode = item.code;
                                //赋值
                                this.callCity =
                                    this.selectData.provinceName + "/" + this.selectData.cityName + "/" + this.selectData.areaName;
                                //赋值后初始化数据
                                this.reset();
                            }
                        });
                        ListItem.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(236:13)", "@yunkss/ef_ui");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(237:15)", "@yunkss/ef_ui");
                            Row.width("100%");
                            Row.justifyContent(FlexAlign.SpaceBetween);
                            Row.alignItems(VerticalAlign.Center);
                            Row.padding({ right: UiConst.NUMBER_20 });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (this.selectIndex === 0) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.name);
                                        Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(239:19)", "@yunkss/ef_ui");
                                        __Text__cityTxtColor();
                                        Text.fontColor(item.code == this.selectData.provinceCode ? "#1989fa" : "#323233");
                                    }, Text);
                                    Text.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        If.create();
                                        if (item.code == this.selectData.provinceCode) {
                                            this.ifElseBranchUpdateFunction(0, () => {
                                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                    Image.create(getContext().resourceManager.getMediaBase64ByNameSync("ok"));
                                                    Image.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(243:21)", "@yunkss/ef_ui");
                                                    Image.width(UiConst.VP_15);
                                                    Image.height(UiConst.VP_15);
                                                }, Image);
                                            });
                                        }
                                        else {
                                            this.ifElseBranchUpdateFunction(1, () => {
                                            });
                                        }
                                    }, If);
                                    If.pop();
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
                            if (this.selectIndex === 1) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.name);
                                        Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(247:19)", "@yunkss/ef_ui");
                                        __Text__cityTxtColor();
                                        Text.fontColor(item.code == this.selectData.cityCode ? "#1989fa" : "#323233");
                                    }, Text);
                                    Text.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        If.create();
                                        if (item.code == this.selectData.cityCode) {
                                            this.ifElseBranchUpdateFunction(0, () => {
                                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                    Image.create(getContext().resourceManager.getMediaBase64ByNameSync("ok"));
                                                    Image.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(251:21)", "@yunkss/ef_ui");
                                                    Image.width(UiConst.VP_15);
                                                    Image.height(UiConst.VP_15);
                                                }, Image);
                                            });
                                        }
                                        else {
                                            this.ifElseBranchUpdateFunction(1, () => {
                                            });
                                        }
                                    }, If);
                                    If.pop();
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
                            if (this.selectIndex === 2) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.name);
                                        Text.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(255:19)", "@yunkss/ef_ui");
                                        __Text__cityTxtColor();
                                        Text.fontColor(item.code == this.selectData.areaCode ? "#1989fa" : "#323233");
                                    }, Text);
                                    Text.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        If.create();
                                        if (item.code == this.selectData.areaCode) {
                                            this.ifElseBranchUpdateFunction(0, () => {
                                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                    Image.create(getContext().resourceManager.getMediaBase64ByNameSync("ok"));
                                                    Image.debugLine("oh_modules/.ohpm/@yunkss+ef_ui@1.0.0/oh_modules/@yunkss/ef_ui/src/main/ets/ui/select/Cascade.ets(259:21)", "@yunkss/ef_ui");
                                                    Image.width(UiConst.VP_15);
                                                    Image.height(UiConst.VP_15);
                                                }, Image);
                                            });
                                        }
                                        else {
                                            this.ifElseBranchUpdateFunction(1, () => {
                                            });
                                        }
                                    }, If);
                                    If.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                });
                            }
                        }, If);
                        If.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.currentList, forEachItemGenFunction, (item: City) => item.code, false, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Row.pop();
        Panel.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * 回调的选中数据
 */
class cascadeCity {
    provinceName: string = '';
    provinceCode: string = '';
    cityName: string = '';
    cityCode: string = '';
    areaName: string = '';
    areaCode: string = '';
}
/**
 * 选择器所需的数据
 */
class City {
    name: string;
    code: string;
    children: Array<City> = new Array<City>();
    constructor(name: string, code: string) {
        this.name = name;
        this.code = code;
    }
}

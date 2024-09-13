if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ListPage_Params {
    photoArr?: Array<Resource>;
    selectedIndex?: number;
}
import router from "@ohos:router";
import Constants from "@bundle:com.example.electronicalbum/entry/ets/common/constants/Constants";
class ListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.photoArr = (router.getParams() as Record<string, Array<Resource>>)[`${Constants.PARAM_PHOTO_ARR_KEY}`];
        this.__selectedIndex = this.createStorageLink('selectedIndex', 0, "selectedIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ListPage_Params) {
        if (params.photoArr !== undefined) {
            this.photoArr = params.photoArr;
        }
    }
    updateStateVars(params: ListPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectedIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectedIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private photoArr: Array<Resource>;
    private __selectedIndex: ObservedPropertyAbstractPU<number>;
    get selectedIndex() {
        return this.__selectedIndex.get();
    }
    set selectedIndex(newValue: number) {
        this.__selectedIndex.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(new NavPathStack(), { moduleName: "entry", pagePath: "entry/src/main/ets/pages/ListPage", isUserCreateStack: false });
            Navigation.title(Constants.PAGE_TITLE);
            Navigation.hideBackButton(false);
            Navigation.titleMode(NavigationTitleMode.Mini);
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.scrollBar(BarState.Off);
            Grid.columnsTemplate(Constants.GRID_COLUMNS_TEMPLATE);
            Grid.rowsGap(Constants.LIST_ITEM_SPACE);
            Grid.columnsGap(Constants.LIST_ITEM_SPACE);
            Grid.layoutWeight(1);
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const img = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.width(Constants.FULL_PERCENT);
                        GridItem.aspectRatio(1);
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(img);
                            Image.height(Constants.FULL_PERCENT);
                            Image.width(Constants.FULL_PERCENT);
                            Image.objectFit(ImageFit.Cover);
                            Image.onClick(() => {
                                if (!index) {
                                    index = 0;
                                }
                                this.selectedIndex = index;
                                router.pushUrl({
                                    url: Constants.URL_DETAIL_LIST_PAGE,
                                    params: {
                                        photoArr: this.photoArr,
                                    }
                                });
                            });
                        }, Image);
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.photoArr, forEachItemGenFunction, (item: Resource) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ListPage";
    }
}
registerNamedRoute(() => new ListPage(undefined, {}), "", { bundleName: "com.example.electronicalbum", moduleName: "entry", pagePath: "pages/ListPage", pageFullPath: "entry/src/main/ets/pages/ListPage", integratedHsp: "false" });

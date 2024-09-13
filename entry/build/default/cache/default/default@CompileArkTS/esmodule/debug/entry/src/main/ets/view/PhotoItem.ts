if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PhotoItem_Params {
    photoArr?: resourceArray;
    currentIndex?: number;
    showCount?: number;
}
import Constants from "@bundle:com.example.electronicalbum/entry/ets/common/constants/Constants";
@Observed
class resourceArray extends Array<Resource> {
}
export default class PhotoItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__photoArr = new SynchedPropertyNesedObjectPU(params.photoArr, this, "photoArr");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.showCount = Constants.SHOW_COUNT / Constants.DOUBLE_NUMBER;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PhotoItem_Params) {
        this.__photoArr.set(params.photoArr);
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.showCount !== undefined) {
            this.showCount = params.showCount;
        }
    }
    updateStateVars(params: PhotoItem_Params) {
        this.__photoArr.set(params.photoArr);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__photoArr.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__photoArr.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __photoArr: SynchedPropertyNesedObjectPU<resourceArray>;
    get photoArr() {
        return this.__photoArr.get();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private showCount: number;
    albumPicBuilder(img: Resource, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding((this.showCount - index - 1) * Constants.PHOTO_ITEM_PADDING);
            Column.offset({ y: (this.showCount - index - 1) * Constants.PHOTO_ITEM_OFFSET });
            Column.height(Constants.PHOTO_ITEM_PERCENT);
            Column.width(Constants.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(img);
            Image.width(Constants.FULL_PERCENT);
            Image.height(Constants.FULL_PERCENT);
            Image.borderRadius({ "id": 16777225, "type": 10002, params: [], "bundleName": "com.example.electronicalbum", "moduleName": "entry" });
            Image.opacity(1 - (this.showCount - index - 1) * Constants.ITEM_OPACITY_OFFSET);
            Image.draggable(false);
        }, Image);
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Top });
            Stack.width(Constants.FULL_PERCENT);
            Stack.height(Constants.FULL_PERCENT);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const image = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (index) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.albumPicBuilder.bind(this)(this.photoArr[this.showCount - index - 1], index, this);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, Constants.CACHE_IMG_LIST, forEachItemGenFunction, (item: string, index?: number) => JSON.stringify(item) + index, true, true);
        }, ForEach);
        ForEach.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

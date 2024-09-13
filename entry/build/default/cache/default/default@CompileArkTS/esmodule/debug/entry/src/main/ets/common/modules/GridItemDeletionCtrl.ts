import { GridItemModifier } from "@bundle:com.example.electronicalbum/entry/ets/common/modules/AttributeModifier";
const ANIMATION_DURATION: number = 200; // 动画总时长200ms
const GRID_ITEM_HEIGHT: number = 72; // gridItem的高度
const COLUMN_COUNT: number = 5; // 列数
enum DeletionStatus {
    IDLE = 0,
    START = 1,
    FINISH = 2
}
/**
 * gridItem删除管理
 */
export class GridItemDeletionCtrl<T> {
    private modifier: GridItemModifier[] = [];
    private gridData: T[] = [];
    private status: DeletionStatus = DeletionStatus.IDLE;
    constructor(data: T[]) {
        this.gridData = data;
        data.forEach(() => {
            this.modifier.push(new GridItemModifier());
        });
    }
    /**
     * 获取当前gridItem的modifier
     * @param item 网格元素
     * @returns 属性对象
     */
    getModifier(item: T): GridItemModifier {
        const index: number = this.gridData.indexOf(item);
        if (index === -1) {
            return new GridItemModifier();
        }
        else {
            return this.modifier[index];
        }
    }
    /**
     * 删除gridItem
     * @param item 网格元素
     * @param itemAreaWidth 网格区域宽度
     */
    deleteGridItem(item: T, itemAreaWidth: number): void {
        const index: number = this.gridData.indexOf(item);
        // 最后一条数据不执行偏移
        if (index === this.gridData.length - 1) {
            this.gridData.splice(index, 1);
            this.modifier.splice(index, 1);
            return;
        }
        // TODO:知识点:实现删除动画。先让目标元素的opacity为0，不可视，直接删除目标元素会导致偏移的时候位置异常，接着遍历元素的属性对象，修改偏移量。
        this.modifier[index].opacity = 0;
        Context.animateTo({
            curve: Curve.Friction, duration: ANIMATION_DURATION, onFinish: () => {
                // 初始化偏移位置
                this.modifier.forEach((item) => {
                    item.offsetX = 0;
                    item.offsetY = 0;
                });
                // 删除对应的数据
                this.gridData.splice(index, 1);
                this.modifier.splice(index, 1);
                this.status = DeletionStatus.FINISH;
            }
        }, () => {
            this.modifier.forEach((item: GridItemModifier, ind: number) => {
                if (ind > index && ind % COLUMN_COUNT !== 0) {
                    item.offsetX = -itemAreaWidth;
                }
                else if (ind > index && ind % COLUMN_COUNT === 0) {
                    item.offsetX = itemAreaWidth * 4; // 位置偏移到上一行的最后一列，因此偏移4个gridItem所占的宽度
                    item.offsetY = -GRID_ITEM_HEIGHT;
                }
            });
            this.status = DeletionStatus.START;
        });
    }
}

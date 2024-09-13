import display from "@ohos:display";
import window from "@ohos:window";
import type common from "@ohos:app.ability.common";
import { ToastUtil } from "@package:pkg_modules/.ohpm/@yunkss+ef_ui@1.0.0/pkg_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/ToastUtil";
import { RandomUtil } from "@package:pkg_modules/.ohpm/@yunkss+ef_core@1.0.1/pkg_modules/@yunkss/ef_core/Index";
import type { efAlertOptions } from "@package:pkg_modules/.ohpm/@yunkss+ef_ui@1.0.0/pkg_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert";
import HashMap from "@ohos:util.HashMap";
/**
 * @Author csx
 * @DateTime 2024/5/23 21:45
 * @TODO WinDialogUtil 窗口方式实现全局Dialog
 */
import("@package:pkg_modules/.ohpm/@yunkss+ef_ui@1.0.0/pkg_modules/@yunkss/ef_ui/src/main/ets/ui/prompt/efAlert"); // 引入命名路由页面
export class WinDialogUtil {
    /**
     * 缓存窗体集合,关闭时需要
     */
    private static cacheWindowMap = new HashMap<string, window.Window>();
    /**
     * 根据参数创建窗口
     * @param options
     * @returns
     */
    static async showAlert(options?: efAlertOptions): Promise<void> {
        let ctx = getContext() as common.UIAbilityContext;
        try {
            //当前窗口的编码
            let winName = 'efDialog' + RandomUtil.randomNumber(1000, 1000000);
            //创建存储
            let efStorage = new LocalStorage();
            //存储
            efStorage.setOrCreate('efDialogName', winName);
            //创建窗口
            let windowClass = await window.createWindow({
                name: winName,
                windowType: window.WindowType.TYPE_DIALOG,
                ctx: ctx
            });
            //将窗口缓存
            WinDialogUtil.cacheWindowMap.set(winName, windowClass);
            //更新属性
            if (options) {
                if (!options.title) {
                    options.title = '温馨提示';
                }
                if (!options.okText) {
                    options.okText = "确定";
                }
                if (!options.cancelText) {
                    options.cancelText = "取消";
                }
                if (options.isAutoClose == undefined) {
                    options.isAutoClose = true;
                }
                //存储数据
                efStorage.setOrCreate('efAlertOptions', options);
            }
            await windowClass.loadContentByName('efAlert', efStorage);
            //获取屏幕四大角
            let d = display.getDefaultDisplaySync();
            //设置窗口大小
            await windowClass.resize(d.width, d.height);
            // 设置窗口背景颜色
            windowClass.setWindowBackgroundColor('#88000000');
            //显示窗口
            await windowClass.showWindow();
        }
        catch (exception) {
            ToastUtil.showToast('创建窗口失败,原因为:' + JSON.stringify(exception));
        }
    }
    /**
     * 关闭窗口
     * @returns
     */
    static async closeAlert(winName: string): Promise<void> {
        if (WinDialogUtil.cacheWindowMap && WinDialogUtil.cacheWindowMap.hasKey(winName)) {
            await WinDialogUtil.cacheWindowMap.get(winName).destroyWindow();
        }
    }
}

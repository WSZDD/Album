import type common from "@ohos:app.ability.common";
/**
 * @Author csx
 * @DateTime 2024/7/29 11:04:59
 * @TODO GlobalThis  全局替换版本GlobalThis 单例对象
 */
export class GlobalThis {
    private constructor() {
    }
    ;
    /**
     * 私有单例对象
     */
    private static instance: GlobalThis;
    /**
     * 私有UI对象
     */
    private _uiContexts = new Map<string, common.UIAbilityContext>();
    /**
     * 私有值
     */
    private value = '';
    /**
     * 获取全局实例
     * @returns
     */
    public static getInstance(): GlobalThis {
        if (!GlobalThis.instance) {
            GlobalThis.instance = new GlobalThis();
        }
        return GlobalThis.instance;
    }
    /**
     * 获取上下文
     * @param key
     * @returns
     */
    getContext(key: string): common.UIAbilityContext | undefined {
        return this._uiContexts.get(key);
    }
    /**
     * 设置上下文
     * @param key
     * @param value
     */
    setContext(key: string, value: common.UIAbilityContext): void {
        this._uiContexts.set(key, value);
    }
    /**
     * 设置值
     * @param value
     */
    setValue(value: string) {
        this.value = value;
    }
    /**
     * 获取值
     * @returns
     */
    getValue(): string {
        return this.value;
    }
}

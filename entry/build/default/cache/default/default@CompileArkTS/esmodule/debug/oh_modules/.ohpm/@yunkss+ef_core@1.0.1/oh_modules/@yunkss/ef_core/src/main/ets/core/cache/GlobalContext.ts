import type connection from "@ohos:net.connection";
export class GlobalContext {
    public netList: connection.NetHandle[] = [];
    private static instance: GlobalContext;
    private _objects = new Map<string, Object>();
    public static getContext(): GlobalContext {
        if (!GlobalContext.instance) {
            GlobalContext.instance = new GlobalContext();
        }
        return GlobalContext.instance;
    }
    getObject(value: string): Object | undefined {
        return this._objects.get(value);
    }
    setObject(key: string, objectClass: Object): void {
        this._objects.set(key, objectClass);
    }
    // 泛型方法
    getT<T>(key: string): T {
        return this._objects.get(key) as T;
    }
    // 泛型方法
    setT<T>(key: string, objectClass: T): void {
        this._objects.set(key, objectClass as Object);
    }
}

import { OutDTO } from "@package:pkg_modules/.ohpm/@yunkss+ef_core@1.0.1/pkg_modules/@yunkss/ef_core/src/main/ets/core/base/OutDTO";
import buffer from "@ohos:buffer";
export class RandomUtil {
    /**
     * 获得随机Boolean值
     *
     * @return true or false
     */
    static randomBoolean(): boolean {
        return Math.random() < 0.5;
    }
    /**
     * 随机汉字（'\u4E00'-'\u9FFF'）
     *
     * @return 随机的汉字字符
     */
    static randomChinese(): string {
        const start = parseInt('4e00', 16); // 第一个汉字的 Unicode 编码
        const end = parseInt('9fa5', 16); // 最后一个汉字的 Unicode 编码
        const randomCode = Math.floor(Math.random() * (end - start) + start);
        return String.fromCharCode(randomCode);
    }
    /**
     * 获得指定范围内的随机数
     *
     * @param min 最小数（包含）
     * @param max 最大数（不包含）
     * @return 随机数
     */
    static randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**
     * 获得随机数number值
     *
     * @return 随机数
     */
    static randomInt(): number {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    /**
     * 获得指定范围内的随机数 [0,limit)
     *
     * @param limit 限制随机数的范围，不包括这个数
     * @return 随机数
     */
    static randomLimit(limit: number): number {
        return Math.floor(Math.random() * limit);
    }
    /**
     * 根据传入的大小生成随机字符串
     * @param size  生成字符串长度
     * @param resultCoding  返回结果的编码格式
     * @returns
     */
    static randomStrBySize(size: number, resultCoding: buffer.BufferEncoding): string {
        let randArray = new Uint8Array(size);
        for (let i = 0; i < size; i++) {
            randArray[i] = Math.floor(Math.random() * 256);
        }
        let str = buffer.from(randArray).toString(resultCoding);
        return str;
    }
    /**
     * 根据传入的大小生成utf8随机字符串
     * @param size  生成字符串长度
     * @returns
     */
    static randomUTF8StrBySize(size: number): string {
        // 定义可打印字符的范围
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,<.>/?';
        const charsetLength = charset.length;
        // 生成随机字符串
        let result = '';
        for (let i = 0; i < size; i++) {
            const randomIndex = Math.floor(Math.random() * charsetLength);
            result += charset.charAt(randomIndex);
        }
        return result;
    }
    /**
     * 根据传入的大小生成随机Uint8Array字节流
     * @param size 生成字符串长度
     * @returns
     */
    static randomUnitBySize(size: number): Uint8Array {
        let randArray = new Array<number>();
        for (let i = 0; i < size; i++) {
            randArray.push(Math.floor(Math.random() * 256));
        }
        return new Uint8Array(randArray);
    }
    /**
     * 生成CBC模式的iv
     * @param resultCoding  返回结果的编码格式(utf8/hex/base64)-不传默认为base64
     * @returns iv字符串
     */
    static generateIV(resultCoding: buffer.BufferEncoding = 'base64'): OutDTO<string> {
        if (resultCoding === 'utf8') {
            return OutDTO.OKByDataRow<string>('获取iv成功~', RandomUtil.randomUTF8StrBySize(16));
        }
        return OutDTO.OKByDataRow<string>('获取iv成功~', RandomUtil.randomStrBySize(16, resultCoding));
    }
}

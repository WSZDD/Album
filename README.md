# 电子相册

### 简介

基于ArkTS实现一个电子相册的案例，通过捏合和拖拽手势控制图片的放大、缩小、左右拖动查看细节等效果。

![](screenshots/device/album.gif)

### 相关概念

- Swiper：滑块视图容器，提供子组件滑动轮播显示的能力。
- Grid：网格容器，由“行”和“列”分割的单元格所组成，通过指定“项目”所在的单元格做出各种各样的布局。
- Navigation：Navigation组件一般作为Page页面的根容器，通过属性设置来展示页面的标题、工具栏、菜单。
- List：列表包含一系列相同宽度的列表项。适合连续、多行呈现同类数据，例如图片和文本。
- 组合手势：手势识别组，多种手势组合为复合手势，支持连续识别、并行识别和互斥识别。

### 相关权限

不涉及

### 使用说明

1. 用户可以使用捏合手势实现图片的放大缩小。
2. 用户可以通过滑动手势实现图片的左右切换。
3. 用户可以在图片放大的基础上，可以通过拖拽手势对图片进行拖拽查看细节。

### 约束与限制

1. 本示例仅支持标准系统上运行，支持设备：华为手机。
2. HarmonyOS系统：HarmonyOS NEXT Developer Beta1及以上。
3. DevEco Studio版本：DevEco Studio NEXT Developer Beta1及以上。
4. HarmonyOS SDK版本：HarmonyOS NEXT Developer Beta1 SDK及以上。

### 更新

1.菜单和自定义弹窗

![](screenshots/device/3.png)
![](screenshots/device/4.png)

2.申请权限和消息提示

![](screenshots/device/5.png)
![](screenshots/device/6.png)

3. 背景随轮播图切换

![](screenshots/device/1.gif)

4.组件拖动动画

![](screenshots/device/2.gif)

5.轮播图的隐藏和显示

![](screenshots/device/3.gif)

6.新建相册功能实现和动画效果

![](screenshots/device/4.gif)

### 参考资料

1. https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/ts-universal-attributes-menu-0000001478181385-V2
2. https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/request-user-authorization-V5
3. https://gitee.com/harmonyos-cases/cases/tree/master/CommonAppDevelopment/feature/gridexchange
4. https://gitee.com/harmonyos-cases/cases/blob/master/CommonAppDevelopment/feature/effectKit/src/main/ets/components/mainpage/MainPage.ets

@CustomDialog
@Preview
export struct CustomDialogAdd {
  controller: CustomDialogController
  textValue: string = ''
  cancel: () => void = () => {
  }
  confirm: () => void = () => {
  }

  build() {
    Column() {
      Text('新建相册')
        .fontSize(20)
        .margin(20)
      TextInput({ placeholder: '', text: this.textValue }).height(60).width('90%')
        .onChange((value: string) => {
          this.textValue = value
        })
      Flex({
        justifyContent: FlexAlign.SpaceAround
      }) {
        Button('取消')
          .backgroundColor('#00000000')
          .fontColor(Color.Black)
          .onClick(() => {
            this.cancel()
            this.controller.close()
          })
        Button('确认')
          .backgroundColor('#00000000')
          .fontColor(Color.Red)
          .onClick(() => {
            this.controller.close()
            this.confirm()
          })
      }
      .margin({
        bottom:20,
        top:20
      })
    }
  }
}

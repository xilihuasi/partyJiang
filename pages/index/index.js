//获取应用实例
const app = getApp()
Page({
  data: {
    x: null,
    y: null,
    hidden: true,
  },
  onLoad() {
    const that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('red')
    ctx.fillRect(0, 0, 150, 75)
    ctx.setFillStyle('green')
    ctx.fillRect(30, 30, 150, 75);
    ctx.draw();
  },
  onStart(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y,
      hidden: false,
    })
  },
  onMove(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y,
      hidden: false,
    })
  },
  onEnd(e) {
    this.setData({
      hidden: true,
    })
  }
})

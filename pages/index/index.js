// index.js
const app = getApp()

Page({
  data: {
    isScreenCaptureDisabled: false,
    statusText: '当前可以截图和录屏'
  },
  
  onLoad() {
    // 页面加载时，初始化状态
    this.setData({
      isScreenCaptureDisabled: app.globalData.isScreenCaptureDisabled
    })
    this.updateStatusText()
  },
  
  // 禁用截图和录屏
  disableScreenCapture() {
    wx.setVisualEffectOnCapture({
      visualEffect: 'hidden',
      success: (res) => {
        console.log('禁用截图成功', res)
        this.setData({
          isScreenCaptureDisabled: true
        })
        app.globalData.isScreenCaptureDisabled = true
        this.updateStatusText()
      },
      fail: (err) => {
        console.log('禁用截图失败', err)
        wx.showToast({
          title: '设置失败',
          icon: 'none'
        })
      },
      complete: (res) => {
        console.log('禁用截图操作完成', res)
      }
    })
  },
  
  // 启用截图和录屏
  enableScreenCapture() {
    wx.setVisualEffectOnCapture({
      visualEffect: 'none',
      success: (res) => {
        console.log('启用截图成功', res)
        this.setData({
          isScreenCaptureDisabled: false
        })
        app.globalData.isScreenCaptureDisabled = false
        this.updateStatusText()
      },
      fail: (err) => {
        console.log('启用截图失败', err)
        wx.showToast({
          title: '设置失败',
          icon: 'none'
        })
      },
      complete: (res) => {
        console.log('启用截图操作完成', res)
      }
    })
  },
  
  // 更新状态文本
  updateStatusText() {
    this.setData({
      statusText: this.data.isScreenCaptureDisabled ? 
        '当前已禁止截图和录屏' : 
        '当前可以截图和录屏'
    })
  },
  
  // 页面隐藏时自动恢复截图功能
  onHide() {
    if (this.data.isScreenCaptureDisabled) {
      console.log('页面隐藏，自动恢复截图功能')
      this.enableScreenCapture()
    }
  },
  
  // 页面卸载时自动恢复截图功能
  onUnload() {
    if (this.data.isScreenCaptureDisabled) {
      console.log('页面卸载，自动恢复截图功能')
      this.enableScreenCapture()
    }
  }
})
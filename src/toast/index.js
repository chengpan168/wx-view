module.exports = {
  showToast (opt) {
    var toast = Object.assign({}, this.data.toast, opt)
    clearTimeout(toast.timer)
    toast.show = true
    
    this.setData({
      toast
    })
    
    var timer = setTimeout(() => {
      this.clearToast()
    }, toast.timeout || 3000)
    
    this.setData({
      'toast.timer': timer
    })
    
    if (toast && toast.onShow) {
      toast.onShow(toast)
    }
  },
  clearToast () {
    var toast = this.data.toast || {}
    clearTimeout(toast.timer)
    
    this.setData({
      'toast.show': false
    })
    
    if (toast && toast.onClose) {
      toast.onClose(toast)
    }
  }
}

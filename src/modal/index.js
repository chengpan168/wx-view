var Modal = {
  showModal (opt) {
    var modal = Object.assign({}, opt)
    modal.show = true
    this.setData({
      modal: modal
    })
  },
  closeModal () {
    var modal = Object.assign({}, this.data.modal)
    modal.show = false
    this.setData({
      modal: modal
    })
  
    if (modal.onClose) {
      modal.onClose(e)
    }
  },
  onModalOk (e) {
    var modal = Object.assign({}, this.data.modal)
    modal.show = false
    this.setData({
      modal: modal
    })
    if (modal.onOk) {
      modal.onOk(e)
    }
  },
  
  onModalCancel (e) {
    var modal = Object.assign({}, this.data.modal)
    modal.show = false
    this.setData({
      modal: modal
    })
    if (modal.onCancel) {
      modal.onCancel(e)
    }
  },
  
  onModalClose (e) {
    var modal = Object.assign({}, this.data.modal)
    modal.show = false
    this.setData({
      modal: modal
    })
  }
}

module.exports = Modal

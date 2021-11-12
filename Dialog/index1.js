class Dialog {
  constructor($root, options = {}) {
    this.$root = $root
    this.options = options
    //这个柑橘就一个用处，知道用户点的时确认还是取消
    this.onCancel = options.onCancel || function () { }
    this.onCertain = options.onCertain || function () { }

    this.bind()
  }
  bind() {
    let self = this
    this.$root.querySelector('.close').onclick = function () {
      self.hide()
      self.onCancel()
    }
    this.$root.querySelector('.btn-cancel').onclick = function () {
      self.hide()
      self.onCancel()
    }
    this.$root.querySelector('.btn-certain').onclick = function () {
      self.hide()
      self.onCertain()
    }
  }

  hide() {
    this.$root.classList.remove('appear')
    setTimeout(() => this.$root.classList.remove('show'), 400)
  }

  show() {
    this.$root.classList.add('show')
    setTimeout(() => this.$root.classList.add('appear'))
  }
}

let dialog = new Dialog(document.querySelector('.dialog'), {
  onCertain() {
    console.log('用户点了确定')
  },
  onCancel() {
    console.log('用户点了取消')
  }
})

document.querySelector('.open-dialog').onclick = function () {
  dialog.show()
}

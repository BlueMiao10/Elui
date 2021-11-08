class Message{
  constructor({type = 'success',text = ''}){
   this.type = type
   this.text = text
  
   this.render()
   this.bend()
  }

  render(){
    let $div = document.createElement('div')
    this.$message = $div
    $div.classList.add('message')
    $div.classList.add(this.type)
    let $icon = document.createElement('span')
    $icon.classList.add('iconfont')
    $icon.classList.add('icon-' + this.type)
    $div.appendChild($icon)
    let $text = document.createTextNode(this.text)
    $div.appendChild($text)
    document.body.appendChild($div)
  }

  bend(){
    setTimeout(() => this.show(),0)
    setTimeout(() => this.destory(),3000)
  }

  show(){
    this.$message.classList.add('show')
  }

  destory(){
    this.$message.classList.remove('show')
    setTimeout(() => this.$message.parentNode.removeChild(this.$message),3000)

  }
}

document.querySelector('#btn-success').onclick = function(){
  new Message({type : 'success',text : '发送成功'})
}
document.querySelector('#btn-warning').onclick = function(){
  new Message({type : 'warning',text : '出现警告'})
}
document.querySelector('#btn-info').onclick = function(){
  new Message({type : 'info',text : '一条消息'})
}
document.querySelector('#btn-error').onclick = function(){
  new Message({type : 'error',text : '出现错误'})
}
const css = ($node,cssObj) => Object.assign($node.style,cssObj)

const Animation = {
  slide($from,$to,direction){
    $from.style = ''
    $to.style = ''
    
    css($from,{
      transform:`translateX(0)`,
      zIndex:10
    })
    css($to,{
      transform:`translateX(${direction === 'right' ? '-' : ''}100%)`,
      zIndex:10
    })
    setTimeout(() => {
      css($from,{
        transform:`translateX(${direction === 'left' ? '-' : ''}100%)`,
        transition:'all .6s'
      })
      css($to,{
        transform:`translateX(0)`,
        transition:`all .6s`
      })
    })
  },
  fade($from,$to){
    $from.style = ''
    $to.style = ''
    
    css($from,{
      opacity:1,
      zIndex:10
    })
    css($to,{
      opacity:0,
      zIndex:9
    })
    setTimeout(() => {
      css($from,{
        opacity:0,
        zIndex:10,
        transition:'all .6s'
      })
      css($to,{
        opacity:1,
        zIndex:9,
        transition:`all .6s`
      })
    })
    setTimeout(() =>{
      css($from,{
        zIndex:9,
      })
      css($to,{
        zIndex:10, 
      })     
    },600)
  },
  zoom($from,$to){
    $from.style = ''
    $to.style = ''
    
    css($from,{
      transform:`scale(1)`,
      opacity:1,
      zIndex:10
    })
    css($to,{
      transform:`scale(5)`,
      opacity:0,
      zIndex:9
    })
    setTimeout(() => {
      css($from,{
        transform:`scale(5)`,
        opacity:0,
        zIndex:10,
        transition:'all 1s'
      })
      css($to,{
        transform:`scale(1)`,
        opacity:1,
        zIndex:9,
        transition:`all 1s`
      })
    })
    setTimeout(() =>{
      css($from,{
        zIndex:9,
      })
      css($to,{
        zIndex:10, 
      })     
    },600)    
  }
}

class Carousel{
  constructor($root,animation){
    this.$root = $root
    this.$pre = $root.querySelector('.arrow-pre')
    this.$next = $root.querySelector('.arrow-next')
    this.$$indicators = $root.querySelectorAll('.indicators>li')
    this.$$panels = $root.querySelectorAll('.panels>a')
    this.animation = animation


    this.bind()
  }
  bind(){
    let self = this
    this.$pre.onclick = function(){
      let fromIndex = self.getIndex()
      let toIndex = self.getPreIndex()
      self.setPage(fromIndex,toIndex,'right')
      self.setIndicator(toIndex)
  }

    this.$next.onclick = function(){
      let fromIndex = self.getIndex()
      let toIndex = self.getNextIndex()
      self.setPage(fromIndex,toIndex,'left')
      self.setIndicator(toIndex)
  }

    this.$$indicators.forEach(($indicator) => $indicator.onclick = (e) => {
      let fromIndex = this.getIndex()
      let toIndex = [...this.$$indicators].indexOf(e.target)
      this.setIndicator(toIndex)
      let direction = fromIndex > toIndex ? 'right' : 'left'
      this.setPage(fromIndex,toIndex,direction)
    })
  }

  getIndex(){
    return [...this.$$indicators].indexOf(this.$root.querySelector('.indicators>.active'))
  }

  getPreIndex(){
    if((this.getIndex() - 1) < 0 ){
      return this.getIndex() - 1 + this.$$indicators.length
    }else{
      return this.getIndex() - 1 
    }
  }
  getNextIndex(){
    if((this.getIndex() + 1) === this.$$indicators.length){
      return (this.getIndex() + 1 ) - this.$$indicators.length
    }else{
      return this.getIndex() + 1 
    }
  }

  setPage = (fromIndex,toIndex,direction) => {
    this.animation(this.$$panels[fromIndex],this.$$panels[toIndex],direction)
  } 

  setIndicator = index =>{
    this.$$indicators.forEach($indicator => $indicator.classList.remove('active'))
    this.$$indicators[index].classList.add('active')
  }
  setAnimation(animation) {
    this.animation = animation
  }
}

let $carousel = document.querySelector('.carousel')
let carousel = new Carousel($carousel,Animation.slide)

document.querySelector('#animation-select').onchange = function(){
  carousel.setAnimation(Animation[this.value])
}



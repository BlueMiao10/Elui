
class Carousel{
  constructor($root){
    this.$root = $root
    this.$pre = $root.querySelector('.arrow-pre')
    this.$next = $root.querySelector('.arrow-next')
    this.$$indicators = $root.querySelectorAll('.indicators>li')
    this.$$panels = $root.querySelectorAll('.panels>a')


    this.bind()
  }
  bind(){
    let self = this
    this.$pre.onclick = function(){
      let index = self.getPreIndex()
      self.setPage(index)
      self.setIndicator(index)
  }

    this.$next.onclick = function(){
      let index = self.getNextIndex()
      self.setPage(index)
      self.setIndicator(index)
  }

    this.$$indicators.forEach(($indicator) => $indicator.onclick = (e) => {
      let index = [...this.$$indicators].indexOf(e.target)
      this.setPage(index)
      this.setIndicator(index)
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

  setPage = index =>{
    this.$$panels.forEach($panel => $panel.classList.remove('active'))
    this.$$panels[index].classList.add('active')
  } 

  setIndicator = index =>{
    this.$$indicators.forEach($indicator => $indicator.classList.remove('active'))
    this.$$indicators[index].classList.add('active')
  }
}

let $$carousels = document.querySelectorAll('.carousel')
$$carousels.forEach($root => new Carousel($root))





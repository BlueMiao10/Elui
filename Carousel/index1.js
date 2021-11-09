const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const $pre = $('.arrow-pre')
const $next = $('.arrow-next')
const $$indicators = $$('.indicators>li')
const $$panels = $$('.panels>a')

const getIndex = function(){
  return [...$$indicators].indexOf($('.indicators>.active'))
}

const getPreIndex = function(){
  if((getIndex() - 1) < 0 ){
    return getIndex() - 1 + $$indicators.length
  }else{
    return getIndex() - 1 
  }
}
const getNextIndex = function(){
  if((getIndex() + 1) === $$indicators.length){
    return (getIndex() + 1 ) - $$indicators.length
  }else{
    return getIndex() + 1 
  }
}

const setPage = index =>{
  $$panels.forEach($panel => $panel.classList.remove('active'))
  $$panels[index].classList.add('active')
} 

const setIndicator = index =>{
  $$indicators.forEach($indicator => $indicator.classList.remove('active'))
  $$indicators[index].classList.add('active')
}

$pre.onclick = function(){
  let index = getPreIndex()
  setPage(index)
  setIndicator(index)
}

$next.onclick = function(){
  let index = getNextIndex()
  setPage(index)
  setIndicator(index)
}

$$indicators.forEach(($indicator) => $indicator.onclick = function(e){
  let index = [...$$indicators].indexOf(e.target)
  setPage(index)
  setIndicator(index)
})


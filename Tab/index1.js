/*
 * @Author: your name
 * @Date: 2021-11-05 10:21:01
 * @LastEditTime: 2021-11-05 20:21:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Tab\index1.js
 */

 //为了防止麻烦，所以将这些比较长的命令放在变量里
const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const $$tabItem = $$('.tabs .tab-item')
const $$tabPanel = $$('.tabs .tab-panel')
const $line = $('.tabs .line')
$line.style.width = $$tabItem[0].offsetWidth + 'px'
//我们自己默认将带$的作为DOM元素，将带$$作为类数组对象
$$tabItem.forEach($tab => {
  $tab.onclick = function () {
    $$tabItem.forEach($tab => $tab.classList.remove('active'))
    this.classList.add('active')

    /*offsetWidth是你点击的那个位置dom元素的宽度，而offsetLeft是
      相对于你加relative的那个位置的左移量如果你没加。那就是相当于body的，
      下边打印在控制台上可以看效果
    */
    console.log(this.offsetWidth)
    console.log(this.offsetLeft)
    $line.style.width = this.offsetWidth + 'px'
    $line.style.transform = `translateX(${this.offsetLeft}px)`
    let index = [...$$tabItem].indexOf(this)
    $$tabPanel.forEach($panel => $panel.classList.remove('active'))
    $$tabPanel[index].classList.add('active')
    }
  })
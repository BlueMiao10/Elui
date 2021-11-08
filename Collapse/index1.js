/*
 * @Author: your name
 * @Date: 2021-11-05 19:54:08
 * @LastEditTime: 2021-11-05 20:10:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Collapse\index1.js
 */
    console.log('111')
    const $ = s => document.querySelector('active')
    const $$ = s => document.querySelectorAll('active')

    class Collapse {
      constructor($container, type = 1) {
        this.$container = $container
        this.$$items = $container.querySelectorAll('.item')
        this.type = type

        this.bind()
      }
      bind() {
        let self = this
        this.$$items.forEach($item => {
          $item.onclick = function () {
            if (self.type === 2) {
              this.classList.toggle('active')
            } else if (self.type === 1) {
              if (this.classList.contains('active')) {
                this.classList.remove('active')
              } else {
                self.$$items.forEach($item => $item.classList.remove('active'))
                this.classList.add('active')
              }

            }
          }
        })
      }
    }

    new Collapse(document.querySelector('.collapse'))
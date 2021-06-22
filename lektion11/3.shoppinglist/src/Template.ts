import { items } from './app.js'
import { ShoppingItem } from './ShoppingItem.js'

export class Template {
  constructor(private container: HTMLUListElement) {}
  
  render(item: ShoppingItem) {
    const li = document.createElement('li');
    li.className = 'p-2 bg-light d-flex justify-content-between align-items-center mb-2 rounded'

    const h4 = document.createElement('h4');
    h4.innerText = item.print()

    const buttons = document.createElement('div')

    const plusBtn = document.createElement('button')
    plusBtn.className = 'btn fixed btn-dark btn-sm ms-1'
    plusBtn.innerText = '+'
    plusBtn.addEventListener('click', () => {
      item.add()
      h4.innerText = item.print()
    })

    const minusBtn = document.createElement('button')
    minusBtn.className = 'btn fixed btn-dark btn-sm ms-1'
    minusBtn.innerText = '-'
    minusBtn.addEventListener('click', () => {
      if(item.amount <= 1) {
        li.remove()
        items.delete(item)
      } else {
        item.sub()
        h4.innerText = item.print()

      }
    })

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn fixed btn-danger btn-sm ms-1'
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.addEventListener('click', () => {
      li.remove()
      items.delete(item)
    })

    buttons.append(plusBtn, minusBtn, deleteBtn);
    li.append(h4, buttons)
    this.container.append(li)

  }
}
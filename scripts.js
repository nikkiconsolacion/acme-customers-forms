const listContainer = document.querySelector('#list-container')

let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true },
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com' },
  { id: 4, name: 'shep', email: 'shep@gmail.com' }
]
function destroy () {
  const destroyButton = document.querySelectorAll('.destroyButton')

  destroyButton.forEach(item => {
    // console.log(item.button)
    item.addEventListener('click', ev => {
      if (ev.target.tagName === 'BUTTON') {
        let targetId = ev.target.dataset.id
        // console.log(ev.target.dataset.id)
        console.log(targetId)
        customers = customers.filter((customer, _idx) => {
          console.log(customer.id)
          if (targetId === customer.id) {
            console.log('match')
          }

          // if (ev.target.parentNode.children.indexOf(ev.target)) {
          //   console.log(indexOf(ev.target.parentNode.children.ev.target))
          // }
          // const idx = [...ev.target.parentNode.children].indexOf(ev.target)
          // // console.log(idx)
          // console.log(idx)
        })
        render()
      }
    })
  })
}
// destroyButton.addEventListener('click', (ev) => {
//   if (ev.target.tagName === 'LI') {
//     customers = customers.filter((customer, _idx)=> {
//       const idx = [...ev.target.parentNode.parentNode.children].indexOf(ev.target);
//       return _idx !== idx;
//     })
//     render();
//   }
//   // else {

//   // }

// })

const render = () => {
  const html = customers.forEach(customer => {
    let customerInfo = customer.name + ' ' + customer.email
    // console.log(customerInfo)
    const li = document.createElement('li')
    li.innerHTML = `${customerInfo}<button class="destroyButton" data-id =${
      customer.id
    }>Destroy</button>`
    // console.log('lastChild here', li.lastChild)

    li.lastChild.addEventListener('click', ev => {})

    listContainer.appendChild(li)

    return li
    // return `<li>${customerInfo}<button>Destroy</button></li>`
  })
  // listContainer.innerHTML = html;
}
render()
destroy()

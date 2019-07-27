const listContainer = document.querySelector('#list-container');
const destroyButton = document.querySelectorAll('button');

let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];


const render = () => {
  const html = customers.map(customer => {
    let customerInfo = customer.name + " " + customer.email;
    console.log(customerInfo);
    return `<li>${customerInfo}<button>Destroy</button></li>`
  }).join('');
  listContainer.innerHTML = html;

destroyButton.addEventListener('click', ev => {
  if (ev.target.tagName === 'LI') {
    customers = customers.filter((customer, _idx)=> {
      const idx = [...ev.target.parentNode.children].indexOf(ev.target);
      return idx !== _idx;
    })
    render();
  }
  // else {

  // }

})
}
render();
console.log('destroyButton', destroyButton);

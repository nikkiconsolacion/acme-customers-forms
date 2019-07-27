const listContainer = document.querySelector('#list-container');
let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

const render = () => {
  const html = customers.map(customer => {
    let customerInfo = customer.name + " " + customer.email;
    console.log(customerInfo);
    return `<li>${customerInfo}</li>`
  }).join('');
  listContainer.innerHTML = html;
}
render();

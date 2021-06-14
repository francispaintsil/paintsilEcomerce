
function onClick(){
    window.open('./detail.html');
}

fetch('../assets/data/items.json').then(
    resp => resp.json()
).then((data) => {
    appendData(data);
}).catch((err) => {
    console.log(err);

});

function appendData(data) {
    let card = document.getElementById("card");
    let item_backdrop = document.getElementById("item_backdrop");
    let colors_ul = document.getElementById("colors");
}
function select(n) {
    show(slideIndex = n);
  }
  
  function show(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";    
  }
  let bag = [];
  function getItem(){
  let item = $("input[name=colors]:checked").attr("id");
  console.log(item);
  const itemName = document.getElementById('name');
  const itemPrice = document.getElementById('price');
  const itemcolor = document.getElementById('color');
  let quantity = document.getElementById('qty');
  let sum = document.getElementById('sum');
  let subTotal = document.getElementById('subT');
      fetch('../assets/data/items.json').then( (resp) => {
          return resp.json();
      }).then( (data) =>{
          for(let i=0;i<data.length; i++){
              if(data[i].id == item){
                  console.log(data[i]);
                  let colors = document.getElementById('colors');
                  bag.push(data[i]);
                  window.localStorage.setItem(`${i}`,JSON.stringify(data[i]));
                  itemName.innerText = data[i].name;
                  itemPrice.innerText = '$' + data[i].price;
                  // itemcolor.innerText = data[i].color;
                  quantity.innerText = 'Qty: ' + window.localStorage.length;
                  let sm = data[i].price * window.localStorage.length;
                  sum.innerText = '$' + sm;
                  subTotal.innerText = '$' + sm;
                  // colors
                  let kolors = data[i].colors;
                  for(j=0; j<kolors.length; j++){
                      let colorName = kolors[j].title;
                      itemcolor.innerText = colorName
                  }
              }
          }
      }
      ).catch((err) => {
          console.log(err);
        });
  }
  var cart = document.getElementById("cart");
  
  // Get the button that opens the cart
  var btn = document.getElementById("addToBag");
  
  // Get the <span> element that closes the cart
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the cart
  btn.onclick = function() {
      cart.style.display = "block";
  
  }
  // let checkoutBtn = document.getElementById('checkoutBtn');
  checkoutBtn.onclick = () => {
      window.location.href = './checkout.html';
      cart.style.display='none';
  }
  // When the user clicks on <span> (x), close the cart
  span.onclick = function() {
      cart.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the cart, close it
  window.onclick = function(event) {
      if (event.target == cart) {
          cart.style.display = "none";
      }
  }

  let checkoutBtn = document.getElementById('checkoutBtn');
let checkout = document.getElementById('checkout');
let nItems = document.getElementById('numOfItems');
let itemsBought = window.localStorage;
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let oneImg = document.getElementById('one-img');
let oneData = document.getElementById('one-data');
let its = document.getElementById('its');
console.log(itemsBought.length);
if(nItems){
nItems.innerText = itemsBought.length;
for(let i = 0; i < itemsBought.length; i++){
    let item = JSON.parse(itemsBought.getItem(i));
    let img = document.createElement('img');
    let name = document.createElement('span');
    let price = document.createElement('span');
    let size = document.createElement('span');
    let color = document.createElement('span');
    let qty = document.createElement('input');
    let unitPrice = document.createElement('span');
    let totalPrice = document.createElement('span');
    qty.type = 'number';
    qty.placeholder = itemsBought.length;
    qty.style.width = '30px';
    qty.style.margin = '10px';
    img.src = item.images[0];
    name.innerText = item.name;
    price.innerText = item.price;
    size.innerText = 'Size: ' + item.sizes[1];
    color.innerText = item.colors[0].title;

    qty.innerText = itemsBought.length;
    unitPrice.innerText = '@ $' + item.price + 'per unit';
    totalPrice.innerText = '$' + item.price * itemsBought.length;
    totalPrice.className = 'h4';
    // localStorage.clear();
    its.innerText = localStorage.length;

    oneImg.appendChild(img);
    oneData.appendChild(name);
    oneData.appendChild(color);
    oneData.appendChild(price);
    oneData.appendChild(size);

    two.appendChild(qty);
    two.appendChild(unitPrice);
    three.appendChild(totalPrice);


    console.log(img);
}



}

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
                    // var radioInput = document.createElement('input');
                    // radioInput.setAttribute('type', 'radio');
                    let colorName = kolors[j].title;
                    itemcolor.innerText = colorName
                    // let colorHex = kolors[j].hex;
                    // radioInput.style.cssText = `backgroundcolor:#${colorHex};`;
                }
                // console.log(window.localStorage.getItem(i));
            }
        }
        // addToCart(data);
    }
    ).catch((err) => {
        console.log(err);
      });
}
// function addToCart(data){
//     for(let i=0;i<data.length; i++){
//         // bag.append('')
//     }
// }
// Get the cart
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
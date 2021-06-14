
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



    // for (var i = 0; i < data.length; i++) {
    //     let img = document.createElement('img');
    //     let p = document.createElement('p');
    //     let b = document.createElement('b');
    //     img.src = data[i].image;
    //     for (c = 0; c < data[i].colors.length; c++) {
    //         let li = document.createElement('li');
    //         // li.innerText = data[i].colors[c].hex;
    //         li.innerText = '';
    //         colors_ul.appendChild(li);
    //     }

    //     p.innerText = data[i].title;
    //     b.innerText = data[i].price;
    //     item_backdrop.appendChild(img);

    //     card.appendChild(p);
    //     card.appendChild(b);
    // }

}
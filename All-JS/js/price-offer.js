// price of 5 item - [250,645,300,900,50]
// All item have an offer of 10% off.
// change the array to store final price after applying  offer.

// sol-
// 300 --> 30 --> 300-30 = 270  


// sol-1] --
// let price = [250,645,300,900,50];
 
// for(let offer of price){
//     // console.log(offer)

//     let item = offer / 10
//     // console.log(item);

//     let change_price = offer- item;
//     console.log(change_price);

// }


// sol-2] --
item = [250,645,300,900,50];

for(let i = 0; i < item.length; i++){
    let offer = item[i] / 10 ;
   // console.log(offer);
    item[i] = item[i] - offer;
}
console.log(item);

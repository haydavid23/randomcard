window.onload = () => {


let suits = ["\u2665", "\u2663","\u2666","\u2660"]

let card = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J","Q","K"]

let arr = []



arr.push(suits[Math.floor(Math.random() * suits.length)])
arr.push(card[Math.floor(Math.random() * card.length)])

console.log(arr)

document.querySelector("#icon").innerHTML = arr[0];
document.querySelector(".cardnumber").innerHTML = arr[1];
document.querySelector("#icon2").innerHTML = arr[0];

if(arr[0] === "\u2660" || arr[0] === "\u2663" ){
    document.querySelector("#icon").style.color="black"; 
    document.querySelector("#icon2").style.color="black"
}


}
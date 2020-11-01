import { Component, VERSION, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Quantum Meal";

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {}
}

// #120f30, #f6c95b, #dd0031, #7a75af, #716894

// https://github.com/FatimaTasnim
// https://www.linkedin.com/in/fatima-tasnim-757694114/
// https://www.linkedin.com/in/farzana-afrin-tisha-23989682/
// https://www.facebook.com/tishafarzanaafrin5.6

// let primeNumber = ( n: number ) => {
//   if ( n === 1) {
//     return false;
//   }
//   else if ( n === 2) {
//     return true;
//   }
//   else {
//     for ( let x = 2; x < n; x++ ) {
//       console.log(x)
//       if ( n % x === 0 ) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
// console.log(primeNumber(10));

// let line = "Hello There!"
// for (let i of line) {
//   if ( i == 'a' ||  i == 'e' || i =='i' || i =='o' || i =='u') {
//             var count = 0;
//             for(let i=0; i<this.length; i++)
//               count++
//         console.log(i)
//   }

// }

// const items = ['item1', 'item2', 'item3']
// const copyItems = []

// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i])
// }

// items.forEach(function(item){
//   copyItems.push(item)
// })

// function logArrayElements(element, index, array) {
//   console.log('a[' + index + '] = ' + element)
// }

// [2, 5, , 9].forEach(logArrayElements)
// // logs:
// // a[0] = 2
// // a[1] = 5
// // a[3] = 9

// let words = ['one', 'two', 'three', 'four']
// words.forEach((word) => {
//   console.log(word)
//   if (word === 'two') {
//     words.shift() //'one' will delete from array
//   }
// }) // one // two ​​​​// four

// console.log(words);  //['two', 'three',​​​​ 'four']

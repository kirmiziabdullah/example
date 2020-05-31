import React from 'react';
var sayilar = new Array("a", "b", "c", "d");
(async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(sayilar[0]), 1000)
    });
    let result = await promise; // wait until the promise resolves (*)
    console.log(result);
   let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(sayilar[1]), 2000)
    });
    result = await promise2; // wait until the promise resolves (*)
    console.log(result); // "done!"
        let promise3 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(sayilar[2]), 4000)
    });
    result = await promise3; // wait until the promise resolves (*)
    console.log(result); // "done!"
        let promise4 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(sayilar[3]), 8000)
    });
     result = await promise4; // wait until the promise resolves (*)
    console.log(result); // "done!"
    
  
  }) ()
export const Soru2 = (props) => (

    <p>Konsol Çıktısını incele</p>
)
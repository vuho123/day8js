//console.dir(btnClickme)

//  alert("Hello World")
//})
//function Hello(){
//alert(new Date())

//let divNow=document.getElementById("new")
//divNow.innerHTML=new Date();
// let btnClickme=document.getElementById("btnClickme")

// function mouseClick(){
// let account=document.getElementById("account")
// let password=document.getElementById("password")

// console.log(account.value,password.value)

// if (account.value==="admin"
//     && password.value==="123456")
// {
//   alert("Succesful")
//   window.location.href="https://dantri.com.vn"
//   //window.location.replace="https://dantri.com.vn"
// }
// else {
//   alert("Fail")
// }}
// function press(){
//   let account=document.getElementById("account")
//   let password=document.getElementById("password")

// }
// // function enterLogin(e){
// //   console.log(e)
// //   if(
// //      e.key==='Enter'

// //   ){
// //      mouseClick()
// //   }

// // }
let listPhones = [
  {
    name: "IphoneX",
    price: 20e6,
    brand: "Apple",
    img:'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png'
  },
  {
    name: "Samsung Galaxy A12",
    price: 24e6,
    brand: "Samsung",
    img:'https://dyw7ncnq1en5l.cloudfront.net/optim/product/55/55491/86efc095-galaxy-s20__450_400.jpeg'
  },
  {
    name: "Xiaomi redmi 9",
    price: 26e6,
    brand: "Xiaomi",
    img:'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png'
  },
  {
    name: "Reno3",
    price: 28e6,
    brand: "Oppo",
    img:'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png'
  },
  {
    name: "Reno3",
    price: 28e6,
    brand: "Oppo",
    img:'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png'
  }
];

let newPhone = {
  name: "Vu",
  price: 12,
  brand: "Apple",
  img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png'
}

listPhones.push(newPhone)
function myFunction(){
  
  listPhones[1].name   = document.getElementById("yourName").value
  listPhones[1].price = document.getElementById("yourPrice").valuea
  listPhones[1].brand = document.getElementById("yourBrand").value
  listPhones[1].img = "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png"
  // alert("Hello World")
  listPhones.push(newPhone)
// console.log(newPhone);
  

}
console.log(listPhones);
// listPhones.push(newPhxone)
// listPhones.push(newPhonse[0])

// console.log(listPhones);





function displayListPhones() {
  let tbody=document.getElementById("list-phones");
  tbody.innerHTML="";
  for (let i = 0; i < listPhones.length; i++) {
    const phone = listPhones[i];
    let HTML = `
      <tr>
      <td>${i+1}</td>
      <td><span onClick="viewDetail('${phone.name}')">${phone.name}</span> </td>
      <td> <span onclick="viewDetail1('${phone.price}')"> ${phone.price}</span></td>
      <td><span onclick="viewDetail2('${phone.brand}')">${phone.brand}</span> </td>
      <td><img onclick="viewDetail('${phone.name}')" src="${phone.img}" alt="${phone.name} width="50px" height="50px"></td>
      
  </tr>
    `;
  


tbody.innerHTML+=HTML;
  }
}
displayListPhones()


function viewDetail(phoneName){
  alert(phoneName)
}
function viewDetail1(phonePrice){
  alert(phonePrice)
}
function viewDetail2(phoneBrand){
  alert(phoneBrand)
}
function myFunction(){
  
  listPhones[1].name   = document.getElementById("yourName").value
  listPhones[1].price = document.getElementById("yourPrice").valuea
  listPhones[1].brand = document.getElementById("yourBrand").value
  listPhones[1].img = "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png"
  // alert("Hello World")
  listPhones.push(newPhone)
// console.log(newPhone);
  

}

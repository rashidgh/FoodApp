let sum = 0;
let increment = () => {
  document.querySelector(".qty").innerHTML = ++sum;
};
let decrement = () => {
  if (sum <= 1) {
    sum == 1;
  }
  else {
    document.querySelector(".qty").innerHTML = --sum;
  }
};
let NonveghandleChange = () => {
  let food = async () => {
    let data = await window.fetch("./index.json");
    let finalData = await data.json();
     finalData.map(e => {
      document.getElementById("browser").innerHTML = "";
      let NonVeg = e.nonVeg;
      for (val of NonVeg) {
        let NonvegPrice = val.price;
        let NonvegName = val.name;
        document.getElementById("browser").innerHTML += `
        <Option>${NonvegName}: &nbsp&nbsp&nbsp&nbsp &#8377;${NonvegPrice}</Option>`;
      }
    });
  };
  food();
};
let str = "";
let VeghandleChange = () => {
  let food = async () => {
    let data = await window.fetch("./index.json");
    let finalData = await data.json();
    // console.log(finalData);
    finalData.map(e => {
      document.getElementById("browser").innerHTML = "";
      let Veg = e.Veg;
      for (val of Veg) {
        str = val.price;
        let vegName = val.name;
        // console.log(vegName);
        document.getElementById("browser").innerHTML += `
        <Option >${vegName}&nbsp&nbsp&nbsp&nbsp &#8377;${str}</Option>`;
      }
    });
  };
  food();
};
console.log(str);
let button = document.querySelector(".form");
button.addEventListener("submit", e => {
  console.dir(e.target);
  e.preventDefault();
  let address = e.target[4].value;
  document.querySelector(".adress").innerHTML=`${address}`
  let name = document.getElementById("name").value;
  // console.log(name);
  document.querySelector(".cusName").innerHTML = `${name}`;
  let drop = document.querySelector("#browser").value;
  // console.log(drop);
  let newdrop = drop.slice(0, 15 );
  let finalprice = drop.slice(-3);
  let intPrice = parseInt(finalprice);
  let itemNo = Math.floor(Math.random() * 100);
  let qty = document.querySelector(".qty").innerHTML;
  let fqty = parseInt(qty);
  // console.log(itemNo);
  document.querySelector(
    ".body"
  ).innerHTML += `<tr><td>${itemNo}</td><td>${newdrop}</td>
    <td>${finalprice}</td><td>${fqty}</td><td>&#8377;${eval(
    intPrice * fqty
  )}</td><td><i class="fa-solid fa-trash remove"></i><i class="fa-solid fa-pen edit"></i></td></tr>`;
  document.querySelectorAll(".remove").forEach(li => {
    li.addEventListener("click", e => {
      e.target.parentElement.parentElement.remove();
    });
  });
});


// !state:
let state = async () => {
  let data = await window.fetch(`https://restcountries.com/v2/all`);
  let finalData = await data.json();
  console.log(finalData);
  // let arr = [];
  finalData.map(e => {
    let namee = e.name;
    // console.log(namee);
    document.querySelector(
      "#countary"
    ).innerHTML += `<option value=${namee}>${namee}</option>`;
  });
};
state();
let itemNo1 = Math.floor(Math.random() * 10000);
document.querySelector(".invoice").innerHTML = `${itemNo1}`;
// if (str = "") {
//   document.querySelector(".invoice").innerHTML = `${""}`;
// } else {
//   document.querySelector(".invoice").innerHTML = `${itemNo1}`;
// } 
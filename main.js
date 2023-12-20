function toggleSearchBox() {
    const searchBox = document.getElementById("search-box");

    
    if (searchBox.classList.contains("hidden")) {
        searchBox.classList.remove("hidden");
    } else {
        searchBox.classList.add("hidden");
    }
};
let cartCount = 0;

function addToCart() {
  cartCount++;
  updateCartCount();
}

function showCart() {
  document.getElementById("bi-badge").style.display = "block";
  updateCartItems();
}

function hideCart() {
  document.getElementById("empty-card").style.display = "none";
}

function updateCartCount() {
  document.getElementById("bi-badge").innerText = cartCount;
}

function updateCartItems() {
  const cartItemsList = document.getElementById("cartItemsList");
  cartItemsList.innerHTML = "";

  for (let i = 0; i < cartCount; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = `Item ${i + 1}`;
    cartItemsList.appendChild(listItem);
  }
}
 const cartItem=[
  {
Image:' img/air jordan 1 mid.webp',
title:'jordan air 1 mid',
price:'5500'
  }
 ]
 const categerioes= [...new Set(cartItem.map((item) => {return item}))];

 function displayCart(){
let j = 0;
  if(categerioes.length==0){
document.getElementById("main-contant-box").innerHTML="your cart is empty";
  }else{
    document.getElementById("main-contant-box").innerHTML= cartItem.map((item) => {
  
    
    }) 
  }
}

      function toggleThreeLine() {
        var element = document.querySelector(".floated-menu");
        console.log(element);
        if (element) {
          if (element.style.visibility === "visible") {
            element.style.visibility = "hidden";
          } else {
            element.style.visibility = "visible";
          }
        }
      }
      function togglefeatureicon() {
        var element = document.querySelector(".floated-feature");
        console.log(element);
        if (element) {
          if (element.style.visibility === "visible") {
            element.style.visibility = "hidden";
          } else {
            element.style.visibility = "visible";
          }
        }
      }

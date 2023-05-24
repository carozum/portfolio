/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

import backpackObjectArray from "./components/data.js";

const main = document.querySelector(".maincontent");


// create navBar
const mainNav = document.createElement("nav");
const mainNavList = document. createElement("ul");

mainNavList.innerHTML = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Contact</a></li>
`;
mainNav.classList.add("main-nav");
mainNav.append(mainNavList);

document.querySelector(".siteheader").append(mainNav);


// create Articles section with each backpack

//** map through the array of objects and make a new array of elements
const allBackpack = backpackObjectArray.map((itemObject) =>{
  // itemObject holds a single object

  // create new article
  const newArticle = document.createElement("article");
  
  // set article id and class
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", itemObject.id);

  // set article content
  const content = `
    <figure class="backpack__image">
      <img src=${itemObject.image} alt="" loading="lazy" />
    </figure>
    <h3 class="backpack__name">${itemObject.name}</h3>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        itemObject.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        itemObject.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${itemObject.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        itemObject.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        itemObject.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        itemObject.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span>${
        itemObject.lidOpen?"open":"close"} </span></li>
    </ul>
    <button class="lid-toggle" >Open lid</button>
  `;
  newArticle.innerHTML = content;


   // adding event listener
const button = newArticle.querySelector(".lid-toggle");
const status = newArticle.querySelector(".backpack__lid span");

button.addEventListener("click", (event) => {
  status.innerText === "open" ? status.innerText = "close" : status.innerText = "open";
  console.log(event);
});
  
  return newArticle;

});

allBackpack.forEach((item) => {
  main.append(item);
});




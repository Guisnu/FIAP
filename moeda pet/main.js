let user_pet_money = 0;
let racao_quanty = 0;
const pet_price = 0.05;
const racao_price = 20;


const form = document.querySelector("#form");
const gramas = document.querySelector("#gramas");
const money = document.querySelector("#money");
const buy = document.querySelector("#buy");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = Number(gramas.value);
  user_pet_money += Math.round(value * pet_price);

  money.textContent = user_pet_money; 
})

buy.addEventListener("click", () => {

  if(user_pet_money < racao_price){
    return alert("Você não tem moedas!");
  }

  user_pet_money -= racao_price;
  racao_quanty++
  
  console.log(racao_quanty);
  money.textContent = user_pet_money; 

  // if ( user_pet_money >= racao_price ) {
  //   user_pet_money -= racao_price;
  //   racao_quanty++
    
  //   console.log(racao_quanty);
  //   money.textContent = user_pet_money; 
  // } else {
  //   alert("Você não tem moedas pet o suficiente!");
  // }
})
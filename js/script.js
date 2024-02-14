console.log('hi')
// calculate button 
document.getElementById('calculate-btn').addEventListener('click',function(){


  // Income

  const incomeInput = document.getElementById('income')
  const valueIncomeInput = incomeInput.value;
  const convartValueIncomeInput = parseInt(valueIncomeInput)

  // foodInput
  const foodInput = document.getElementById('food')
  const valueFoodInput =foodInput.value;
  const convartValueFoodInput = parseInt(valueFoodInput);

  // Rent
  const rentInput = document.getElementById('rent')
  const valueRentInput =rentInput.value;
  const consvartValueRentInput = parseInt(valueRentInput)

  //Clothes
  const clothesInput = document.getElementById('clothes')
  const valueClothesInput =clothesInput.value;
  const consvartValueClothesInput = parseInt(valueClothesInput)


// check 
  console.log(valueClothesInput)
  


  // total expense

  const totalExpense = document.getElementById('total-expense');
  const valueTotalExpense = totalExpense.innerText;
  const allExpense = consvartValueClothesInput + consvartValueRentInput + convartValueFoodInput;
  totalExpense.innerText =  allExpense;



  // Balance

  const balance =document.getElementById('balance')
  const  nowblance = convartValueIncomeInput- allExpense;
  balance.innerText = nowblance;


})


// save button 

document.getElementById('save-button').addEventListener('click',function(){

   // Income

   const incomeInput = document.getElementById('income')
   const valueIncomeInput = incomeInput.value;
   const convartValueIncomeInput = parseInt(valueIncomeInput)


  //  save input
  const save = document.getElementById('save')
  const valueSave = save.value;
  const  convartAmount= convartValueIncomeInput*(valueSave/100);
  const calculateSavingAmount  = parseFloat(convartAmount).toFixed(4)

  // Saving Amount:
  const savingAmount = document.getElementById('saving-amount')
  savingAmount.innerText = calculateSavingAmount;

   const valueSavingAmount =savingAmount.innerText;
   const convartSavingAmount =parseFloat(valueSavingAmount).toFixed(4);



     // Balance

  const balance =document.getElementById('balance')
  const valueBlance = balance.innerText;
  const convartValueBlance = parseFloat(valueBlance)
  const RemainingBalance = convartValueBlance - convartSavingAmount;
  const totalRemainingBalance = parseFloat(RemainingBalance)


  // Remaining Balance

  const finalRemainingBalance = document.getElementById('remaining-balance')
  finalRemainingBalance.innerText = totalRemainingBalance;


})
const addnewbtn = document.querySelector("#add-new-btn")
const discriptionList = document.querySelector("#discription-list")
const amountList = document.querySelector("#amount-list")
const discriptionText = document.querySelector("#discription-text")
const amountTextt = document.querySelector("#amount-text")
const historyList = document.querySelector(".history-list")
const alert1 = document.querySelector(".alert")
const incomeDiv = document.querySelector(".incomediv")
const expenceDiv = document.querySelector(".expencediv")
const balanceDiv = document.querySelector(".balancediv")

const historyArray = []


addnewbtn.addEventListener("click",()=>{
    var expTotal = 0
    var incTotal = 0
    var balanceTotal = 0
    historyList.innerHTML = ``
    alert1.innerHTML = ``
    console.log("add new btn clicked")
    // console.log(discriptionText.value)
    // console.log(amountTextt.value)

    // ---------alert if discription or amount invalid--------------

    if(amountTextt.value === "" ||  amountTextt.value === 0){
      alert1.innerHTML = `Enter Valid amount !`
    }else if(discriptionText.value === ""){
      alert1.innerHTML = `Enter Valid description !`
    }





// pusshing transactions in array according to thier types....................!

    if(amountTextt.value === "" ||  amountTextt.value === 0 || discriptionText.value === ""){
      alert1.innerHTML = `Enter Valid values !`
    }else{
    if(amountTextt.value > 0){
        const transaction = {
            type: "income",
            text: discriptionText.value,
            amount: amountTextt.value
          }
          historyArray.push(transaction)
    }else{
        const transaction = {
            type: "expence",
            text: discriptionText.value,
            amount: amountTextt.value
          }
          historyArray.push(transaction)
        }}


// Rendering transactions from array .................!

          historyArray.map((item)=>{
            if(item.type === "income"){
                       historyList.innerHTML += `
             <li class="plus">
                   <p id="discription-list">${item.text}</p>
                   <p id="amount-list">$${item.amount}</p>
             </li>
           `
           incTotal = incTotal + +item.amount
           
            }else{
                historyList.innerHTML += `
                <li class="minus">
                      <p id="discription-list">${item.text}</p>
                      <p id="amount-list">$${item.amount}</p>
                </li>
              `
              expTotal =  expTotal + +item.amount
            }
          })
          
          console.log("income total" + incTotal)
          console.log("exp total" + expTotal)
    

      balanceTotal = incTotal + expTotal
    balanceDiv.innerHTML = `$ ${balanceTotal}`
    incomeDiv.innerHTML = `$ ${incTotal}`
    expenceDiv.innerHTML = `$ ${expTotal}`
    amountTextt.value = ``
    discriptionText.value = ``
})



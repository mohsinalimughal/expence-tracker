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
const deletebtn = document.querySelector("#deletebtn")

const historyArray = []


addnewbtn.addEventListener("click",()=>{
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

        renderHistory()

      }
// Rendering transactions from array .................!
)

// deletebtn.addEventListener("click",()=>{
  //   console.log("Delete pressed")
// })
const deletepressed = (index)=>{
  console.log("okay pressed" + index)
  historyArray.splice(index,1)
  renderHistory()
  console.log("index of button"+index)
  // if(type==="expence"){
    //      expTotal = expTotal + +amount
  // }else if(type==="income"){
  //   expTotal = expTotal - +amount
  // }
  

  // // Rendering transactions from array .................!
  
  // historyArray.map((item,index)=>{
  //   if(item.type === "income"){
    //              historyList.innerHTML += `
    //    <li class="plus">
    //          <p id="discription-list">${item.text}</p>
  //          <button id="deletebtn" onclick="deletepressed(${index})" >delete</button>
  //          <p id="amount-list">$${item.amount}</p>
  //    </li>
  //  `
  //  incTotal = incTotal + +item.amount
   
  //   }else{
    //       historyList.innerHTML += `
  //       <li class="minus">
  //             <p id="discription-list">${item.text}</p>
  //             <button id="deletebtn" onclick="deletepressed(${index})" >delete</button>
  //             <p id="amount-list">$${item.amount}</p>
  //       </li>
  //     `
  //     expTotal =  expTotal + +item.amount
  //   }
  // })
  
  
  // balanceTotal = incTotal + expTotal
  // balanceDiv.innerHTML = `$ ${balanceTotal}`
  // incomeDiv.innerHTML = `$ ${incTotal}`
  // expenceDiv.innerHTML = `$ ${expTotal}`
}
const renderHistory = ()=>{
            historyList.innerHTML = ``
                var expTotal = 0
                var incTotal = 0
                var balanceTotal = 0
          historyArray.map((item,index)=>{
            if(item.type === "income"){
                       historyList.innerHTML += `
             <li class="plus">
                   <p id="discription-list">${item.text}</p>
                 
                   <p id="amount-list">$${item.amount}</p>
                   <span id="dltbtn" onclick="deletepressed(${index})"><i class="fa-solid fa-trash trash"></i></span>
             </li>
           `
           incTotal = incTotal + +item.amount
           
            }else{
                historyList.innerHTML += `
                <li class="minus">
                      <p id="discription-list">${item.text}</p>
                      <p id="amount-list">$${item.amount}</p>
                      <span id="dltbtn" onclick="deletepressed(${index})"><i class="fa-solid fa-trash trash"></i></span>
                      </li>
              `
              expTotal =  expTotal + +item.amount
            }
          })
          
    balanceTotal = incTotal + expTotal
    balanceDiv.innerHTML = `$ ${balanceTotal}`
    incomeDiv.innerHTML = `$ ${incTotal}`
    expenceDiv.innerHTML = `$ ${expTotal}`
    amountTextt.value = ``
    discriptionText.value = ``
    console.log(historyArray)
}



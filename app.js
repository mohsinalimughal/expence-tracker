const addnewbtn = document.querySelector("#add-new-btn")
const discriptionList = document.querySelector("#discription-list")
const amountList = document.querySelector("#amount-list")
const discriptionText = document.querySelector("#discription-text")
const amountTextt = document.querySelector("#amount-text")
const historyList = document.querySelector(".history-list")

const historyArray = []


addnewbtn.addEventListener("click",()=>{
    historyList.innerHTML = ``
    console.log("add new btn clicked")
    console.log(discriptionText.value)
    console.log(amountTextt.value)
    if(amountTextt.value > 0){
        const transaction = {
            type: "income",
            text: discriptionText.value,
            amount: +amountTextt.value
          }
          historyArray.push(transaction)
    }else{
        const transaction = {
            type: "expence",
            text: discriptionText.value,
            amount: +amountTextt.value
          }
          historyArray.push(transaction)
        }



          historyArray.map((item)=>{
            if(item.type === "income"){
                       historyList.innerHTML += `
             <li class="plus">
                   <p id="discription-list">${item.text}</p>
                   <p id="amount-list">$${item.amount}</p>
             </li>
           `
            }else{
                historyList.innerHTML += `
                <li class="minus">
                      <p id="discription-list">${item.text}</p>
                      <p id="amount-list">$${item.amount}</p>
                </li>
              `
            }
          
        //   console.log(historyArray)
        //   historyArray.map((item)=>{
        //       historyList.innerHTML += `
        //       <li class="minus">
        //           <p id="discription-list">${item.text}</p>
        //           <p id="amount-list">$${item.amount}</p>
        //       </li>
        //       `
        //   })
    })

    







    amountTextt.value = ``
    discriptionText.value = ``
})
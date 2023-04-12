fetch('/symbols')
.then(response => response.json())
.then(data => {
    console.log(data)
    let arr = Object.entries(data)
    console.log(arr[0])
    let element = `<option>Choose Currency</option>`
    arr.forEach(ele=>{
        element+=`<option value=${ele[0]}>${ele[1]}</option>`
    })
    document.getElementById('from').innerHTML = element
    document.getElementById('to').innerHTML = element
})

function convertCurrency() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amount = document.getElementById("amount").value;
  
    fetch(`/convert?from=${from}&to=${to}&amount=${amount}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.getElementById("result").innerHTML = `${amount} ${from} = ${data} ${to}`;
      })
      .catch(error => console.log('error', error));
  }

  function swap() {
    const [from, to] = [document.getElementById("from"), document.getElementById("to")];

    [from.value, to.value] = [to.value, from.value];
    convertCurrency()
  }


  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('swap').addEventListener('click',swap)
    document.getElementById('convert').addEventListener('click',convertCurrency)
})

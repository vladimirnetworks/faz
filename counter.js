mydiv = document.getElementsByTagName("h1")[0]
count = 1;
setInterval(()=>{
  mydiv.innerHTML = "BEN "+count ;
  count++;
},1000)

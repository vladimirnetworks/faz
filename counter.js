mydiv = document.getElementsByTagName("h1")[0]
count = 1;
setInterval(()=>{
  mydiv.innerHTML = "BEN "+count ;
  mydiv.style.fontSize = count*0.5+"rem"
  count++;
},1000)

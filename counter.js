mydiv = document.getElementsByTagName("h1")[0]
count = 1;
mydiv.style.transition="all 0.5s"
setInterval(()=>{
  mydiv.innerHTML = "BEN "+count ;
  mydiv.style.fontSize = count*0.5+"rem"
  count++;
},1000)

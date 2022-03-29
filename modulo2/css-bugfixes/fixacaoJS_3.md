```
function calculaNota(ex, p1, p2) {
  let valor = (ex+ p1+ p2)/3
  if(valor >=9){
    return "A"
  }if(valor>=7.5){
    return "B"
  }if (valor >=6){
    return "C"
  }else{ return "D"}

}
```
const insertSort =(array)=>{
  for(let i =1 ; i < array.length ; i++){
    let insertElement = array[i];
    let k = i-1;
   while (insertElement < array[k] && k>=0){
    array[k+1] = array[k]
    k--
  }
  array[k+1] = insertElement
}
return array
}





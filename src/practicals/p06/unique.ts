function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  let arr_r : number[] = [];
  for(const n1 of arr1){
    if(!arr2.includes(n1)){
      arr_r.push(n1);
    }
  }
  for(const n2 of arr2){
    if(!arr1.includes(n2)){
      arr_r.push(n2);
    }
  }
  if(!arr_r){
    return [];
  }
  else{
    return arr_r;
  }
}
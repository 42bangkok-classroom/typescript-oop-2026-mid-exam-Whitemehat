export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  let arr_r : number[] = [];
  let arr_n1 : number[] = [];

  //check arr 1
  for(const n1 of arr1){
    if(!arr_n1.includes(n1)){
      arr_n1.push(n1);
    }
    else{
      arr_n1.pop()
    }
  }
  //if not duplicate in single array
  for(const n1 of arr_n1){
    if(!arr2.includes(n1)){
      arr_r.push(n1);
    }
  }
  for(const n2 of arr2){
    if(!arr_n1.includes(n2)){
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

const arr1 = [1, 1 , 2];
const arr2 = [3];

//const result = getUniqueNumbers(arr1,arr2);
//console.log(result);
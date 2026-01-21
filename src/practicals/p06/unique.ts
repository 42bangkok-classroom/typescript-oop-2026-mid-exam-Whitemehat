function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  let arr_r : number[] = [];
  for(const n1 of arr1){
    arr_r.push(n1);
  }
  for(const i in arr2){
    if(!arr_r.includes(arr2[i]))
    {
      arr_r.push(arr2[i]);
    }
    else{
      
    }
  }
  return arr_r;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

let result : number[] = getUniqueNumbers(arr1,arr2);
console.log(result);
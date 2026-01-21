// Write your code below
let n = Number(process.argv[2]);
if(!n || n <= 0){
    process.exit(0);
}
for(let i = 1;i <= n;i++){
    let row = "";
    for(let k = n; k > i;k--){
        row += " ";
    }
    for(let j = i; j > 0;j--){
        row += String(j);
    }
    console.log(row);
}
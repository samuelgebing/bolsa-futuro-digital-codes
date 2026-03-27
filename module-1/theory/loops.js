// much more common
for(let i=1;i<5;i++){
    console.log(i);
}

console.log("\n");

/*
// input just until 199
for(let i=100;i<200;i++){
    console.log(i);
}
/*

/*
* NEEDED - 21min --> 16061501
for(let i=100;i<2000000000000000;i++){
    console.log(i);
}
*/

// rarely
let count = 1;
while(count<5){
    console.log(count);
    count++; // if this line is not here, the count variable will never be updated and the loop will run forever
}

console.log("\n");

// almost never
let num = 0;
do{
    console.log(num);
    num++;
} while(num<5);
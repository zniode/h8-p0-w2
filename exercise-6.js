var counter1 = 0;
var counter2 = 20;
var coding1= "I love Coding";
var coding2= "I will become fullstack developer";
var separator = " - "

console.log("LOOPING PERTAMA");
while (counter1 <= 20){
  console.log(counter1 + separator + coding1);
  counter1+=2;
}
console.log("LOOPING KEDUA");
while (counter2 >=0 ){
  console.log(counter2 + separator + coding2);
  counter2-=2;
}


var coding1= "I love Coding";
var coding2= "I will become fullstack developer";
var separator = " - "

console.log("LOOPING PERTAMA");
for(counter=1; counter<=20; counter++){
  console.log(counter + separator + coding1);
}
console.log("LOOPING KEDUA");
for(counter=20; counter>0; counter--){
  console.log(counter + separator + coding2);
}


for (counter=1; counter<=100; counter++){
  if (counter % 2 === 0){
    console.log('GENAP');
  } else{
    console.log('GANJIL');
  }
}

for (counter=1; counter<=100; counter+=2){
  if (counter % 3 === 0){
    console.log(counter + " kelipatan 3");
  } else{
    console.log('');
  }
}

for (counter=1; counter<=100; counter+=5){
  if (counter % 6 === 0){
    console.log(counter +" kelipatan 6");
  } else{
    console.log('');
  }
}

for (counter=1; counter<=100; counter+=9){
  if (counter % 10 === 0){
    console.log(counter + " kelipatan 10");
  } else{
    console.log('');
  }
}
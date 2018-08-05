var rows1 = 5

while(rows1 > 0){
  rows1--;
  console.log('*');

}


var row2 = 5;
var buffer = "";

for(counter=0; counter<row2; counter++) {
  buffer = "";
  for(counter2=0; counter2<row2; counter2++) {
    buffer += "*";
  } 

  console.log(buffer);
}


var row3 = 5;
var buffer = "";

for(counter=0; counter<row3; counter++) {
  buffer += "*";

  console.log(buffer);
}
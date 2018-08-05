function xo(str) {
    // you can only write your code here!
    var x=0;
    var o=0;
  
    for(var counter=0; counter<str.length; counter++){
      if(str[counter]==="x"){
        x++;
      }else if(str[counter]==="o"){
        o++;
      }
    }
    return x===o;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
function balikKata(kata) {
    var stringBaru = "";
    for (var counter = kata.length - 1; counter >= 0; counter--) {
        stringBaru += kata[counter];
    }
    return stringBaru;// you can only write your code here!
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS
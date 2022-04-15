/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how 
conditionals work.
*/

maxOfTwoNumbers = (num1,num2) => {
if(num1>num2){
console.log("Largest of two number is", num1);}
else if(num1<num2) {console.log("Largest of two number is", num2);
  }
  else {console.log("The numbers are the same")};
  
}

maxOfTwoNumbers(2,1);

// 2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
// */
maxOfThree = (num1,num2,num3) => {
  var maxNumb;
  if(num1>num2){if (num1>num3) {maxNumb=num1} else {maxNumb=num3}}
  else if(num2>num3){maxNumb=num2} else {maxNumb=num3};
  console.log("Largest of them is",maxNumb);
};

maxOfThree(100,120,130);

// 3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// */
isCharacterAVowel = (char) => {
    if(char == 'a'|| char =='e' || char=='i' || char=="o" || char=="u"|| char == 'A'|| char =='E' || char=='I' || char=="O" || char=="U"){
        console.log("Yes given char is a vowel")} else {console.log("No given char is not a vowel")};
    };
  
    isCharacterAVowel('E');


    // 4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all 
    // the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  
    // multiplyArray([1,2,3,4])  should return 24.
    // // */
    
    function sumArray(a){
        var total=0;
      
        for(var i in a) { 
            total += a[i];
              }
      console.log('Sum of Array is',total);
     }
    
    var numbers = [1,2,3,4]; 
    var Sum= sumArray(numbers);
    
    function multiplyArray(a){
        var total=1;
      
        for(var i in a) { 
            total *= a[i];
              }
      console.log('Product of Array is',total);
     }
    
    var numbers = [1,2,3,4]; 
    var Product= multiplyArray(numbers);

    // 5.Write a function that returns the number of arguments passed to the function when called.

    function ArgCounter() {
        x=arguments.length;
        console.log('Number of arguments passed',x)
          
      }
     ArgCounter(10,20,30,40,50);

    //  6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
      console.log(newString);
    }
    reverseString('jag testar');

    // 7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.

    function findLongestWord(str) {
        var strSplit = str.split(' ');
        var longestWord = 0;
        for(var i = 0; i < strSplit.length; i++){
          if(strSplit[i].length > longestWord){
          longestWord = strSplit[i].length;
           }
        }
        console.log('Length of the longest work is',longestWord);
        
      }
      
      findLongestWord("Function to find longest word in an array");

    //   8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.

    function filterLongWords (arrWord,num) {
        newArr = [];
        for (var i = 0; i < arrWord.length; i++) {
          if(arrWord[i].length > num){
            newArr.push(arrWord[i]);
          }
        }
        return newArr;
      }


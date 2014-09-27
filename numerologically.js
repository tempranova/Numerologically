// PREPARING DATA

// Initial global variables

var arrBig = ["Birthday", "FirstName", "MiddleName", "LastName"];
var arrBigLength = arrBig.length;
var arrAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","_"];
var arrAlphabetValue = ["1","2","3","4","5","6","7","8","9","1","2","3","4","5","6","7","8","9","1","2","3","4","5","6","7","8","7"];

// Remove dashes and spaces from string

function formatString(str)
{
  // If you need to check if it's a number, you can do an if statement here
  var lowerCase = str.toLowerCase();
  var noDashes = lowerCase.replace(/-/g, "");
  var formattedThing = noDashes.replace(" ","");
  var formattedString = formattedThing.toString();
  return formattedString;
}

// Get form values, format them, store them in global variables

function formatFieldsAndStore()
{
    for (i=0;i<4;i++)
    {
        var currentFieldName = arrBig[i];
        var currentFieldValue = document.forms.numerologicalForm[currentFieldName].value;
        var formattedString = formatString(currentFieldValue);
        switch (currentFieldName)
        {
            case "Birthday":
                window.strBirthday = formattedString;
                break;
            case "FirstName":
                window.strFirstName = formattedString;
                 break;
            case "MiddleName":
                window.strMiddleName = formattedString;
                break;
            case "LastName":
                window.strLastName = formattedString;
                break;
        }
    }
    var strFullName = strFirstName.concat(strMiddleName,strLastName);
    var firstLetterFirstName = strFirstName.substr(0,1);
    var firstLetterMiddleName = strMiddleName.substr(0,1);
    var firstLetterLastName = strLastName.substr(0,1);
    var strFirstNameLength = strFirstName.length;
    var strMiddleNameLength = strMiddleName.length;
    var strLastNameLength = strLastName.length;
    var lastLetterFirstName = strFirstName.substr(strFirstNameLength - 1);
    var lastLetterMiddleName = strMiddleName.substr(strMiddleNameLength - 1);
    var lastLetterLastName = strLastName.substr(strLastNameLength - 1);
    window.strFirstLetterFirstName = firstLetterFirstName;
    window.strFirstLetterMiddleName = firstLetterMiddleName;
    window.strFirstLetterLastName = firstLetterLastName;
    window.strLastLetterFirstName = lastLetterFirstName;
    window.strLastLetterMiddleName = lastLetterMiddleName;
    window.strLastLetterLastName = lastLetterLastName;
    window.strFullName = strFullName;
}

// breakUp and start addTogether
function breakUp(str, arrayLength)
{
  var characterArray = [];
  for (i=0;i<4;i++)
    {
      var character = str.charAt(i);
      characterArray.push(character);
    }
  addTogether(characterArray);

}

// ADDING
// Basic addition
function addition(string) {
    string = string.split('');                 //split into individual characters
    var sum = 0;                               //have a storage ready
    for (var i = 0; i < string.length; i++) {  //iterate through
        sum += parseInt(string[i],10);         //convert from string to int
    }
    return sum;                                //return when done
}

// Add, then add together again until 1 digit
function reduce(string) {
    var strFirstAddition = addition(string);
    var stringLength = strFirstAddition.toString().length;
    if (stringLength >= 2)
      {
        var prepare = strFirstAddition.toString();
        var reduction = addition(prepare);
        return reduction;
      } else {
        var reduction = strFirstAddition;
        return reduction;
      }
}

// Add array together and send to print
function arrayAddTogether(arr)
{ 
    function add(a, b) 
      {
        return a + b;
      }
    var singleString = arr.join("");
    var singleStringLength = singleString.length;
    var sumOfString = addition(singleString);
    var stringLength = sumOfString.toString().length;
    if (stringLength >= 2)
    {
      var sumOfStringString = sumOfString.toString();
      var sumOfString2 = addition(sumOfStringString);
        return sumOfString2;
    } else {
        return sumOfString;
    }
}

// ASSIGNING GROUPING
// Make year, month, and day
function defineDates(str)
{
    var strBirthYear = str.substr(0,4);
    var strBirthYearLength = strBirthYear.length;
    var strBirthMonth = str.substr(4,2);
    var strBirthMonthLength = strBirthMonth.length;
    var strBirthDay = str.substr(6,2);
    var strBirthDayLength = strBirthDay.length;
    
  window.strBirthYear = strBirthYear;
  window.strBirthYearLength = strBirthYearLength;
  window.strBirthMonth = strBirthMonth;
  window.strBirthYearLength = strBirthYearLength;
  window.strBirthDay = strBirthDay;
  window.strBirthYearLength = strBirthYearLength;
}

// Make first letters, last letters with letterPositionTag
function letterPositionTag()
{
  var strThisNameLength = formattedString.length;
  var strFirstLetter = formattedString.substr(0,1);
  // Smart method from stackOverflow
  var strLastLetter = formattedString.substr(strThisNameLength - 1);
} 

// Make vowels, consonants with arrays

// Get vowels only
function getVowels(str)
{
  var arrThisNameVowels = [];
  var arrThisNameConsonants = [];
  var strThisNameLength = str.length;
 for (i=0;i<strThisNameLength;i++)
  {
    var strThisLetter = str.substr(0+i,1);
    var strThisLetterYeah = strThisLetter.toString();
    // Check for vowels or consonants, _ represents y as a vowel
    if (strThisLetterYeah === "a" || strThisLetterYeah === "e" || strThisLetterYeah === "i" || strThisLetterYeah === "o" || strThisLetterYeah === "u" || strThisLetterYeah === "_")
      {
      arrThisNameVowels.push(strThisLetterYeah);
      } 
    else {
      arrThisNameConsonants.push(strThisLetterYeah);
        }
  }
    return arrThisNameVowels;
}

// Get consonants only
function getConsonants(str)
{
  var arrThisNameVowels = [];
  var arrThisNameConsonants = [];
  var strThisNameLength = str.length;
  for (i=0;i<strThisNameLength;i++)
  {
    var strThisLetter = str.substr(0+i,1);
    var strThisLetterYeah = strThisLetter.toString();
    // Check for vowels or consonants, _ represents y as a vowel
    if (strThisLetterYeah === "a" || strThisLetterYeah === "e" || strThisLetterYeah === "i" || strThisLetterYeah === "o" || strThisLetterYeah === "u" || strThisLetterYeah === "_")
      {
      arrThisNameVowels.push(strThisLetterYeah);
      } 
    else {
      arrThisNameConsonants.push(strThisLetterYeah);
        }
  }
    return arrThisNameConsonants;
}

// Convert letters into numbers from array
function lettersToNumbersArray(arr, arrLength)
{
  var arrNumberArray = [];
  for (i=0;i<arrLength;i++)
    {
      for (k=0;k<26;k++)
          {
               var strThisLetter = arr[i];
               if (strThisLetter === arrAlphabet[k])
                 {
                   var thisNumber = arrAlphabetValue[k];
                   var strThisNumber = thisNumber.toString();
                   arrNumberArray.push(strThisNumber);
                 } else {}
          }
    }
}

// Convert letters into numbers from string
function lettersToNumbersString(str)
{
  var newArr = str.split("");
  var newArrLength = newArr.length;
  var arrNumberArray = [];
  for (i=0;i<newArrLength;i++)
    {
      for (k=0;k<26;k++)
          {
               var strThisLetter = newArr[i];
               if (strThisLetter === arrAlphabet[k])
                 {
                   var thisNumber = arrAlphabetValue[k];
                   var strThisNumber = thisNumber.toString();
                   arrNumberArray.push(strThisNumber);
                 } else {}
          }
    }
    return arrNumberArray;
}



// NUMBER FUNCTIONS
// Life Path
function lifePath()
{
  var strBirthYearNumber = reduce(strBirthYear);
  var strBirthMonthNumber = reduce(strBirthMonth);
  var strBirthDayNumber = reduce(strBirthDay);
  var strFirstAddition = strBirthYearNumber + strBirthMonthNumber + strBirthDayNumber;
  if (strFirstAddition >= 2)
    {
      if (strFirstAddition != 22)
        {
          if (strFirstAddition !=11)
            {
              var prepare = strFirstAddition.toString();
              var lifePath = addition(prepare);
              window.strLifePathNumber = lifePath;
              } else {
              var lifePath = 11;
              window.strLifePathNumber = lifePath;
              } 
       } else {
         var lifePath = 22;
         window.strLifePathNumber = lifePath;
       }
   } else {
      var lifePath = strFirstAddition;
      window.strLifePathNumber = lifePath;
    }
}

// Challenge Numbers
function challengeNumbers ()
{
    var strBirthYearNumber = reduce(strBirthYear);
    var strBirthMonthNumber = reduce(strBirthMonth);
    var strBirthDayNumber = reduce(strBirthDay);
    var challengeOne = strBirthDayNumber - strBirthMonthNumber;
    var challengeTwo = strBirthDayNumber - strBirthYearNumber;
    var challengeThree = challengeOne - challengeTwo;
    var challengeFour = strBirthYearNumber - strBirthMonthNumber;
    var arrChallengeNumbers = [challengeOne, challengeTwo, challengeThree, challengeFour];
    window.arrChallengeNumbers = arrChallengeNumbers;
}

// Pinnacle Numbers
function pinnacleNumbers ()
{
    var strBirthYearNumber = reduce(strBirthYear);
    var strBirthMonthNumber = reduce(strBirthMonth);
    var strBirthDayNumber = reduce(strBirthDay);
    var pinnacleOne = strBirthDayNumber + strBirthMonthNumber;
    var pinnacleTwo = strBirthDayNumber + strBirthYearNumber;
    var pinnacleThree = pinnacleOne + pinnacleTwo;
    var pinnacleFour = strBirthYearNumber + strBirthMonthNumber;
    var pinnacleOneNumber = addition(pinnacleOne.toString());
    var pinnacleTwoNumber = addition(pinnacleTwo.toString());
    var pinnacleThreeNumber = addition(pinnacleThree.toString());
    var pinnacleFourNumber = addition(pinnacleFour.toString());
    var arrPinnacleNumbers = [pinnacleOneNumber, pinnacleTwoNumber, pinnacleThreeNumber, pinnacleFourNumber];
    window.arrPinnacleNumbers = arrPinnacleNumbers;
}

// Special letters
function specialVowel()
{
    var strFirstNameLength = strFirstName.length;
    for (i=0;i<strFirstNameLength;i++)
    {
        var strThisLetter = strFirstName.substr(0+i,1);
        switch (strThisLetter)
        {
            case "a":
                window.strSpecialVowel = strThisLetter;
                return;
            case "e":
                window.strSpecialVowel = strThisLetter;
                return;
           case "i":
                window.strSpecialVowel = strThisLetter;
                return;
            case "o":
                window.strSpecialVowel = strThisLetter;
                return;
            case "u":
                window.strSpecialVowel = strThisLetter;
                return;
            case "_":
                window.strSpecialVowel = strThisLetter;
                return;
        }
    }
}
// Expression Number
function expressionNumber()
{
    var arrExpressionNumbers = lettersToNumbersString(strFullName);
    var strExpressionNumber = arrayAddTogether(arrExpressionNumbers);
    window.strExpressionNumber = strExpressionNumber;
}

// Heart's Desire Number
function heartsDesire()
{
    var arrHeartsDesireLetters = getVowels(strFullName);
    var turnToString = arrHeartsDesireLetters.join("");
    var arrHeartsDesireNumbers = lettersToNumbersString(turnToString);
    var strHeartsDesireNumber = arrayAddTogether(arrHeartsDesireNumbers);
    window.strHeartsDesireNumber = strHeartsDesireNumber;
}

// Personality Number
function personalityNumber()
{
    var arrPersonalityLetters = getConsonants(strFullName);
    var turnToString = arrPersonalityLetters.join("");
    var arrPersonalityNumbers = lettersToNumbersString(turnToString);
    var strPersonalityNumber = arrayAddTogether(arrPersonalityNumbers);
    window.strPersonalityNumber = strPersonalityNumber;
}

// Balance Number
function balanceNumber()
{
    var balanceLetters = strFirstLetterFirstName + strFirstLetterMiddleName + strFirstLetterLastName;
    var arrBalanceNumbers = lettersToNumbersString(balanceLetters);
    var strBalanceNumber = arrayAddTogether(arrBalanceNumbers);
    window.strBalanceNumber = strBalanceNumber;
}

// Maturity Number
function maturityNumber()
{
    var thisMaturityNumber = (strLifePathNumber + strExpressionNumber).toString();
    var strMaturityNumber = addition(thisMaturityNumber);
    window.strMaturityNumber = strMaturityNumber;
}

// Subconscious Self
function subconsciousSelf ()
{
    var arrAllNumbers = new Array();
    var arrPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var objNumberValues = new Object();
    
    var strFullNameLength = strFullName.length;
    var arrFullNameNumbers = lettersToNumbersString(strFullName);
    for (i=0;i<strFullNameLength;i++)
    {
        var strThisNumber = arrFullNameNumbers[i];
        for (k=0;k<9;k++)
        {
            var checkThisNumber = arrPossible[k];
            if (strThisNumber == checkThisNumber)
            {
                objNumberValues[strThisNumber] = "y";
            } else {
            }
        }
    }
    var strSubconciousSelf = Object.keys(objNumberValues).length;
    window.strSubconsciousSelfNumber = strSubconciousSelf;
}

// Rational Thought 
function rationalThought()
{
    var arrFirstNameNumbers = lettersToNumbersString(strFirstName);
    var oneFirstNameNumber = arrayAddTogether(arrFirstNameNumbers);
    var rationalThought = oneFirstNameNumber + strBirthDay;
    var strRationalThoughtNumber = reduce(rationalThought);
    window.strRationalThoughtNumber = strRationalThoughtNumber;
}

// Life chart
function lifeChart()
{   
    //TRANSIT NUMBERS
    // Create name objects
    var arrFirstName = new Array();
    var arrMiddleName = new Array();
    var arrLastName = new Array();
    var arrFirstNameNumbers = new Array();
    var arrMiddleNameNumbers = new Array();
    var arrLastNameNumbers = new Array();
    
    // Create arrays
    var arrNames = [strFirstName, strMiddleName, strLastName];
    var arrArrays = [arrFirstName, arrMiddleName, arrLastName];
    var arrNameNumbers = [arrFirstNameNumbers, arrMiddleNameNumbers, arrLastNameNumbers];
    var arrAddThis = [];

    // Check and set up further arrays
    for (j=0;j<3;j++)
    {
        var thisArray = arrArrays[j];
        var thisNumberArray = arrNameNumbers[j]
        var strThisName = arrNames[j];
        var arrThisName = strThisName.split("");
        var thisNameLength = arrThisName.length;
        
        for (i=0;i<thisNameLength;i++)
            {
                var strThisLetter = arrThisName[i];
                for (k=0;k<26;k++)
                  {
                       if (strThisLetter === arrAlphabet[k])
                         {
                           var thisNumber = arrAlphabetValue[k];
                           var strThisNumber = thisNumber.toString();
                             thisArray.push(strThisLetter);
                             thisNumberArray.push(strThisNumber);
                         } else {}
                  }
            }

        // Print transit
        thisArrayLength = thisArray.length;
        var arrShortTransit = [];
        var arrShortTransitNumbers = [];
        for (l=0;l<thisArrayLength;l++)
        {
            var thisLetter = thisArray[l];
            var thisNumber = thisNumberArray[l];
            for (k=0;k<thisNumber;k++)
            {
                arrShortTransit.push(thisLetter);
                arrShortTransitNumbers.push(thisNumber);
            }
        }
        var arrShortTransitLength = arrShortTransit.length;
        var timesToRepeat = (110 / arrShortTransitLength);
        for (i=0;i<timesToRepeat;i++)
        {
            appendThis(arrShortTransit, "Physical Transit #: ");
        }
    }
    
    // Essence number
    // Grab the arrNameNumbers and add them up up to the end of the chart
    // Make each number, as it passes through iteration, get placed into an array with the other numbers related to it vertically, then add them together and print it after they each go through
    
    // Karmic Debt
    // Do like subconscious self; check numbers in name, put them into object with all numbers already there. They can overwrite, but I need them to count as well (+=?)
    
    // Personal Year
    
    // Period Cycle
}

// NUMEROLOGICALLY

function numerologically() 
{
    // First get the fields, store them, and group them
    formatFieldsAndStore();
    defineDates(strBirthday);
    
    // Execute functions for each number
    lifePath();
    expressionNumber();
    heartsDesire();
    personalityNumber();
    balanceNumber();
    maturityNumber();
    subconsciousSelf();
    rationalThought();
    challengeNumbers();
    pinnacleNumbers();
    specialVowel();
    // lifeChart();
    
    // Show numbers to the user
    appendThis(strBirthday, "Birthday: ");
    appendThis(strBirthYear, "Birth Year: ");
    appendThis(strBirthMonth, "Birth Month: ");
    appendThis(strBirthDay, "Birth Day: ");
    appendThis(strFullName, "Full Name: ");
    appendThis(strFirstName, "First Name: ");
    appendThis(strMiddleName, "Middle Name: ");
    appendThis(strLastName, "Last Name: ");
    appendThis(strLifePathNumber, "Life Path: ");
    appendThis(strExpressionNumber, "Expression Number: ");
    appendThis(strHeartsDesireNumber, "Heart's Desire Number: ");
    appendThis(strPersonalityNumber, "Personality Number: ");
    appendThis(strBalanceNumber, "Balance Number: ");
    appendThis(strMaturityNumber, "Maturity Number: ");
    appendThis(strSubconsciousSelfNumber, "Subconscious Self Number: ");
    appendThis(strRationalThoughtNumber, "Rational Thought Number: ");
    appendThis(arrChallengeNumbers, "Challenge Numbers: ");
    appendThis(arrPinnacleNumbers, "Pinnacle Numbers: ");
    appendThis(strFirstLetterFirstName, "Cornerstone: ");
    appendThis(strLastLetterFirstName, "Capstone: ");
    appendThis(strSpecialVowel, "Special Vowel: ");
    
}

// USEFUL SHORTCUT FUNCTIONS
function alertThis(str)
{
  alert(str);
}
function appendThis(str,numberName)
{
  var maindiv = document.getElementById("output");
  var newHThree = document.createElement("h3");
  var newHThreeText = document.createTextNode(numberName + str);
  newHThree.appendChild(newHThreeText);
  maindiv.appendChild(newHThree);
}

// Notes:
// Latest update, now I have all the necessary variables: birth year, birth month, birth day, name whole, name firstletter, name lastletter, name vowels, name consonants
// Needs: support for different keyboards, accents, etc
// NEXT: karmic debt chart. 

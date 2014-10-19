// FORMAT DATA
    // Lowercase, remove dashes, remove spaces
    // Need to change accents to corresponding characters, remove strange characters
    function formatString(str) {
          var lowerCase = str.toLowerCase();
          var noDashes = lowerCase.replace(/-/g, "");
          return noDashes.trim();
        }

    // Conversion into number as string
    function conversionToNumbers(str) {
        var alphabetKey = {
            "a":"1", "b":"2", "c":"3", "d":"4", "e":"5", "f":"6", "g":"7", "h":"8", "i":"9", "j":"1", "k":"2", "l":"3", "m":"4", "n":"5", "o":"6", "p":"7", "q":"8", "r":"9", "s":"1", "t":"2", "u":"3", "v":"4", "w":"5","x":"6","y":"7","z":"8","_":"7"
        }
        var strLength = str.length;
        var numberStr = "";
        for (i=0;i<strLength;i++) {
            for (letter in alphabetKey) {
                if (letter === str.substr(i,1)) {
                   numberStr += alphabetKey[letter];
                }
            }
        }
        return numberStr;
    }

// CREATE OBJECTS
    // Create AllBirthday object
    function makeAllBirthday() {
        
            var allBirthday = {
            };
        return allBirthday;
    }
    // Create AllNames object
function makeAllNames() {
    var fullBirthday = formatString(document.forms.numerologicalForm["Birthday"].value);
    var formattedName = formatString(document.forms.numerologicalForm["FullName"].value);
    var split = formattedName.split(" ");
    var firstName   = split[0].toString();
    var middleName = split[1].toString();
    // Putting together any extra middle names
    if (split.length>3) {
        for (i=2; i<split.length-1;i++) {
            var middleName = middleName + split[i].toString();
        }
    }
    console.log(middleName);
    var lastName    = split[split.length-1].toString();
    var birthYear    = fullBirthday.substr(0,4);
    var birthMonth   = fullBirthday.substr(4,2);
    var birthDay     = fullBirthday.substr(6,2);
    var firstNum    = conversionToNumbers(firstName);
    var middleNum   = conversionToNumbers(middleName);
    var lastNum     = conversionToNumbers(lastName);
    var allNames = {
        "birthDay"          : birthDay,
        "birthMonth"        : birthMonth,
        "birthYear"         : birthYear,
        "firstName"         : firstName,
        "middleName"        : middleName,
        "lastName"          : lastName,
        "firstNum"          : firstNum,
        "middleNum"         : middleNum,
        "lastNum"           : lastNum,
        
        // CHART CALCULATION METHODS
        // BIRTHDAY CALCULATIONS
        // Life Path (Birth day + month + year) (not reduced)
        "lifePath"          : function() {
                                    var notReducedBirthDay = notReduce(this.birthDay);
                                    var notReducedBirthMonth = notReduce(this.birthMonth);
                                    var notReducedBirthYear = notReduce(this.birthYear);
                                    var lifePathNumber = notReduce(notReducedBirthDay
                                                                       + notReducedBirthMonth
                                                                       + notReducedBirthYear);
                                    return lifePathNumber;
                              },
        // Challenges (BD-BM,BD-BY,C1-C2,BY-BM) (reduced)
        "challenges"          : function() {
                                    var challengeOne = reduceAll(this.birthDay) - reduceAll(this.birthMonth);
                                    var challengeTwo = reduceAll(this.birthDay) - reduceAll(this.birthYear);
                                    var challengeThree = challengeOne - challengeTwo;
                                    var challengeFour = reduceAll(this.birthYear) - reduceAll(this.birthMonth);
                                    var challengeNumbers = {
                                        "challengeOne"      : challengeOne,
                                        "challengeTwo"      : challengeTwo,
                                        "challengeThree"    : challengeThree,
                                        "challengeFour"     : challengeFour
                                    }
                                    return challengeNumbers;
                                },
        // Pinnacles (BD+BM,BD+BY,C1+C2,BY+BM) (reduced)
        "pinnacles"          : function() {
                                    var pinnacleOne = reduceAll(this.birthDay) + reduceAll(this.birthMonth);
                                    var pinnacleTwo = reduceAll(this.birthDay) + reduceAll(this.birthYear);
                                    var pinnacleThree = pinnacleOne + pinnacleTwo;
                                    var pinnacleFour = reduceAll(this.birthYear) + reduceAll(this.birthMonth);
                                    var pinnacleNumbers = {
                                        "pinnacleOne"      : reduceAll(pinnacleOne),
                                        "pinnacleTwo"      : reduceAll(pinnacleTwo),
                                        "pinnacleThree"    : reduceAll(pinnacleThree),
                                        "pinnacleFour"     : reduceAll(pinnacleFour)
                                    }
                                    return pinnacleNumbers;
                                },

        // NAME CALCULATIONS
        // Expression (Full name) (not reduced)
        "expression"           : function() {
                                    var notReducedFirstNum = notReduce(this.firstNum);
                                    var notReducedMiddleNum = notReduce(this.middleNum);
                                    var notReducedLastNum = notReduce(this.lastNum);
                                    var expressionNumber = notReduce(notReducedFirstNum
                                                                       + notReducedMiddleNum
                                                                       + notReducedLastNum);
                                    return expressionNumber;
        },

        // Heart's Desire (vowels in full name) (not reduced)
        "heartsDesire"           : function() {
                                    var firstNameVowels = returnVowelsOrConsonants(this.firstName, "vowels");
                                    var middleNameVowels = returnVowelsOrConsonants(this.middleName, "vowels");
                                    var lastNameVowels = returnVowelsOrConsonants(this.lastName, "vowels");
                                    var fullNameVowels = firstNameVowels + middleNameVowels + lastNameVowels;
                                    var fullNumVowels = conversionToNumbers(fullNameVowels);
                                    var heartsDesireNumber = notReduce(fullNumVowels);
                                    return heartsDesireNumber;
        },
        
        // Personality (consonants in full name) (not reduced)
        "personality"           : function() {
                                    var firstNameConsonants = returnVowelsOrConsonants(this.firstName, "consonants");
                                    var middleNameConsonants = returnVowelsOrConsonants(this.middleName, "consonants");
                                    var lastNameConsonants = returnVowelsOrConsonants(this.lastName, "consonants");
                                    var fullNameConsonants = firstNameConsonants + middleNameConsonants + lastNameConsonants;
                                    var fullNumConsonants = conversionToNumbers(fullNameConsonants);
                                    var personalityNumber = notReduce(fullNumConsonants);
                                    return personalityNumber;
        },

        // ???? Balance (first letter of each name) (reduced???)
        "balance"           : function() {
                                    var firstNameFirstLetter = this.firstName.substr(0,1);
                                    var middleNameFirstLetter = this.middleName.substr(0,1);
                                    var lastNameFirstLetter = this.lastName.substr(0,1);
                                    var allFirstLetters = firstNameFirstLetter + middleNameFirstLetter + lastNameFirstLetter;
                                    var allFirstNumbers = conversionToNumbers(allFirstLetters);
                                    var balanceNumber = notReduce(allFirstNumbers);
                                    return balanceNumber;
        },
                   
    };
    document.getElementById("output").innerHTML = "Life Path Number: " + allNames.lifePath() + "<br>"
                                                + "Expression Number: " + allNames.expression() + "<br>"
                                                + "Heart's Desire Number: " + allNames.heartsDesire() + "<br>"
                                                + "Personality Number: " + allNames.personality() + "<br>"
                                                + "Challenges: " + allNames.challenges().challengeOne + ", " + allNames.challenges().challengeTwo + ", " + allNames.challenges().challengeThree + ", " + allNames.challenges().challengeFour + "<br>"
                                                + "Pinnacles: " + allNames.pinnacles().pinnacleOne + ", " + allNames.pinnacles().pinnacleTwo + ", " + allNames.pinnacles().pinnacleThree + ", " + allNames.pinnacles().pinnacleFour + "<br>"
}

        // Subconscious Self (number of different numbers represented in your name)
        
        // MIXTURE CALCULATIONS

            // Maturity (Life Path + Expression) (reduced?)

            // Rational Thought (first name + birth day) (reduced?)

// HELPER FUNCTIONS
    // Addition of a string of numbers
    function addition(str) {
        if (str.length >= 2) {
            string = str.split('');                 
            var sum = 0;                               
            for (i=0;i<str.length;i++) {  
                sum += +str[i];        
            }
            return sum.toString();
        } else {
            return str;
        } 
    }
    
    // Reduce to one digit in all cases
    function reduceAll(str) {
        if (str.length >= 2) {
            var strAdded = addition(str);
            var stringLength = strAdded.toString().length;
            if (stringLength >= 2)
              {
                var prepare = strAdded.toString();
                var reduction = addition(prepare);
                return reduction;
              } else {
                var reduction = strAdded;
                return reduction;
              }
        } else {
            return str;
        } 
    }

    // Reduce to one digit unless 11 or 22
    function notReduce(str) {
        if (str.length >= 2) {
            switch (str) {
                case '22':
                    return '22';
                    break;
                case '11':
                    return '11';
                    break;
                default:
                    strAdded = addition(str);
                    if (strAdded.length >= 2) {
                        var strAdded = notReduce(strAdded);
                    }
                    return strAdded;
                    break;
            }
        } else {
            return str;
        } 
    }

    // Return all vowels or consonants of string
    function returnVowelsOrConsonants(str,vowelsOrConsonants) {
      var strLength = str.length;
      var returnedLetters = "";
      var letter = "";
      if (vowelsOrConsonants === "vowels") {
          for (i=0;i<strLength;i++) {
          letter = str.substr(0+i,1);
              if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "_") {
                returnedLetters += letter;
              }
          }
       } else if (vowelsOrConsonants === "consonants") {
           for (i=0;i<strLength;i++) {
          letter = str.substr(0+i,1);
              if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u" && letter !== "_") {
                returnedLetters += letter;
              }
            }
       } else {
           var returnedLetters = "Please enter 'vowels' or 'consonants'!";
           return returnedLetters;
       }
       return returnedLetters;
    }

// Run
function numerologically() {
    var allBirthday = makeAllBirthday();
    var allNames = makeAllNames();
}
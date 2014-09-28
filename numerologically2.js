// FORMAT DATA
    // Lowercase, remove dashes, remove spaces
    function formatString(str) {
          var lowerCase = str.toLowerCase();
          var noDashes = lowerCase.replace(/-/g, "");
          var formattedThing = noDashes.replace(" ","");
          return formattedString = formattedThing.toString();
        }

    // Conversion into numbers
    function conversionToNumbers(str) {
        var arrAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","_"];
        var arrAlphabetValue = ["1","2","3","4","5","6","7","8","9","1","2","3","4","5","6","7","8","9","1","2","3","4","5","6","7","8","7"];
        var strLength = str.length;
        var numberStr = "";
        for (i=0;i<strLength;i++)
        {
          for (k=0;k<26;k++)
              {
                   var strThisLetter = str.substr(i,1);
                   if (strThisLetter === arrAlphabet[k])
                     {
                       var thisNumber = arrAlphabetValue[k].toString();
                       numberStr += thisNumber;
                     }
              }
        }
        return numberStr;
    }

// DEFINE OBJECTS
    // AllBirthday object
    function AllBirthday(birthDay,birthMonth,birthYear) {
        this.birthDay   = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear  = birthYear;
    }

    // AllNames object (6 properties)
    function AllNames(firstName, middleName, lastName, firstNum, middleNum, lastNum) {
        this.firstName  = firstName;
        this.middleName = middleName;
        this.lastName   = lastName;
        this.firstNum   = firstNum;
        this.middleNum  = middleNum;
        this.lastNum    = lastNum;
    }

// CREATE OBJECTS
    // Create AllBirthday object
    function makeAllBirthday() {
        var fullBirthday = formatString(document.forms.numerologicalForm["Birthday"].value);
        var birthYear    = fullBirthday.substr(0,4);
        var birthMonth   = fullBirthday.substr(4,2);
        var birthDay     = fullBirthday.substr(6,2);
        // Instantiate object
        var allBirthday = {
            "birthDay"  : birthDay,
            "birthMonth": birthMonth,
            "birthYear" : birthYear
        };
        return allBirthday;
    }
    // Create AllNames object
    function makeAllNames() {
        var firstName   = formatString(document.forms.numerologicalForm["FirstName"].value);
        var middleName  = formatString(document.forms.numerologicalForm["MiddleName"].value);
        var lastName    = formatString(document.forms.numerologicalForm["LastName"].value);
        var firstNum    = conversionToNumbers(firstName);
        var middleNum   = conversionToNumbers(middleName);
        var lastNum     = conversionToNumbers(lastName);
        // Instantiate object
        var allNames = {
            "firstName" : firstName,
            "middleName": middleName,
            "lastName"  : lastName,
            "firstNum"  : firstNum,
            "middleNum" : middleNum,
            "lastNum"   : lastNum
        };
        return allNames;
    }

// Individual number calculations and storage as lifeChart object

// Helper functions
// Reduce

// Run
function numerologically() {
    var allBirthday = makeAllBirthday();
    var allNames = makeAllNames();
    alert(allNames.lastNum + " " + allBirthday.birthDay);
}
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
        var fullBirthday = formatString(document.forms.numerologicalForm["Birthday"].value);
        var birthYear    = fullBirthday.substr(0,4);
        var birthMonth   = fullBirthday.substr(4,2);
        var birthDay     = fullBirthday.substr(6,2);
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

// HELPERS
    // Addition of a string of numbers
    function addition(str) {
        string = str.split('');                 
        var sum = 0;                               
        for (i=0;i<str.length;i++) {  
            sum += +str[i];        
        }
        return sum.toString();                                
    }
    
    // Reduce to one digit in all cases
    function reduceAll(str) {
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
    }

    // Reduce to one digit unless 11 or 22
    function reduce(str) {
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
                        var strAdded = reduce(strAdded);
                    }
                    return strAdded;
                    break;
            }
        } else {
            return str;
        } 
    }

// Run
function numerologically() {
    var allBirthday = makeAllBirthday();
    var allNames = makeAllNames();
    var thisThing2 = reduce('99999992');
    alert(thisThing2);
}
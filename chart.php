<?php 
    $obj = json_decode($_POST['allResults']);
    // Declare variables
    $birthDay = $obj->birthDay;
    $birthMonth = $obj->birthMonth;
    $birthYear = $obj->birthYear;
    $firstName = $obj->firstName;
    $middleName = $obj->middleName;
    $lastName = $obj->lastName;
    $firstNum = $obj->firstNum;
    $middleNum = $obj->middleNum;
    $lastNum = $obj->lastNum;
    $lifePath = $obj->lifePath;
    $expression = $obj->expression;
    $heartsDesire = $obj->heartsDesire;
    $personality = $obj->personality;
    $challengeOne = $obj->challengeOne;
    $challengeTwo = $obj->challengeTwo;
    $challengeThree = $obj->challengeThree;
    $challengeFour = $obj->challengeFour;
    $pinnacleOne = $obj->pinnacleOne;
    $pinnacleTwo = $obj->pinnacleTwo;
    $pinnacleThree = $obj->pinnacleThree;
    $pinnacleFour = $obj->pinnacleFour;
    echo $middleNum + "<br />";
    echo $lastNum;
?>

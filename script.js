$(function() {

    console.log("document is ready!");

    var userStr, userStrLength, strMsg, revStr, letThird, strPos, = "";

    $('submitBtn').click(function() {
        userStr = $('#userStr').val();

        userStrLength = getStrLength(userStr);
        strMsg = "The length of your input is...";
        $('strOutput').html(strMsg + userStrLength + "<br/>");

        revStr = reverseStr(userStr);
        strMsg = "Your input reversed is...";
        $('strOutput').append(strMsg + revStr + "</br>");

        letThird = thirdLet(userStr);
        strMsg = "Your third letter is...";
        $('strOutput').append(strMsg + letThird + "</br>");

        strPos = strArrayPos(userStr);
        strMsg = "The position is...";
        $('strOutput').append(strMsg + strPos + "</br>");

        revStr = reverseStr(userStr);
        strMsg = "All capital...";
        $('strOutput').append(strMsg + revStr + "</br>");


    });

    $('clearBtn').click(function(){
        clearElement("#strOutput", "html");
        clearElement("#userStr", "input");

    })


    function getStrLength(strVal) {
        var strLength = strVal.length;
        return strLength;
    }

    function reverseStr(strVal) {
        var revStr = strVal.split("").reverse().join("");
        return revStr;
    }

    function thirdLet(strVal) {
        var thirdStr =strVal [2];
        return thirdStr; 
    }

    function clearMsg(elementId, elementType) {
        if(elementType == "html") {
            $(elementId).html(" ");
        }
        else if (elementType=="input") {
            $(elementId).val(" ");
        }
    }

    function strArrayPos(strVal) {
        for (i=0; i<strVal.length; i++) {
            console.log(i + " " + strVal[i]);
        }

    function allUpper(strVal){
        var upperCaseStr = strVal.toUpperCase();
        return upperCaseStr;

    }


}

});

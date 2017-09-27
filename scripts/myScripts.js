function updateTextInput(val) {
    document.getElementById('textInput').value = val;
}

function enterFName() {
    var returnValue = true;
    var fname = document.getElementById("fname");
    if (fname.value != "") {
        fname.style.borderColor = "white";
    }
    return returnValue;
}

function enterLName() {
    var returnValue = true;
    var lname = document.getElementById("lname");
    if (lname.value != "") {
        lname.style.borderColor = "white";
    }
    return returnValue;
}

function enterEmail() {
    var returnValue = true;
    var email = document.getElementById("email");
    if (email.value != "") {
        email.style.borderColor = "white";
    }
    return returnValue;
}

function enterYears() {
    var returnValue = true;
    var years = document.getElementById("years");
    if (years.value != "") {
        years.style.borderColor = "white";
    }
    return returnValue;
}



function validateSubmit() {
    var returnValue = true;
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var years = document.getElementById("years");
    var east = document.getElementById("east");
    var west = document.getElementById("west");
    var north = document.getElementById("north");
    var south = document.getElementById("south");
    var range = document.getElementById("range");
    var txtInput = document.getElementById("textInput");
    var gender = document.getElementById("gender");


    if (fname.value == "") {
        fname.style.borderColor = "red";
        returnValue = false;
    } else {
        fname.style.borderColor = "white";
    }

    if (lname.value == "") {
        lname.style.borderColor = "red";
        returnValue = false;
    } else {
        lname.style.borderColor = "white";
    }


    if (isNaN(years.value) || years.value < 1 || years.value > 10) {
        years.style.borderColor = "red";
        returnValue = false;
    } else {
        years.style.borderColor = "white";
    }

    var atpos = email.value.indexOf("@");
    var dotpos = email.value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.value.length) {
        email.style.borderColor = "red";
        returnValue = false;
    }


    document.getElementById('firstN').innerHTML =
        document.getElementById("fname").value;
    document.getElementById('lastN').innerHTML =
        document.getElementById("lname").value;
    document.getElementById('emailL').innerHTML =
        document.getElementById("email").value;
    document.getElementById('YearsL').innerHTML =
        document.getElementById("years").value;
  parent.scrollTo(0, 0);
    return returnValue;
}

function setVisibility(id) {
    var returnValue = true;
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var years = document.getElementById("years");
    if(fname.value=="" || lname.value=="" || email.value=="" || years.value==""){

    }else{

      document.getElementById("main").setAttribute("style","height:1250px");
        document.getElementById("body").setAttribute("style","height:1250px");
      if (document.getElementById("bt1").value == "Hide Layer") {
          document.getElementById("bt1").value = "Submit";
          document.getElementById(id).style.display = 'none';
      } else {
          document.getElementById("bt1").value = "Submit";
          document.getElementById(id).style.display = "inline";
      }

    }


}

function formReset() {
    parent.scrollTo(0, 0);
    location.href = "index.html";
    var fname = document.getElementById("fname").focus();
}

/*
Name: Jason Le
Date created: Feb 9th, 2025
Date last edited: Apr 12th, 2025
Version: 2.1
Description: Homework 2.5 JavaScript
*/

alert("JavaScript is working!");

// Display today's date
var d = new Date();
var text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// Slider behavior
var slider = document.getElementById("range");
var output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

// Toggle form views (unused but included if needed later)
function editForm() {
    document.getElementById("pokiForm").style.display = "block";
    document.getElementById("reviewPage").style.display = "none";
}

function submitForm() {
    window.location.href = "thankyou.html";
}

// Validate ZIP code (if ZIP input used)
function validatezipcode() {
    var zipInput = document.getElementById("zipcode");
    var zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zipcode-error").innerHTML = "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// Validate DOB
function validateDob() {
    var dob = document.getElementById("dob");
    var date = new Date(dob.value);
    var maxDate = new Date().setFullYear(new Date().getFullYear() - 115);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date can't be more than 115 years ago";
        dob.value = "";
        return false;
    }

    document.getElementById("dob-error").innerHTML = "";
    return true;
}

// Validate SSN
function validateSsn() {
    var ssn = document.getElementById("SSN").value;
    var ssnR = /^\d{9}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("SSN-error").innerHTML = "Please enter a valid 9-digit SSN";
        return false;
    }

    document.getElementById("SSN-error").innerHTML = "";
    return true;
}

// Validate Email
function validateEmail() {
    var email = document.getElementById("Email").value;
    var regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;

    if (email.trim() === "") {
        document.getElementById("uid-error").innerHTML = "Email cannot be blank";
        return false;
    }

    if (!regex.test(email)) {
        document.getElementById("uid-error").innerHTML = "Enter a valid email address";
        return false;
    }

    document.getElementById("uid-error").innerHTML = "";
    return true;
}

// Validate Phone Number
function validatePnum() {
    var phonenum = document.getElementById("Pnum").value;
    var cleaned = phonenum.replace(/\D/g, '');

    if (cleaned === "") {
        document.getElementById("SSN-error").innerHTML = "Phone number cannot be blank.";
        return false;
    }

    if (cleaned.length !== 10) {
        document.getElementById("SSN-error").innerHTML = "Please enter a valid 10-digit phone number.";
        return false;
    }

    var formattedPhonenum = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    document.getElementById("Pnum").value = formattedPhonenum;
    document.getElementById("SSN-error").innerHTML = "";
    return true;
}

// Validate User ID
function validateUid() {
    var uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length === 0) {
        document.getElementById("uid-error").innerHTML = "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = "User ID can't start with a number";
        return false;
    }

    var regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = "Only letters, numbers, underscores, and dashes allowed";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = "Minimum 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = "Maximum 30 characters";
        return false;
    }

    document.getElementById("uid-error").innerHTML = "";
    return true;
}

// Validate Password
function validatepword() {
    var pword = document.getElementById("pword").value;
    var uid = document.getElementById("uid").value;
    var errorMessage = [];

    if (!pword.match(/[0-9]/)) errorMessage.push("1 number");
    if (!pword.match(/[a-z]/)) errorMessage.push("1 lowercase letter");
    if (!pword.match(/[A-Z]/)) errorMessage.push("1 uppercase letter");
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("1 special character");
    if (pword.includes(uid)) errorMessage.push("Can't contain user ID");

    if (errorMessage.length > 0) {
        document.getElementById("pword-error").innerHTML = "Password must include: " + errorMessage.join(", ");
        return false;
    }

    document.getElementById("pword-error").innerHTML = "";
    return true;
}

// Confirm Password Match
function confirmpword() {
    var pword1 = document.getElementById("pword").value;
    var pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = "Passwords don't match";
        return false;
    }

    document.getElementById("pword2-error").innerHTML = "Passwords match";
    return true;
}

// Review form inputs
function reviewInput() {
    var formcontent = document.getElementById("signup-form");
    var formoutput = "<table class='output'><th colspan='2'>Review Your Information:</th>";

    for (var i = 0; i < formcontent.length; i++) {
        var elem = formcontent.elements[i];
        if (elem.type === "submit" || elem.type === "reset" || elem.type === "button") continue;
        if ((elem.type === "checkbox" || elem.type === "radio") && !elem.checked) continue;

        if (elem.value !== "") {
            formoutput += "<tr><td>" + elem.name + "</td><td>" + elem.value + "</td></tr>";
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

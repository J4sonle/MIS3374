/*
Name: Jason Le
Date created: Feb 9th, 2025
Date last edited: Feb 9th, 2025
Version: 2.0
Description: Homework 1 JS 
*/

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};


function editForm() {
    // Go back to editing form
    document.getElementById("pokiForm").style.display = "block";
    document.getElementById("reviewPage").style.display = "none";
}

function submitForm() {
    // Redirect to Thank You page after confirming
    window.location.href = "thankyou.html";
}




function validatezipcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zipcode-error").innerHTML = 
        "Zip code can't be blank";
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

function validatedob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 115);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }

}

function validatessn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail(email) {
    if (email.trim() === "") {
        console.log("Email cannot be blank.");
        return false;
    }
    if (!emailR.test(email)) {
        console.log("Please enter a valid email address.");
        return false;
    }
    return true;
}

let cleaned = phonenum.replace(/\D/g, ''); {

    if (cleaned === "") {
        console.log("Phone number cannot be blank.");
        return false;
    }
    if (cleaned.length !== 10) {
        console.log("Please enter a valid 10-digit phone number.");
        return false;
    }
    let formattedPhonenum = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    console.log("Formatted Phone Number:", formattedPhonenum);

    return formattedPhone;
}
function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

function validatePassword(pword, uid) {
    let errorMessage = [];

    if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
    if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
    if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
    if (pword.includes(uid)) errorMessage.push("Password can't contain user ID");

    if (errorMessage.length > 0) {
        console.log("Password validation failed:\n" + errorMessage.join("\n"));
        return false;
    }

    console.log("Password is valid!");
    return true;
}

function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//dyanmic date & slider javascript code credit: Yulia Gorenshteyn (MISSO)//
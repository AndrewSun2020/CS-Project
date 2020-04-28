function checkConstellation() {
    var month = prompt("Please enter what month is your birthday? For example, if your birthday is at 18 May, please enter'5' ");
    var day = prompt("please enter what day is your birthday? For example, if your birthday is at 18 May, please enter'18' ");
    if (month == 1) {
        if (day < 32 && day > 19) {
            alert("Your sign is Aquarius.");
        }
        else if (day <= 19) {
            alert("Your sign is Capricorn.");
        }
    }
    else if (month == 2) {
        if (day < 30 && day > 18) {
            alert("Your sign is Pisces.");
        }
        else if (day <= 18) {
            alert("Your sign is Aquarius.");
        }
    }
    else if (month == 3) {
        if (day < 32 && day > 20) {
            alert("Your sign is Aries.");
        }
        else if (day <= 20) {
            alert("Your sign is Pisces.");
        }
    }
    else if (month == 4) {
        if (day < 31 && day > 20) {
            alert("Your sign is Taurus .");
        }
        else if (day <= 20) {
            alert("Your sign is Aries.");
        }
    }
    else if (month == 5) {
        if (day < 32 && day > 20) {
            alert("Your sign is Gemini.");
        }
        else if (day <= 20) {
            alert("Your sign is Taurus .");
        }
    }
    else if (month == 6) {
        if (day < 31 && day > 21) {
            alert("Your sign is Cancer.");
        }
        else if (day <= 21) {
            alert("Your sign is Gemini.");
        }
    }
    else if (month == 7) {
        if (day < 32 && day > 22) {
            alert("Your sign is Leo.");
        }
        else if (day <= 22) {
            alert("Your sign is Cancer.");
        }
    }
    else if (month == 8) {
        if (day < 32 && day > 22) {
            alert("Your sign is Virgo.");
        }
        else if (day <= 22) {
            alert("Your sign is Leo.");
        }

    }
    else if (month == 9) {
        if (day < 31 && day > 22) {
            alert("Your sign is Libra.");
        }
        else if (day <= 22) {
            alert("Your sign is Virgo.");
        }
    }
    else if (month == 10) {
        if (day < 32 && day > 22) {
            alert("Your sign is Scorpio.");
        }
        else if (day <= 22) {
            alert("Your sign is Libra.");
        }
    }
    else if (month == 11) {
        if (day < 31 && day > 21) {
            alert("Your sign is Sagittarius.");
        }
        else if (day <= 21) {
            alert("Your sign is Scorpio.");
        }
    }
    else if (month == 12) {
        if (day < 31 && day > 21) {
            alert("Your sign is Capricorn.");
        }
        else if (day <= 21) {
            alert("Your sign is Sagittarius.");
        }
    }
    else { alert("Please type the month and date") }
};
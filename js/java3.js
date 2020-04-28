function getNumber() {
    var N = prompt('How many people participated in the draw?');
    var T = prompt('How many winners do you want to choose?');
    var result = isNaN(N + T) ? 'Please type numbers' : 'Click confirm please';

    if (result == 'Please type numbers'||N==null||T==null) {
        alert("Please try again ");
    }
    else if (result = "Click confirm please") {
        for (var i = 1; i <= T; i++) {
            alert('Prize ' + i + ' is for the person who get number ' + parseInt(Math.random() * N + 1));
        }
    }
}
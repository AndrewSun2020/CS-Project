function preCheck() {
    var far = prompt("Please enter Fahrenheit degree.");
    if (far ==null) { alert("Sorry, you typed nothing") }
    else { degreeChange()
        function degreeChange() {

            var result = isNaN(far) ? 'Please do not enter characters:(' : 'Click confirm to do exchange please';
            var cel = (far - 32) / 1.8;
            alert(result)
            if (result == 'Click confirm to do exchange please') {
                alert(far + " fahrenheit degree is" + " " + Math.round(cel) + " celsius");
            }
            else if (result == 'Please do not enter characters:(') {
                alert("Please type a number");
            }
        }
    }
}
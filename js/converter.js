let formElement = document.getElementById("temperature-form");
let inputElement = document.getElementById("user-input");
let originScaleElement = document.getElementById("origin-scale");
let destinationScaleElement = document.getElementById("destination-scale");
let outputElement = document.querySelector("output");

function temperatureConverter(number, originScale, destinationScale) {
    if(originScale === destinationScale)
        return number + " " + originScale.toUpperCase();

    if(originScale === "c") {
        if(destinationScale === "f") {
            number = number * 9/5 + 32;
            return number + " F";
        }
        else if(destinationScale === "k") {
            number = number + 273.15;
            return number + " K";
        }
    }
    else if(originScale === "f") {
        if(destinationScale === "c") {
            number = (number - 32) * 5/9;
            return number + " C";
        }
        else if(destinationScale === "k") {
            number = (number - 32) * 5/9 + 273.15;
            return number + " K";
        }
    }
    else if(originScale === "k") {
        if(destinationScale === "c") {
            number = number - 273.15;
            return number + " K";
        }
        else if(destinationScale === "f") {
            number = (number - 273,15) * 9/5 + 32;
            return number + " F";
        }
    }
    return "Invalid parameters for conversion";
}

formElement.addEventListener("input", () => {
    let output = temperatureConverter(parseInt(inputElement.value), originScaleElement.value, destinationScaleElement.value);
    outputElement.innerHTML = output;
});

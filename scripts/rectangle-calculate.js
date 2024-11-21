// function calculateRectangleArea() {
//     const rectangleWidthInput = document.getElementById('rectangle-width');
//     const rectangleWidth = parseFloat(rectangleWidthInput.value);
    
//     const rectangleLengthInput = document.getElementById('rectangle-length');
//     const rectangleLength = parseFloat(rectangleLengthInput.value);

//     const area = rectangleWidth * rectangleLength;

//     const rectangleArea = document.getElementById('rectangle-area');
//     rectangleArea.innerText = area;
// }

document.getElementById('rectangle-div').addEventListener('mouseover', function () {
    const rectangleDiv = document.getElementById('rectangle-div');
    rectangleDiv.style.backgroundColor = '#ff91ad';
});

document.getElementById('rectangle-div').addEventListener('mouseout', function () {
    const rectangleDiv = document.getElementById('rectangle-div');
    rectangleDiv.style.backgroundColor = '#fff';
});

function calculateRectangleArea() {
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');

    const area = rectangleWidth * rectangleLength;

    setAreaValueById('rectangle-area', area);

}

function getInputValueById(inputValue) {
    const givenValueText = document.getElementById(inputValue);
    const givenValue = parseFloat(givenValueText.value);
    return givenValue;
}

function setAreaValueById(inputValue, area) {
    const rectangleArea = document.getElementById(inputValue);
    rectangleArea.innerText = area;
}
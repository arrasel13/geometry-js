// function calculateEllipseArea() {
//     const PI = 3.1416;
//     const ellipseA = document.getElementById('ellipse-a');
//     const ellipseAValue = parseFloat(ellipseA.value);
    
//     const ellipseB = document.getElementById('ellipse-b');
//     const ellipseBValue = parseFloat(ellipseB.value);

//     const area = PI * ellipseAValue * ellipseBValue;

//     const ellipseArea = document.getElementById('ellipse-area');
//     ellipseArea.innerText = area;

// }

document.getElementById('ellipse-div').addEventListener('mouseover', function () {
    const ellipseDiv = document.getElementById('ellipse-div');
    ellipseDiv.style.backgroundColor = '#39b89a';
});

document.getElementById('ellipse-div').addEventListener('mouseout', function () {
    const ellipseDiv = document.getElementById('ellipse-div');
    ellipseDiv.style.backgroundColor = '#fff';
});

function calculateEllipseArea() {
    const PI = 3.1416;
    const ellipseAValue = getInputValueById('ellipse-a');
    const ellipseBValue = getInputValueById('ellipse-b');

    const area = PI * ellipseAValue * ellipseBValue;

    setAreaValueById('ellipse-area', area);

}

function getInputValueById(inputValue) {
    const givenValueText = document.getElementById(inputValue);
    const givenValue = parseFloat(givenValueText.value);
    return givenValue;
}

function setAreaValueById(inputValue, area) {
    const ellipseArea = document.getElementById(inputValue);
    ellipseArea.innerText = area;
}
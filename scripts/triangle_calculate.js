// function calculateTriangleArea() {
//     const triangleBaseInput = document.getElementById('triangle-base');
//     const triangleBaseText = triangleBaseInput.value;
//     const baseValue = parseFloat(triangleBaseText);

//     const triangleHeightInput = document.getElementById('triangle-height');
//     const heightValue = parseFloat(triangleHeightInput.value);

//     const area = 0.5 * baseValue * heightValue;

//     const triangleArea = document.getElementById('triangle-area');
//     triangleArea.innerText = area;
// }

document.getElementById('triangle-div').addEventListener('mouseover', function () {
    const triangleDiv = document.getElementById('triangle-div');
    triangleDiv.style.backgroundColor = '#ff5883';
});

document.getElementById('triangle-div').addEventListener('mouseout', function () {
    const triangleDiv = document.getElementById('triangle-div');
    triangleDiv.style.backgroundColor = '#fff';
});

function calculateTriangleArea() {
    const baseValue = getInputValueById('triangle-base');
    const heightValue = getInputValueById('triangle-height');

    const area = 0.5 * baseValue * heightValue;

    setAreaValueById('triangle-area', area);

}

function getInputValueById(inputValue) {
    const givenValueText = document.getElementById(inputValue);
    const givenValue = parseFloat(givenValueText.value);
    return givenValue;
}

function setAreaValueById(inputValue, area) {
    const triangleArea = document.getElementById(inputValue);
    triangleArea.innerText = area;
}
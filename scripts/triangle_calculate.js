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
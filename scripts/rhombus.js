// function calculateRhombusArea() {
//     const rhombusd1 = document.getElementById('rhombus-d1');
//     const rhombusd1Value = parseFloat(rhombusd1.value);
    
//     const rhombusd2 = document.getElementById('rhombus-d2');
//     const rhombusd2Value = parseFloat(rhombusd2.value);

//     const area = 0.5 * rhombusd1Value * rhombusd2Value;

//     const rhombusArea = document.getElementById('rhombus-area');
//     rhombusArea.innerText = area;
// }

document.getElementById('rhombus-div').addEventListener('mouseover', function () {
    const rhombusDiv = document.getElementById('rhombus-div');
    rhombusDiv.style.backgroundColor = '#b9eee1';
});

document.getElementById('rhombus-div').addEventListener('mouseout', function () {
    const rhombusDiv = document.getElementById('rhombus-div');
    rhombusDiv.style.backgroundColor = '#fff';
});

function calculateRhombusArea() {
    const rhombusd1Value = getInputValueById('rhombus-d1');
    const rhombusd2Value = getInputValueById('rhombus-d2');

    const area = 0.5 * rhombusd1Value * rhombusd2Value;

    setAreaValueById('rhombus-area', area);

}

function getInputValueById(inputValue) {
    const givenValueText = document.getElementById(inputValue);
    const givenValue = parseFloat(givenValueText.value);
    return givenValue;
}

function setAreaValueById(inputValue, area) {
    const rhombusArea = document.getElementById(inputValue);
    rhombusArea.innerText = area;
}
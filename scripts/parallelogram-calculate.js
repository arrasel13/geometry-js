// function calculateParallelogramArea() {
//     const parallelogramBase = document.getElementById('parallelogram-base');
//     const parallelogramBaseValue = parseFloat(parallelogramBase.value);
    
//     const parallelogramHeight = document.getElementById('parallelogram-height');
//     const parallelogramHeightValue = parseFloat(parallelogramHeight.value);

//     const area = parallelogramBaseValue * parallelogramHeightValue;

//     const parallelogramArea = document.getElementById('parallelogram-area');
//     parallelogramArea.innerText = area;
// }

function calculateParallelogramArea() {
    const parallelogramBaseValue = getInputValueById('parallelogram-base');
    const parallelogramHeightValue = getInputValueById('parallelogram-height');

    const area = parallelogramBaseValue * parallelogramHeightValue;

    setAreaValueById('parallelogram-area', area);

}

function getInputValueById(inputValue) {
    const givenValueText = document.getElementById(inputValue);
    const givenValue = parseFloat(givenValueText.value);
    return givenValue;
}

function setAreaValueById(inputValue, area) {
    const parallelogramArea = document.getElementById(inputValue);
    parallelogramArea.innerText = area;
}
// function calculatePentagonArea() {
//     const pentagonP = document.getElementById('pentagon-p');
//     const pentagonPValue = parseFloat(pentagonP.value);
    
//     const pentagonB = document.getElementById('pentagon-b');
//     const pentagonBValue = parseFloat(pentagonB.value);

//     const area = 0.5 * pentagonPValue * pentagonBValue;

//     const pentagonArea = document.getElementById('pentagon-area');
//     pentagonArea.innerText = area;
// }

document.getElementById('pentagon-div').addEventListener('mouseover', function () {
    const pentagonDiv = document.getElementById('pentagon-div');
    pentagonDiv.style.backgroundColor = '#79d3be';
});

document.getElementById('pentagon-div').addEventListener('mouseout', function () {
    const pentagonDiv = document.getElementById('pentagon-div');
    pentagonDiv.style.backgroundColor = '#fff';
});

function calculatePentagonArea() {
    const pentagonPValue = getInputValueById('pentagon-p');
    const pentagonBValue = getInputValueById('pentagon-b');

    const area = 0.5 * pentagonPValue * pentagonBValue;

    setAreaValueById('pentagon-area', area);

}

function getInputValueById(inputValue) {
    const givenValueText = document.getElementById(inputValue);
    const givenValue = parseFloat(givenValueText.value);
    return givenValue;
}

function setAreaValueById(inputValue, area) {
    const pentagonArea = document.getElementById(inputValue);
    pentagonArea.innerText = area;
}
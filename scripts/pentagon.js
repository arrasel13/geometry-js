function calculatePentagonArea() {
    const pentagonP = document.getElementById('pentagon-p');
    const pentagonPValue = parseFloat(pentagonP.value);
    
    const pentagonB = document.getElementById('pentagon-b');
    const pentagonBValue = parseFloat(pentagonB.value);

    const area = 0.5 * pentagonPValue * pentagonBValue;

    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;
}
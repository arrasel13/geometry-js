function calculateParallelogramArea() {
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseValue = parseFloat(parallelogramBase.value);
    
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightValue = parseFloat(parallelogramHeight.value);

    const area = parallelogramBaseValue * parallelogramHeightValue;

    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}
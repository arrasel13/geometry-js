function calculateParallelogramArea() {
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseValue = parallelogramBase.value;
    
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightValue = parallelogramHeight.value;

    const area = parallelogramBaseValue * parallelogramHeightValue;

    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}
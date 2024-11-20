function calculateRhombusArea() {
    const rhombusd1 = document.getElementById('rhombus-d1');
    const rhombusd1Value = parseFloat(rhombusd1.value);
    
    const rhombusd2 = document.getElementById('rhombus-d2');
    const rhombusd2Value = parseFloat(rhombusd2.value);

    const area = 0.5 * rhombusd1Value * rhombusd2Value;

    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;
}
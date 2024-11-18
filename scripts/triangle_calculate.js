function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const baseValue = parseFloat(triangleBaseText);

    const triangleHeightInput = document.getElementById('triangle-height');
    const heightValue = parseFloat(triangleHeightInput.value);

    const area = 0.5 * baseValue * heightValue;

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;

}
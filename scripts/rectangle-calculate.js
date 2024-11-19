function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidth = parseFloat(rectangleWidthInput.value);
    
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLength = parseFloat(rectangleLengthInput.value);

    const area = rectangleWidth * rectangleLength;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}
function calculateEllipseArea() {
    const PI = 3.1416;
    const ellipseA = document.getElementById('ellipse-a');
    const ellipseAValue = parseFloat(ellipseA.value);
    
    const ellipseB = document.getElementById('ellipse-b');
    const ellipseBValue = parseFloat(ellipseB.value);

    const area = PI * ellipseAValue * ellipseBValue;

    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;

}
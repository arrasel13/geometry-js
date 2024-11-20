function calculateEllipseArea() {
    const PI = 3.1416;
    const ellipseA = document.getElementById('ellipse-a');
    const ellipseAValue = ellipseA.value;
    
    const ellipseB = document.getElementById('ellipse-b');
    const ellipseBValue = ellipseB.value;

    const area = PI * ellipseAValue * ellipseBValue;

    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;

}
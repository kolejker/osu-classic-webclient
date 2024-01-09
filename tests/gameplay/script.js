// Get a reference to the canvas element
const canvas = document.getElementById('myCanvas');

// Set the initial size of the canvas
canvas.width = 512;
canvas.height = 384;

// Function to handle resizing of the canvas
function resizeCanvas() {
  const aspectRatio = canvas.width / canvas.height;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Calculate the new dimensions while maintaining the aspect ratio
  let newWidth = screenWidth;
  let newHeight = screenHeight;

  if (screenWidth / screenHeight > aspectRatio) {
    newWidth = screenHeight * aspectRatio;
  } else {
    newHeight = screenWidth / aspectRatio;
  }

  // Set the new dimensions for the canvas
  canvas.style.width = `${newWidth}px`;
  canvas.style.height = `${newHeight}px`;
}

// Call the resizeCanvas function initially and whenever the window is resized
function drawCircle(x, y) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const circleRadius = 10;
  
    // Calculate the scaled position based on the canvas size and screen size
    const scaledX = (x / 512) * canvas.width;
    const scaledY = (y / 384) * canvas.height;
  
    // Draw the circle at the scaled position
    ctx.beginPath();
    ctx.arc(scaledX, scaledY, circleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
  
    // Draw lines between the curve points
    const curvePoints = [
      { x: 77, y: 146 },
      { x: 194, y: 137 },
      { x: 194, y: 137 },
      { x: 259, y: 193 },
      { x: 259, y: 193 },
      { x: 371, y: 182 }
    ];
  
    for (let i = 0; i < curvePoints.length - 1; i++) {
      const startPoint = curvePoints[i];
      const endPoint = curvePoints[i + 1];
      const scaledStartX = (startPoint.x / 512) * canvas.width;
      const scaledStartY = (startPoint.y / 384) * canvas.height;
      const scaledEndX = (endPoint.x / 512) * canvas.width;
      const scaledEndY = (endPoint.y / 384) * canvas.height;
  
      drawLine(scaledStartX, scaledStartY, scaledEndX, scaledEndY);
    }
  }
  

  function drawLine(startX, startY, endX, endY) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
  
const sliderData = '77,146,98,2,0,B|194:137|194:137|259:193|259:193|371:182,1,315';

function renderSlider() {
  const sliderData = document.getElementById('sliderInput').value;
  const parts = sliderData.split(',');

  const curveType = parts[4].split('|')[0];
  const curvePoints = parts[4].split('|').slice(1);

  const startX = parseInt(parts[0]);
  const startY = parseInt(parts[1]);

  drawCircle(startX, startY);

  const scaledCurvePoints = [];

  for (const curvePoint of curvePoints) {
    const pointCoords = curvePoint.split(':');
    const x = parseInt(pointCoords[0]);
    const y = parseInt(pointCoords[1]);
    scaledCurvePoints.push({ x, y });
    drawCircle(x, y);
  }

  for (let i = 0; i < scaledCurvePoints.length - 1; i++) {
    const startPoint = scaledCurvePoints[i];
    const endPoint = scaledCurvePoints[i + 1];
    const scaledStartX = (startPoint.x / 512) * canvas.width;
    const scaledStartY = (startPoint.y / 384) * canvas.height;
    const scaledEndX = (endPoint.x / 512) * canvas.width;
    const scaledEndY = (endPoint.y / 384) * canvas.height;
    drawLine(scaledStartX, scaledStartY, scaledEndX, scaledEndY);
  }
}



renderSlider(sliderData);

function updateSlider() {
  renderSlider();
}

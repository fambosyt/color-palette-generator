function generatePalette() {
  const paletteContainer = document.getElementById('palette');
  paletteContainer.innerHTML = ''; // Reset palette

  const colors = [];
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    colors.push(color);
  }

  colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'palette-color';
    colorDiv.style.backgroundColor = color;

    const colorText = document.createElement('span');
    colorText.textContent = color;
    colorDiv.appendChild(colorText);

    paletteContainer.appendChild(colorDiv);
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

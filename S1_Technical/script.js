function changeColor() {
    const leftPanel = document.querySelector('.left-panel');
    const currentColor = getComputedStyle(leftPanel).backgroundColor;

    if (currentColor === 'rgb(0, 0, 0)') { // Black in RGB
        leftPanel.style.backgroundColor = '#002147'; // Change to #002147
    } else {
        leftPanel.style.backgroundColor = '#000'; // Revert to black
    }
}

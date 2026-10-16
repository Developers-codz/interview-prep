const colorBtn =document.getElementById("color-btn");
const colorBoxNodeList = document.querySelectorAll(".color-box");

colorBtn.addEventListener("click", () => {
    colorBoxNodeList.forEach(colorBox => {
        // 16777215 is decimal for FFFFFF (max hex color)
        // Math.random() * 16777215 gives us a number between 0 and FFFFFF
        // toString(16) converts it to hex string for valid CSS color code
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        colorBox.style.backgroundColor = `#${randomColor}`;
        colorBox.innerHTML = `#${randomColor}`;
    }) 
})

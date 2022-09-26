const freeSpace = document.getElementById("freeSpace");
const buttons = Array.from(document.getElementsByTagName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log("click", e.target.innerText);
    switch (e.target.innerText) {
      case "C":
        freeSpace.innerText = " ";
        break;
      case "DEL":
        if (freeSpace.innerText) {
          freeSpace.innerText = freeSpace.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          freeSpace.innerText = eval(freeSpace.innerText);
        } catch (error) {
          freeSpace.innerText = error.message;
        }
        break;
      default:
        freeSpace.innerText += e.target.innerText;
        break;
    }
  });
});

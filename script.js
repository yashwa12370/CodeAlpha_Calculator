const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        let value = button.textContent;

        if (value === "C") {
            display.value = "";
        }

 else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        }
 else if (value === "%") {
    display.value = display.value / 100;
}
 else if (value === "=") {
            display.value = eval(display.value);
        }

        else {
            display.value += value;
        }

    });
});
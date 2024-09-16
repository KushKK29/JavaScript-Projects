document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let resetButton = document.querySelector("#reset");

    let turno = true;

    // Store all winning patterns
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            if (turno) {
                box.innerText = "O";
                turno = false;
            } else {
                box.innerText = "X";
                turno = true;
            }
            box.disabled = true;
            checkWinner();
        });
    });

    const checkWinner = () => {
        for (let pattern of winPatterns) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    console.log("Winner: " + pos1);
                    alert("Hey CONGO rest for the new game");
                    boxes.forEach(box => box.disabled = true); // Disable all boxes
                    break;
                }
            }
        }
    };

    resetButton.addEventListener("click", () => {
        boxes.forEach(box => {
            box.innerText = "";
            box.disabled = false;
        });
        turno = true;
    });
});

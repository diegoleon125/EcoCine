document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#grid-seats");
    for(let i = 0; i < 15; i++){
        for (let j = 0; j < 10; j++){
            const div = document.createElement("div");
            grid.appendChild(div);
        }
    }
});
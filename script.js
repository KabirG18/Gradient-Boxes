const numberOfDiv = prompt("Write the number of boxes");
const numberOfDivInColumn = prompt("Write the number of columns")


for (let i = 0; i < numberOfDiv; i++) {
    const body = document.body;
    const div = document.createElement('div')
    body.append(div)
    body.style.display = "grid";
    body.style.gridTemplateColumns = `repeat(${numberOfDivInColumn},  1fr)`;
}
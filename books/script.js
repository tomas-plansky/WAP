var element = document.getElementById("form");
element.onsubmit = (e) => {
    e.preventDefault();
    age = document.getElementById("age").value;
    books = document.getElementById("books").value;
    addRow(age, books);
}

function addRow(age, books) {
    console.log(`Age: ${age}, Books: ${books}`);
    // TODO add table row
}
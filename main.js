let Food = ["Cơm tấm", "Xôi thịt", "Bún chả", "Bún riêu", "Bánh mì"];
function click() {
    let randomIdenx = Math.floor(Math.random() * Food.length);
    document.getElementById("demo").innerHTML = Food[randomIdenx];
}

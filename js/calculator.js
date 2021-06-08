function display(val) {
    document.getElementById("box").value = val;
}

function shownum_display(val) {
    document.getElementById("box").value += val;
}

function solve_result() {
    display(eval(document.getElementById("box").value))
}

function clear_btn() {
    document.getElementById("box").value = "";
}

function delete_num() {
    var valueNeeded = document.getElementById("box").value;
    var finalValueNeeded = valueNeeded.substr(0, valueNeeded.length - 1);
    document.getElementById("box").value = finalValueNeeded;

}
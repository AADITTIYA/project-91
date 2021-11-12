var player1_name = localStorage.getItem("player1");
var player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);


    Question_number = "<h4>" + number1  + "X" + number2 + "</h4>";
    Input_box = "<br> Answer:<input type='number' id='input_check_box'>";
    Check_button = "<br> <br> <button class='btn btn-info onclick='check()'>CHECK</button>";
    Row = Question_number + Input_box + Check_button;
    document.getElementById("output").innerHTML = Row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";

}
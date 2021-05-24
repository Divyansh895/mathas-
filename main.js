function add_user() {
    var player_1_name=document.getElementById("player1_name_input").value;
    var player_2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1",player_1_name);
    localStorage.setItem("Player2",player_2_name);
    window.location.replace("game_page.html");
}

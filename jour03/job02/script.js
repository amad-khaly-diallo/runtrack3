$(() => {
    $('#reset').css("display", "none");

    shuffleBtn.click(() => {
        gentleShuffle();
        if(checkWin()){
            $('#reset').css("display", "block");
        }
    });
});

const container = $("#container");
const shuffleBtn = $("#shuffle");
const message = $("#message");
const resetBtn = $("#reset");

function gentleShuffle() {
    let imgs = container.children().toArray();
    shuffle(imgs);
    container.empty().append(imgs);
}



function checkWin() {
    let correct = true;
    $("#container img").each(function (index) {
        let expectedPos = index + 1;
        if ($(this).data("pos") != expectedPos) {
            correct = false;
        }
    });

    if (correct) {
        message.text(" Vous avez gagné !").css("color", "green");
        shuffleBtn.prop("disabled", true);
        resetBtn.prop("disabled", false);
    } else {
        message.text("Continuez ! Vous êtes proche ").css("color", "orange");
    }
}


$("#reset").click(() => {
    $("#shuffle").css("display", "none");
    $("#message").text("");
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

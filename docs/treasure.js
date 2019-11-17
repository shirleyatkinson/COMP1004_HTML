function guess(guessedNumber, numberToGuess)
{
    window.alert("Guess is "+guessedNumber +" and looking for "+numberToGuess);

    window.alert(parseInt(guessedNumber) == parseInt(numberToGuess));

    return parseInt(guessedNumber) == parseInt(numberToGuess);
}

function generateRandomNumberToGuess()
{
    var NumberToGuess = Math.floor(Math.random() * 6)+1;
    return NumberToGuess;
}

function switchLight(lightID, boolValue)
{
    var lightState = {"on" : boolValue};

    $.ajax({
        url: getLightURI(lightID) + "state/",
        type: "PUT",
        data: JSON.stringify(lightState)
    })
}

function checkWin(element)
{
    var treasure = "4";
    var winner = false;
    if (element.attr("id") === treasure)
    {
        winner = true;
    }
    return winner;
};

function getLightURI(lightID)
{
    var IP = "http://192.168.1.81/api/";
    //var IP = "http://192.168.0.50/api/";
    var username = "newdeveloper";
    //var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
    var lights = "/lights/";
    var URI = IP + username + lights;
    return URI +lightID +"/";
}

function togglelight(element)
{
    var getState = $.getJSON(getLightURI(element.attr("id")), function (data)
        {
            var state = data["state"]["on"];
            if (state)
            {
                state = false;
            }
            else
            {
                state = true;
            }

            switchLight(element.attr("id"), state);
        });
}

$(document).ready(function()
{
    $('td').click(function()
    {
        togglelight($(this));

        if (checkWin($(this)))
        {
            $(this).removeClass("bg-light").addClass("bg-success");
            alert("Congratulations you have won!");
        }
        else
        {
            $(this).removeClass("bg-light").addClass("bg-danger");
        }
    })

    var GuessMe = generateRandomNumberToGuess();

    $('#SubmitGuess').click( function()
    {
        if(guess($('#Guess').val(), GuessMe))
        {
            switchLight(parseInt($('#Guess').val())+12, true);
        }
        else
        {
            window.alert("Sorry, you got it wrong");
        }
    })
});
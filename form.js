class form
{
    constructor()
    {

    }

    display()
    {
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(100,0);
        var input=createInput("name")
        input.position(130,160);
        var button=createButton("Submit")
        button.position(250,300);
        var greeting=createElement("h3");
        
        button.mousePressed(function()
        {   
            input.hide();
            button.hide();
            var name=input.value();
            playerCount++;
            player1.update(name);
            player1.updateCount(playerCount);
            greeting.html("Hello"+name);
            greeting.position(130,160);
        })

    }
}
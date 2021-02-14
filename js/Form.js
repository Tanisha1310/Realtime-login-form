class Form{
    
    constructor(){

    }

    display(){
        var input = createInput('Name');
        input.position(130, 200);

        var button = createButton('Play');
        button.position(135,240);

        button.mousePressed(
            function(){
                input.hide();
                button.hide();

                var name = input.value();
                player.update(name);
                
                playerCount += 1;
                player.updateCount(playerCount);

                var greeting = createElement('h3', 'Hello '+ name);
                greeting.position(100, 100);

            }
        )

    }
    
}
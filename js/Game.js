class Game{
    constructor(){

    }

    //read value of gameState from db
    // ()=>{}
    getState(){
    database.ref('gameState').on("value", (data)=>{
        gameState = data.val();
    })
    }

    update(state){
        database.ref('/').update(
            {
            'gameState': state
            }
        )
    }

    start(){
        if(gameState === 0){
           player = new Player(); 
           player.getCount();
           
           form = new Form();
           form.display();
        }
    }
}
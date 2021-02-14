class Player{
    
    constructor(){

    }

    getCount(){
        database.ref('playerCount').on("value", (data)=>{
            playerCount = data.val();
        })
        }
    
        updateCount(count){
            database.ref('/').update(
                
                {
                    'playerCount': count
                }
            )
        }

       // player.updateCount(1)

       update(name){
           var playerIndex = "player"+playerCount
           database.ref(playerIndex).update({
               name: name
           })

       }
}
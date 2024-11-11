function winTest(){
    if (playerPos.x == exit.x && playerPos.y == exit.y){
        return true
    }
    return false
}
function tests(){
    if(winTest()){
        alert("Győztél! Wp!")
    }
}
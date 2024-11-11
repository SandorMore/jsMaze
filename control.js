function Move(xChange,yChange){
    let newPlayerPos = {
        x: playerPos.x + xChange,
        y: playerPos.y + yChange,
    }
    if (map[newPlayerPos.y][newPlayerPos.x] != 1) {
        removePlayer()
        playerPos = newPlayerPos
        placePlayer()
    }
}

window.addEventListener('keydown', (e) =>{
    console.log(e.key);
    switch (e.key.toLocaleUpperCase()) {
        case 'W':  Move(0,-1);break;
        case 'A':  Move(-1,0);break;
        case 'S':  Move(0,1);break;
        case 'D':  Move(1,0);break;
        default:
            break;

    }
})
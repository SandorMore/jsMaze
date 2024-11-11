let playerPos = {x: 0, y: 2}
const map = [
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,0,1,1,1,1,1,1,1],
            [1,1,0,0,1,1,1,1,1,1],
            [1,1,1,0,1,1,1,1,1,1],
            [1,1,1,0,1,1,1,1,1,1],
            [1,1,1,0,1,1,1,1,1,1],
            [1,1,1,0,0,1,1,1,1,1],
            [1,1,1,1,0,1,1,1,1,1],
            [1,1,1,1,0,1,1,1,1,1],
            [1,1,1,1,9,1,1,1,1,1],
            ]
function initMap(){
    map.forEach(line => {
        line.forEach(tileNumber => {
            let tile = createTile(tileNumber)
            gamefieldEl.appendChild(tile)
        })
    })
}
initMap()
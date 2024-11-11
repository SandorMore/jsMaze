let playerPos = {x: 1, y: 2}
const map = [
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,1,1],
            [1,1,1,0,1,0,1,0,1,1],
            [1,1,1,0,1,0,1,0,1,1],
            [1,1,1,0,1,0,0,0,1,1],
            [1,1,1,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,0,1,1,1,0,1],
            [1,0,1,1,0,1,1,1,0,1],
            [1,1,1,1,9,1,1,1,1,1],
            ]
function initMap(){
    map.forEach(line => {
        let lineElements = []
        line.forEach(tileNumber => {
            let tile = createTile(tileNumber)
            lineElements.push(tile)
            gamefieldEl.appendChild(tile)
        })
        gameMap.push(lineElements)
    })
}

let gameMap = []

function placePlayer(){
    gameMap[playerPos.x][playerPos.y].innerText = '🐱‍👤'
}
initMap()
placePlayer()
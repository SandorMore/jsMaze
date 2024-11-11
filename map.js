let playerPos = {y: 1, x: 2}
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
    gameMap[playerPos.y][playerPos.x].innerText = '👺'
}
function removePlayer(){
    gameMap[playerPos.y][playerPos.x].innerText = ''
    
}
initMap()
placePlayer()

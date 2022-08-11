let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    for(let i= 0; i < fighters.length; i++){
        let randomItemOne = fighters[Math.floor(Math.random(fighters[i])* fighters.length)]
        let randomItemTwo = fighters[Math.floor(Math.random(fighters[i])* fighters.length)]
        stageEl.textContent = (randomItemOne + " VS " + randomItemTwo)
        
    }

})

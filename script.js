const bouton1 = document.querySelector(".joueur1");
const bouton2 = document.querySelector(".joueur2");
const acceuil = document.querySelector(".acceuil");
const selection = document.querySelector(".selection");

bouton1.addEventListener("click", () => {
    acceuil.style.display = "none";
    selection.style.display = "block";
    
});
bouton2.addEventListener("click", () => {
    acceuil.style.display = "none";
    selection.style.display = "block";
    
});

const pokemons = document.querySelectorAll('.tooltip')
const r = document.querySelector(':root');


const onePlayer = document.getElementById('onePlayer');
const twoPlayers = document.getElementById('twoPlayers');

const choice1Name = document.getElementById('choice1Name');
const choice2Name = document.getElementById('choice2Name');

onePlayer.addEventListener('click', () => {
    players = 'onePlayer'
})

twoPlayers.addEventListener('click', () => {
    players = 'twoPlayers'
})

let players = ''


const choice1 = document.querySelector('.choice1')
const choice2 = document.querySelector('.choice2')

const random = document.getElementById('random')

let player1;
let player2;

pokemons.forEach(pokemon => {
    if(pokemon.id === 'random') return
    
    pokemon.children[0].addEventListener('mouseover', () => {
        if(pokemon.id === 'random') return

        if(players === 'onePlayer') {
            if(player1 === undefined) {
                choice1.style.visibility = 'visible'
                choice1.style.backgroundImage = `url('img/${pokemon.children[1].textContent.toLowerCase()}.png')`
                choice1Name.innerText = pokemon.children[1].textContent
            }      
        } else if(players === 'twoPlayers') {
            if(player1 === undefined) {
                choice1.style.visibility = 'visible'
                choice1.style.backgroundImage = `url('img/${pokemon.children[1].textContent.toLowerCase()}.png')`
                choice1Name.innerText = pokemon.children[1].textContent
            } else if(player2 === undefined) {
                choice2.style.visibility = 'visible'
                choice2.style.backgroundImage = `url('img/${pokemon.children[1].textContent.toLowerCase()}.png')`
                choice2Name.innerText = pokemon.children[1].textContent
            }
        }
    })
})

pokemons.forEach(pokemon => {
    if(pokemon.id === 'random') return
    
    pokemon.children[0].addEventListener('click', () => {
        if(players === 'onePlayer') {
            if(player1 === undefined) {
                choice1.style.visibility = 'visible'
                choice1.style.backgroundImage = `url('img/${pokemon.children[1].textContent.toLowerCase()}.png')`
                event.target.style.border = '2px solid var(--player1)'
                event.target.style.filter = 'drop-shadow(0 0 5px var(--player1))'
                player1 = pokemon.children[1].textContent
                choice1Name.innerText = pokemon.children[1].textContent

                
                const random = Math.floor(Math.random() * 25)
                choice2.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random]}.png')`
                choice2.style.visibility = 'visible'
                player2 = Object.keys(listPokemons)[random]
                choice2Name.innerText = pokemon.children[1].textContent

            }
        }
        
        if(players === 'twoPlayers') {
            if(player1 === undefined) {
                choice1.style.backgroundImage = `url('img/${pokemon.children[1].textContent.toLowerCase()}.png')`
                choice1.style.visibility = 'visible'
                event.target.style.border = '2px solid var(--player1)'
                event.target.style.filter = 'drop-shadow(0 0 5px var(--player1))'
                player1 = pokemon.children[1].textContent
                r.style.setProperty('--hover', 'red')
                choice1Name.innerText = pokemon.children[1].textContent

            }
            else if (player2 === undefined) {
                choice2.style.backgroundImage = `url('img/${pokemon.children[1].textContent.toLowerCase()}.png')`
                choice2.style.visibility = 'visible'
                event.target.style.border = '2px solid var(--player2)'
                event.target.style.filter = 'drop-shadow(0 0 5px var(--player2))'
                player2 = pokemon.children[1].textContent;
                choice2Name.innerText = pokemon.children[1].textContent
            }
        }
    })
})

const listPokemons = {
    'arceus': '0',
    'artikodin': '1',
    'darkrai': '2',
    'dialga': '3',
    'dracaufeu': '4',
    'electhor': '5',
    'entei': '6',
    'giratina': '7',
    'groudon': '8',
    'ho-oh': '9',
    'kyogre': '10',
    'kyurem': '11',
    'latias': '12',
    'latios': '13',
    'lugia': '14',
    'mewtwo': '15',
    'palkia': '16',
    'raikou': '17',
    'rayquaza': '18',
    'reshiram': '19',
    'suicune': '20',
    'sulfura': '21',
    'xerneas': '22',
    'yveltal': '23',
    'zekrom': '24'
}

random.addEventListener('click', () => {
    if(players === 'onePlayer') {
        if(player1 === undefined) {
            const random = Math.floor(Math.random() * 25)
            choice1.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random]}.png')`
            choice1.style.visibility = 'visible'
            player1 = Object.keys(listPokemons)[random]
            
            const random2 = Math.floor(Math.random() * 25)
            choice2.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random2]}.png')`
            choice2.style.visibility = 'visible'
            player2 = Object.keys(listPokemons)[random2]
        }
    } 
    if(players === 'twoPlayers') {
        if(player1 === undefined) {
            const random = Math.floor(Math.random() * 25)
            choice1.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random]}.png')`
            choice1.style.visibility = 'visible'
            player1 = Object.keys(listPokemons)[random]
        } else if(player2 === undefined) {
            const random = Math.floor(Math.random() * 25)
            choice2.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random]}.png')`
            choice2.style.visibility = 'visible'
            player2 = Object.keys(listPokemons)[random]
        }
    }
})

setInterval(() => {
    if(players === 'onePlayer') {
        if(player1 !== undefined) {
            r.style.setProperty('--hover', 'white')
        }
    } else if(players === 'twoPlayers') {
        if(player1 !== undefined && player2 !== undefined) {
            // remove hover effect
            r.style.setProperty('--hover', 'white')
        }
    }
}, 1000)
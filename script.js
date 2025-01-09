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

let p1;
let p2;

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

                p1 = pokeClass.find(pokemon => {  
                    if(pokemon.name === player1.charAt(0).toUpperCase() + player1.slice(1)) {
                        return pokemon
                    }
                })
                
                const random = Math.floor(Math.random() * 25)
                choice2.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random]}.png')`
                choice2.style.visibility = 'visible'
                player2 = Object.keys(listPokemons)[random].charAt(0).toUpperCase() + Object.keys(listPokemons)[random].slice(1)
                choice2Name.innerText = Object.keys(listPokemons)[random].charAt(0).toUpperCase() + Object.keys(listPokemons)[random].slice(1)
                            
                p2 = pokeClass.find(pokemon => {  
                    if(pokemon.name === player2.charAt(0).toUpperCase() + player2.slice(1)) {
                        return pokemon
                    }
                })

                launchCombat();
                
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
                
                p1 = pokeClass.find(pokemon => {  
                    if(pokemon.name === player1.charAt(0).toUpperCase() + player1.slice(1)) {
                        return pokemon
                    }
                })
                
                
            }
            else if (player2 === undefined) {
                choice2.style.backgroundImage = `url('img/${pokemon.children[1].textContent.toLowerCase()}.png')`
                choice2.style.visibility = 'visible'
                event.target.style.border = '2px solid var(--player2)'
                event.target.style.filter = 'drop-shadow(0 0 5px var(--player2))'
                player2 = pokemon.children[1].textContent;
                choice2Name.innerText = pokemon.children[1].textContent

                p2 = pokeClass.find(pokemon => {  
                    if(pokemon.name === player2.charAt(0).toUpperCase() + player2.slice(1)) {
                        return pokemon
                    }
                })

                launchCombat()
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
            choice1Name.innerText = Object.keys(listPokemons)[random].charAt(0).toUpperCase() + Object.keys(listPokemons)[random].slice(1)

            p1 = pokeClass.find(pokemon => {  
                if(pokemon.name === player1.charAt(0).toUpperCase() + player1.slice(1)) {
                    return pokemon
                }
            })
            
            const random2 = Math.floor(Math.random() * 25)
            choice2.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random2]}.png')`
            choice2.style.visibility = 'visible'
            player2 = Object.keys(listPokemons)[random2]
            choice2Name.innerText = Object.keys(listPokemons)[random2].charAt(0).toUpperCase() + Object.keys(listPokemons)[random2].slice(1)
            
            p2 = pokeClass.find(pokemon => {  
                if(pokemon.name === player2.charAt(0).toUpperCase() + player2.slice(1)) {
                    return pokemon
                }
            })
            launchCombat()
        }
    } 
    if(players === 'twoPlayers') {
        if(player1 === undefined) {
            const random = Math.floor(Math.random() * 25)
            choice1.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random]}.png')`
            choice1.style.visibility = 'visible'
            player1 = Object.keys(listPokemons)[random]
            choice1Name.innerText = Object.keys(listPokemons)[random].charAt(0).toUpperCase() + Object.keys(listPokemons)[random].slice(1)
            
            p1 = pokeClass.find(pokemon => {  
                if(pokemon.name === player1.charAt(0).toUpperCase() + player1.slice(1)) {
                    return pokemon
                }
            })

        } else if(player2 === undefined) {
            const random = Math.floor(Math.random() * 25)
            choice2.style.backgroundImage = `url('img/${Object.keys(listPokemons)[random]}.png')`
            choice2.style.visibility = 'visible'
            player2 = Object.keys(listPokemons)[random]
            choice2Name.innerText = Object.keys(listPokemons)[random].charAt(0).toUpperCase() + Object.keys(listPokemons)[random].slice(1)

            p2 = pokeClass.find(pokemon => {  
                if(pokemon.name === player2.charAt(0).toUpperCase() + player2.slice(1)) {
                    return pokemon
                }
            })
            console.log(p2)
            launchCombat()
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

class Pokemon {
    /*
    * @param {string} name
    * @param {string} type
    * @param {number} hp
    * @param {number} atk
    */
    constructor(name, type, hp, atk) {
        this.name = name,
        this.type = type,
        this.hp = hp,
        this.atk = atk
    }
    
    attaque(target, damager){
        console.log(`${this.name} attaque ${target.name} et lui inflige ${damager.atk} points de dégats`)
        return target.hp -= damager.atk
    }
}

let arceus = new Pokemon("Arceus", "Normal", 220, 130);
let artikodin = new Pokemon("Artikodin", "Vol et Glace", 120, 100);
let darkrai = new Pokemon("Darkrai", "Ténèbres", 120, 60);
let dialga = new Pokemon("Dialga", "Acier et Dragon", 120, 100);
let dracaufeu = new Pokemon("Dracaufeu", "Feu et Vol", 220, 180);
let electhor = new Pokemon("Electhor", "Électrik et Vol", 110, 120);
let entei = new Pokemon("Entei", "Feu", 130, 150);
let giratina = new Pokemon("Giratina", "Spectre et Dragon", 130, 130);
let groudon = new Pokemon("Groudon", "Sol", 180, 120);
let hooh = new Pokemon("Ho-Oh", "Feu et Vol", 130, 110);
let kyogre = new Pokemon("Kyogre", "Eau", 130, 130);
let kyurem = new Pokemon("Kyurem", "Dragon et Glace", 130, 120);
let latias = new Pokemon("Latias", "Dragon et Psy", 110, 110);
let latios = new Pokemon("Latios", "Dragon et Psy", 110, 80);
let lugia = new Pokemon("Lugia", "Psy et Vol", 130, 120);
let mewtwo = new Pokemon("Mewtwo", "Psy", 130, 130);
let palkia = new Pokemon("Palkia", "Eau et Dragon", 120, 100);
let raikou = new Pokemon("Raikou", "Électrik", 120, 120);
let rayquaza = new Pokemon("Rayquaza", "Dragon et Vol", 130, 130);
let reshiram = new Pokemon("Reshiram", "Dragon et Feu", 130, 120);
let suicune = new Pokemon("Suicune", "Eau", 110, 120);
let sulfura = new Pokemon("Sulfura", "Feu et Vol", 120, 110);
let xerneas = new Pokemon("Xerneas", "Fée", 130, 100);
let yveltal = new Pokemon("Yveltal", "Ténèbres et Vol", 130, 120);
let zekrom = new Pokemon("Zekrom", "Normal", 180, 120);

let pokeClass = [arceus, artikodin, darkrai, dialga, dracaufeu, electhor, entei, giratina, groudon, hooh, kyogre, kyurem, latias, latios, lugia, mewtwo, palkia, raikou, rayquaza, reshiram, suicune, sulfura, xerneas, yveltal, zekrom];


const deg1 = document.getElementById('deg1')
const deg2 = document.getElementById('deg2')

const health1 = document.getElementById('health1')
const health2 = document.getElementById('health2')

launchCombat = () => {
    if(p1 !== undefined && p2 !== undefined) {
        document.querySelector('.pokemons').style.display = 'none'
        health1.innerText = `${p1.hp} hp`
        health2.innerText = `${p2.hp} hp`
        health1.style.visibility = 'visible'
        health2.style.visibility = 'visible'
        
        while(p1.hp > 0 && p2.hp > 0){
            console.log(`C'est au tour de ${p1.name} !`)
            console.log(`${p1.name} attaque ${p2.name} et lui inflige ${p1.atk} points de dégats`)
            p2.hp -= p1.atk
            setTimeout(() => {
                deg2.innerText = `-${p1.atk} hp`
                health2.innerText = `${p2.hp} hp`
            }, 1000)
            console.log(`${p2.name} a ${p2.hp} points de vie restants`)
            if(p2.hp <= 0) break
            console.log(`C'est au tour de ${p2.name} !`)
            console.log(`${p2.name} attaque ${p1.name} et lui inflige ${p2.atk} points de dégats`)
            p1.hp -= p2.atk
            setTimeout(() => {
                deg1.innerText = `-${p2.atk} hp`
                health1.innerText = `${p1.hp} hp`
            }, 1500)
            p1.hp -= p2.atk
            console.log(`${p1.name} a ${p1.hp} points de vie restants`)
        }
        console.log(`Le vainqueur est ${p1.hp > 0 ? p1.name : p2.name}`)
        const vs = document.querySelector('.vs')
        const pokemons = document.querySelector('.pokemons')
        setTimeout(() => {
            vs.children [0].src = 'img/finducombat.png'
            choice1.style.visibility = 'hidden'
            choice2.style = '' 
            choice2.style.visibility = 'visible'
            choice2.innerHTML = ''
            choice2.style.backgroundImage = 'none'
            health1.style.visibility = 'hidden'
            health2.style.visibility = 'hidden'
            pokemons.style.justifyContent = 'center'
            pokemons.style.display = 'flex'
            pokemons.innerHTML = ``
            pokemons.style.wordSpacing = '0px'
            pokemons.style.fontWeight = 600;
            pokemons.style.color = 'white';
            pokemons.style.fontSize = '8rem';
            pokemons.style.textStroke = '2px black';
            pokemons.style.webkitTextStroke = '2px black';
        }, 4000)
        setTimeout(() => {
            vs.children [0].src = `img/${p1.hp > 0 ? p1.name.toLowerCase() : p2.name.toLowerCase()}.png`
            pokemons.innerHTML = `Le Winner est ${p1.hp > 0 ? p1.name : p2.name}`
            vs.children [0].style.width = '60rem'
            choice2.innerHTML = `
                <button class="back">
                    <img width="60" height="60" src="img/back.png" alt="back">
                </button>
            `
            choice2.style.display = 'flex'
            choice2.style.justifyContent = 'end' 
            choice2.children[0].style.height = '5rem'
            choice2.children[0].addEventListener('click', () => {
                window.location.reload();
            })
        }, 6000)
    }
}
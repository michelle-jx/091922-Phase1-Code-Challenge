// Your code here
const url = 'http://localhost:3000/characters';

fetch(url)
    .then((res) => res.json())
    .then(renderCharacters);
function renderCharacters(characters) {
    characters.forEach(renderCharacter)
}
function renderCharacter(character) {
    const characterCollectionDiv = document.getElementById('character-bar');
    const characterImage = document.createElement('img');
    characterImage.src = character.image;
    characterCollectionDiv.append(characterImage)
    characterImage.addEventListener("click", e => renderDetails(character))
}

function el(elementName) {
    return document.getElementById(elementName)
}

function renderDetails(character) {
    const characterImage = el('image')
    const characterName = el('name')
    const voteCount = el('vote-count')

    characterImage.src = character.image;
    characterImage.alt = character.name;
    characterName.textContent = character.name;
    voteCount.textContent = character.votes;
}

function updateVotes() {
    const form = document.querySelector('add-vote-form')
    form.addEventListener('submit', e => {
        e.preventDefault();
        const totalVotes = e.target[0].value;

        const updatedCharacter = {
            name: characterName,
            image: characterImage,
            votes: 0
        }
        postCharacter(updatedCharacter)
    })
}

const postCharacter(character) {
    const config = {
        method: "PATCH",
        headers: 'content-type': 'application/json'
    }
    body: json.stringify(character)
}
fetch(url, config)
    .then((res) = res(json));
    .then(json => console.log())
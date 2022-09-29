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

function createNewCharacter(e) {
    e.preventDefault();
    const newCharacter = {
        name: e.target.name.value,
        image: e.target.image.value,
        votes: e.target.votes.value,
    }
    renderCharacter(newCharacter);
}

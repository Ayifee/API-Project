async function getCharacters() {
  let response = await fetch(`https://api.genshin.dev/characters/`)
  let data = await response.json();
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    return (data)
  }
}

async function getCharacterDetails(name) {
  let response = await fetch(`https://api.genshin.dev/characters/${name}`)
  let charDetails = await response.json();
  const skillTalents = charDetails.skillTalents;

  const select = document.getElementById("SelectCharSkill");
  select.innerHTML = ''
  for (let i = 0; i < skillTalents.length; i++) {
    const option = document.createElement('option')
    option.value = "Skill: " + skillTalents[i].name + "\nUnlock: " + skillTalents[i].unlock + "\nDescription: " + skillTalents[i].description

    option.innerHTML = skillTalents[i].name
    // console.log(skillTalents[i]);
    // console.log(skillTalents[i].name);
    select.appendChild(option);
  }
  select.addEventListener("change", (e) => console.log(e.target.value));
}

async function renderSelectChar() {
  let renderResponse = await fetch(`https://api.genshin.dev/characters/`)
  let charDropBox = await renderResponse.json();
  select = document.getElementById('SelectChar');
  for (let i = 0; i < charDropBox.length; i++) {
    const option = document.createElement('option')
    option.value = charDropBox[i]
    option.innerHTML = charDropBox[i]
    select.appendChild(option);
  }

  select.addEventListener("change", (e) => getCharactersInfo(e.target.value));
}

async function getCharactersInfo(name) {
  let response = await fetch(`https://api.genshin.dev/characters/${name}`)
  let charInfo = await response.json();

  console.log(charInfo.name, "The " + charInfo.title);
  console.log("Constellation: " + charInfo.constellation);
  console.log("Rarity: " + charInfo.rarity);
  console.log("Weapon: " + charInfo.weapon);
  console.log("Vision: " + charInfo.vision);
  console.log("Description: " + charInfo.description);
}

// async function getCharacterSkillInfo(name) {
//   let renderSkillInfo = await fetch(`https://api.genshin.dev/characters/${name}`)
//   let charSkillInfo = await renderSkillInfo.json();
//   select = document.getElementById('SelectCharSkill');
//   for (let i = 0; i < charSkillInfo.skillTalents.length; i++) {
//     const option = document.createElement('option')
//     option.value = charSkillInfo.skillTalents[i]
//     option.innerHTML = charSkillInfo.skillTalents[i]
//     select.appendChild(option);
//     console.log(charSkillInfo.skillTalents[i]);
//   }
// }

async function getCharacterCard(name) {
  let imgCard = await fetch(`https://api.genshin.dev/characters/${name}/card`)
  let charCard = imgCard.url;
  console.log("imgCard: "+ charCard);
  return (charCard)
}



renderSelectChar()
getCharacters()
document.getElementById("SelectChar").addEventListener('change', event => {
  const selection = event.target.value;
  getCharacterDetails(selection);
  getCharacterCard(selection)
  // getCharactersInfo(selection);
});


// getCharacterDetails('hu-tao')
// getCharacterCard('hu-tao')
//   getCharactersInfo('hu-tao')
// getCharacterSkillInfo('hu-tao')

// fetch(mainDomain)
// .then(res => res.json())
// .then(data => console.log(data))
// .then(data => console.log(charaters))
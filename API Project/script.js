const selectSkill = document.getElementById("SelectCharSkill");
const selectChar = document.getElementById("SelectChar")


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

  selectSkill.innerHTML = ''
  for (let i = 0; i < skillTalents.length; i++) {
    const option = document.createElement('option')
    option.value = "Skill: " + skillTalents[i].name + "\nUnlock: " + skillTalents[i].unlock + "\nDescription: " + skillTalents[i].description

    option.innerHTML = skillTalents[i].name
    // console.log(skillTalents[i]);
    // console.log(skillTalents[i].name);
    selectSkill.appendChild(option);
  }
}

async function renderSelectChar() {
  let renderResponse = await fetch(`https://api.genshin.dev/characters/`)
  let charDropBox = await renderResponse.json();
  for (let i = 0; i < charDropBox.length; i++) {
    const option = document.createElement('option')
    option.value = charDropBox[i]
    option.innerHTML = charDropBox[i]
    selectChar.appendChild(option);
  }

  selectChar.addEventListener("change", (e) => getCharactersInfo(e.target.value));
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
  // console.log("Passive 1\n " + charInfo.passiveTalents[0].name);
  // console.log("Description: " + charInfo.passiveTalents[0].description);
  for (let i = 0; i < 3; i++) {
    console.log(`Passive ${i + 1}\nName: ` + charInfo.passiveTalents[i].name);
    console.log(`Description: ` + charInfo.passiveTalents[i].description);
  }

}
//passiveTalents[0].name


// async function getCharacterPassive(name) {
//   let response = await fetch(`https://api.genshin.dev/characters/${name}`)
//   let charPassive = await response.json();
//   const passiveTalents = charPassive.passiveTalents;
//   for (let i = 0; i < passiveTalents.length; i++) {
//     const option = document.createElement('option')
//     option.value = "Passive: " + passiveTalents[i].name + "\nUnlock:" + passiveTalents[i].unlock + "\nDescription: " + passiveTalents[i].description

//     option.innerHTML = passiveTalents[i].name
//   }
//   select.addEventListener("change", (e) => console.log(e.target.value));
// }
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
  console.log("imgCard: " + charCard);
  return (charCard)
}



renderSelectChar()
getCharacters()
selectChar.addEventListener('change', event => {
  const selection = event.target.value;
  getCharacterDetails(selection);
  getCharacterCard(selection)
  // getCharactersInfo(selection);
});

selectSkill.addEventListener("change", (e) => console.log(e.target.value));

// getCharacterDetails('hu-tao')
// getCharacterCard('hu-tao')
//   getCharactersInfo('hu-tao')
// getCharacterSkillInfo('hu-tao')

// fetch(mainDomain)
// .then(res => res.json())
// .then(data => console.log(data))
// .then(data => console.log(charaters))
const selectSkill = document.getElementById("SelectCharSkill");
const selectChar = document.getElementById("SelectChar")
const charCard = document.querySelector(".CharCard")
const charInfoDisplay = document.querySelector(".CharInfo");
const charInfoPassiveDisplay = document.querySelector(".CharPassives")
const charSkillInfoDisplay = document.querySelector(".CharSkillInfo")
const charSplash = document.querySelector(".CharSplash")
document.getElementById("Jess").style.display ="none";
document.getElementById("Will").style.display ="none";

function displayTest() {
  document.getElementById("Jess").style.display = "block";
  document.getElementById("Will").style.display = "block";
}

document.getElementById('SelectChar').addEventListener('click', displayTest);

async function getCharacters() {
  let response = await fetch(`https://api.genshin.dev/characters/`)
  let data = await response.json();
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    return (data)
  }
}

let selectedCharacter

async function getCharacterDetails(name) {
  let response = await fetch(`https://api.genshin.dev/characters/${name}`)
  let charDetails = await response.json();
  const skillTalents = charDetails.skillTalents;

  selectedCharacter = charDetails;

  console.log({ skillTalents });

  selectSkill.innerHTML = ''

  for (let i = 0; i < skillTalents.length; i++) {
    const option = document.createElement('option')
    // option.value = "Skill: " + skillTalents[i].name + "\nUnlock: " + skillTalents[i].unlock + "\nDescription: " + skillTalents[i].description
    option.value = i
    option.innerHTML = skillTalents[i].name

    selectSkill.appendChild(option);
  }

}
//---------------------------------
// Dropbox for selecting character

function upperCase (name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
console.log(upperCase("snake"))
async function renderSelectChar() {
  let renderResponse = await fetch(`https://api.genshin.dev/characters/`)
  let charDropBox = await renderResponse.json();
  for (let i = 0; i < charDropBox.length; i++) {
    const option = document.createElement('option')
    option.value = upperCase(charDropBox[i])
    option.innerHTML = upperCase(charDropBox[i])
    selectChar.appendChild(option);
  }
  selectChar.addEventListener("change", (e) => getCharactersInfo(e.target.value));
}

async function getCharactersInfo(name) {
  let response = await fetch(`https://api.genshin.dev/characters/${name}`)
  let charInfo = await response.json();

  console.log(charInfo.name, "The " + charInfo.title);
  //---------------------------------
  console.log("Constellation: " + charInfo.constellation);
  // text for constellation
  const textConstellation = document.createElement('p');
  textConstellation.classList.add('Constellation')
  textConstellation.innerHTML = `Constellation: ${charInfo.constellation}`;
  charInfoDisplay.innerHTML = ""
  charInfoPassiveDisplay.innerHTML = ""
  charInfoDisplay.append(textConstellation);
  //---------------------------------
  console.log("Rarity: " + charInfo.rarity);
  // text for rarity
  const textRarity = document.createElement('p');
  textRarity.classList.add('Rarity')
  textRarity.innerHTML = `Rarity: ${charInfo.rarity}`;
  charInfoDisplay.append(textRarity);
  //----------------------------------
  console.log("Weapon: " + charInfo.weapon);
  // text for weapon
  const textWeapon = document.createElement('p');
  textWeapon.classList.add('Weapon')
  textWeapon.innerHTML = `Weapon: ${charInfo.weapon}`;
  charInfoDisplay.append(textWeapon);
  //----------------------------------
  console.log("Vision: " + charInfo.vision);
  // text for vision
  const textVision = document.createElement('p');
  textVision.classList.add('Vision')
  textVision.innerHTML = `Vision: ${charInfo.vision}`;
  charInfoDisplay.append(textVision);
  //----------------------------------
  console.log("Description: " + charInfo.description);
  //text for description
  const textDescription = document.createElement('p');
  textDescription.classList.add('Description')
  textDescription.innerHTML = `Description: ${charInfo.description}`;
  charInfoDisplay.append(textDescription);
  //----------------------------------
  for (let i = 0; i < 3; i++) {
    console.log(`Passive ${i + 1}\nName: ` + charInfo.passiveTalents[i].name);
    // text for passive
    const textPassive = document.createElement('p');
    textPassive.classList.add('Passive')
    textPassive.innerHTML = `Passive ${i + 1}<br\ >Name: ${charInfo.passiveTalents[i].name} `;
    charInfoPassiveDisplay.append(textPassive);
    //----------------------------------
    console.log(`Description: ` + charInfo.passiveTalents[i].description);
    // text for passive description
    const textPassiveDescription = document.createElement('p');
    textPassiveDescription.classList.add('PassiveDescription')
    textPassiveDescription.innerHTML = `Description:  ${charInfo.passiveTalents[i].description} `;
    charInfoPassiveDisplay.append(textPassiveDescription);
    //----------------------------------
  }
getCharacterSplash(name)
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
  let imgCard = await fetch(`https://api.genshin.dev/characters/${name.toLowerCase()}/card`)
  let charimg = imgCard.url;
  console.log("imgCard: " + charimg);
  const img = document.createElement("img");
  img.src = charimg;
  charCard.innerHTML = ""
  charCard.append(img);

}

async function getCharacterSplash(name) {
  let imgSplash = await fetch(`https://api.genshin.dev/characters/${name.toLowerCase()}/gacha-splash`)
  let splashimg = imgSplash.url;
  console.log("imgSplash: " + splashimg);
  const img = document.createElement("img");
  img.src = splashimg;
  charSplash.innerHTML = ""
  charSplash.append(img);
  console.log(imgSplash);

}

renderSelectChar()
getCharacters()
selectChar.addEventListener('change', event => {
  const selection = event.target.value;
  getCharacterDetails(selection);
  getCharacterCard(selection);
  getCharacterSplash(selection);
  // getCharactersInfo(selection);
});

selectSkill.addEventListener("change", (e) => {
  console.log(e.target.value);

  console.log('Selected', selectedCharacter.skillTalents[e.target.value]);
  //--------------
  const skillTalentsName = document.createElement('p');
  const skillTalentsType = document.createElement('div');
  const skillTalentsInfo = document.createElement('div');
  const skillName = selectedCharacter.skillTalents[e.target.value].name;
  const skillType = `${selectedCharacter.skillTalents[e.target.value].unlock}:`;
  const skillDescription = selectedCharacter.skillTalents[e.target.value].description;

  console.log(selectedCharacter.skillTalents[e.target.value].description);
  skillTalentsInfo.classList.add('SkillTalentInfo')
  skillTalentsName.innerHTML = skillName;;
  skillTalentsType.innerHTML = skillType;
  skillTalentsInfo.innerHTML = skillDescription;

  // charSkillInfoDisplay.innerHTML = ""

  charSkillInfoDisplay.innerHTML = ''
  charSkillInfoDisplay.append(skillTalentsName);
  charSkillInfoDisplay.append(skillTalentsType);
  charSkillInfoDisplay.append(skillTalentsInfo);

});

// const textSkillDescription = document.createElement('p');
// textSkillDescription.classList.add('SkillDescription')
// textSkillDescription.innerHTML = `Description:  ${charInfo.skillTalents[i].description} `;
// textSkillDisplay.append(textSkillDescription);
// getCharacterDetails('hu-tao')
// getCharacterCard('hu-tao')
//   getCharactersInfo('hu-tao')
// getCharacterSkillInfo('hu-tao')

// fetch(mainDomain)
// .then(res => res.json())
// .then(data => console.log(data))
// .then(data => console.log(charaters))
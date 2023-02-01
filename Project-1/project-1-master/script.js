async function getCharacters() {
  let response = await fetch(`https://api.genshin.dev/characters/`)
  let data = await response.json();
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    return (data)
  }
}

async function getCharacterDetails(name) {
  let response = await fetch(`https://api.genshin.dev/characters/${name}`)
  let charDetails = await response.json();
  const skillTalents = charDetails.skillTalents;
  console.log(skillTalents);

  const select = document.getElementById("SelectCharSkill");

  select.innerHTML = ''

  for (let i = 0; i < skillTalents.length; i++) {
    console.log(skillTalents);
    const option = document.createElement('option')
    option.value = skillTalents[i].name
    option.innerHTML = skillTalents[i].name

    // console.log(skillTalents[i]);
    // console.log(skillTalents[i].name);

    select.appendChild(option);

  }

  select.addEventListener("change", (e) => console.log(e.target.value));

  //return (charDetails)
}
// NOTE in case i want to swap to buttons
// async function createButton () {
//     let response = await fetch(`https://api.genshin.dev/characters/`)
//     let data = await response.json();
//     for (let i = ssssssww0; i < data.length; i++) {
//         const button = document.createElement('button')
//         button.innerHTML = data[i]
//         document.body.appendChild(button);
//     }
// }

async function renderSelectChar() {
  let renderResponse = await fetch(`https://api.genshin.dev/characters/`)
  let charDropBox = await renderResponse.json();
  select = document.getElementById('SelectChar');
  for (let i = 0; i < charDropBox.length; i++) {
    // console.log(charDropBox[i].replace("-", ""))
    const option = document.createElement('option')
    option.value = charDropBox[i].replace("-", " ");
    option.innerHTML = charDropBox[i].replace("-", " ");
    select.appendChild(option);
  }
}

async function getCharactersInfo(name) {
  let response = await fetch(`https://api.genshin.dev/characters/${name}`)
  let charInfo = await response.json();

  console.log(charInfo.name, "The " + charInfo.title);
  console.log(charInfo.constellation);
  console.log(charInfo.rarity);
  console.log(charInfo.weapon);
  console.log(charInfo.vision);

  // More info button that sends you to a another website with more indepth details on characther if possible
  // Relist line 58-62
  // Static Passives and abilities

  //  This line indicates which skill this will be an array with a drop box


  return (charInfo)
}

async function getCharacterSkillInfo(name) {
  let renderSkillInfo = await fetch(`https://api.genshin.dev/characters/${name}`)
  let charSkillInfo = await renderSkillInfo.json();
  console.log(charSkillInfo.skillTalents)
  for (let i = 0; i < charSkillInfo.skillTalents.length; i++) {
    // console.log('hello');
    console.log(charSkillInfo.skillTalents[i]);
  }
  select = document.getElementById('SelectCharSkill');
  for (let i = 0; i < charSkillInfo.skillTalents.lenght; i++) {
    const option = document.createElement('option')
    option.value = charSkillInfo.skillTalents[i]
    option.innerHTML = charSkillInfo.skillTalents[i]
    select.appendChild(option);
  }

  // for (let i = 0; i < charSkillInfo.skillTalents.length; i++) {
  //   console.log(charSkillInfo.skillTalents[i]);
  // }
}

// async function SelectCharSkills(name) {
//   let renderSkill = await fetch(`https://api.genshin.dev/characters/${name}`)
//   let charSkillDropBox = await renderSkill.json();
//   select = document.getElementById('SelectCharSkill');
//   for (let i = 0; i < charSkillDropBox.skillTalents[i].length; i++) {
//     const option = document.createElement('option')
//     option.value = charSkillDropBox.skillTalents[i]
//     option.innerHTML = charSkillDropBox.skillTalents[i]
//     select.appendChild(option);
//   }
// }

async function getCharacterCard(name) {
  let imgCard = await fetch(`https://api.genshin.dev/characters/${name}/card`)
  console.log("imgCard: ");
  let charCard = imgCard.url;

  // console.log(charCard);
  return (charCard)
}

renderSelectChar()
getCharacters()
document.getElementById("SelectChar").addEventListener('change', event => {
  const selection = event.target.value;
  getCharacterDetails(selection);
});


// getCharacterDetails('hu-tao')
// getCharacterCard('hu-tao')
// getCharactersInfo('hu-tao')
// getCharacterSkillInfo('hu-tao')

// fetch(mainDomain)
// .then(res => res.json())
// .then(data => console.log(data))
// .then(data => console.log(charaters))
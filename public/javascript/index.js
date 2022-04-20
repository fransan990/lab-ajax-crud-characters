const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(({ data }) => {
        const { id, name, occupation, cartoon, weapon } = data[0]

        console.log(data)

        let texto = ""
        data.forEach(element => {

          texto += "<div class='character-info'>"
          texto += "<div class='name'>Name " + element.id + "</div>"
          texto += "<div class='name'>Name " + element.name + "</div>"
          texto += "<div class='occupation'>Occupation " + element.occupation + "</div>"
          texto += "<div class='cartoon'>Cartoon " + element.cartoon + "</div>"
          texto += "<div class='weapon'>Weapon" + element.weapon + "</div>"
          texto += "</div>"

        });
        document.querySelector('.characters-container').innerHTML = texto

      })
      .catch(err => console.log(err))


  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let valor = document.querySelector('[name="character-id"]').value
    console.log(valor)

    charactersAPI
      .getOneRegister(valor)
      .then(({ data }) => {

        console.log(data)

        document.querySelector(".name").innerHTML = data.name
        document.querySelector(".occupation").innerHTML = data.occupation
        document.querySelector(".cartoon").innerHTML = data.cartoon
        document.querySelector(".weapon").innerHTML = data.weapon

      })
      .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let valor = document.querySelector('[name="character-id-delete"]').value
    console.log(valor)

    charactersAPI
      .deleteOneRegister(valor)
      .catch(err => console.log(err))


  });
});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  event.preventDefault();

  let id = document.querySelector("[name='chr-id']").value

  let name = document.querySelector("[name='name1']").value
  let occupation = document.querySelector("[name='occupation1']").value
  let cartoon = document.querySelector("[name='cartoon1']").checked
  let weapon = document.querySelector("[name='weapon1']").value

  console.log(name)


  let characterData = {
    id: id, name: name, occupation: occupation, cartoon: cartoon, weapon: weapon

  }
  console.log(characterData)


  charactersAPI

    .updateOneRegister(characterData)





});

document.getElementById('new-character-form').addEventListener('submit', function (event) {


  event.preventDefault();

  let name = document.querySelector("[name='name']").value
  let occupation = document.querySelector("[name='occupation']").value
  let cartoon = document.querySelector("[name='cartoon']").checked
  let weapon = document.querySelector("[name='weapon']").value

  console.log(name)

  let characterData = {
    name: name, occupation: occupation, cartoon: cartoon, weapon: weapon

  }
  charactersAPI

    .createOneRegister(characterData)
    .then(response => {
      console.log("done")
    })
    .catch(err => console.log(err))



});

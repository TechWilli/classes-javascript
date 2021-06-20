// para poder importar outros arquivos .js no spcript é necessário especificar type="module" antes do src no script do html
import Person from './Person.js'

const listContent = document.querySelector('.list-content')

const pessoa = new Person('William', 'Araujo', 22, 57, 'Masculino')

const pessoaInfos = pessoa.getDetails()

// console.log('pessoaInfos', pessoaInfos)

const labels = {
  name: 'Nome',
  lastName: 'Sobrenome',
  age: 'Idade',
  weight: 'Peso',
  gender: 'Gênero'
}

const pessoaData = []

for (let key in pessoaInfos) {
  pessoaData.push({
    label: labels[key],
    value: pessoaInfos[key]
  })
}

// console.log('pessoaData', pessoaData)

for (let data of pessoaData) {

  const li = document.createElement('li')

  li.innerHTML = `<b>${data.label}:</b> ${data.value}`

  listContent.appendChild(li)

}
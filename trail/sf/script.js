
const fetchUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        const users = response.data
        console.log(`GET list users`, users)
        appendToDOM(users)

      })
      .catch(error => console.error(error))
  }
  
  fetchUsers()

  const appendToDOM = users => {
    const ul = document.querySelector('ul')
    users.map(user => {
      ul.appendChild(createLi(user))
    })
  }
  const createLi = user => {
    const uls = document.createElement('ul')
    const li=document.createElement('li')
    const li2=document.createElement('ol')
    
    li.textContent = `Id-${user.id} `
    li2.textContent = `Album-Name- ${user.title}`
    uls.appendChild(li)
    uls.appendChild(li2)
    return uls
  }

  var func=()=>{
console.log(Number("1")-1==0)
  }
  func()

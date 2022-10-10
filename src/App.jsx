import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'



const baseURL = 'https://users-crud1.herokuapp.com'

function App() {
  const [users, setUsers] = useState()
  const [updateUser, setUpdateUser] = useState()
  const [isformClose, setIsFormClose] = useState(true)

  //=====GET USERS=======

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }



  //=====CREATE NEW USER/ POST=======
  const createNewUser = data => {

    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //=====DELETE USER/ DELETE=======
  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //=====EDIT USER/ PUT=======

  const updateUserCard = (id, dataUser) => {
    const URL = `${baseURL}/users/${id}/`
    axios.put(URL, dataUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //=====GET ALL INFO AXIOS 
  useEffect(() => {
    getAllUsers()
  }, [])


  console.log(users);

  const handleClick = () => { setIsFormClose(false) }


  return (
    <div className="App_container">
      
        <div className='App_container_button'>
      
          <button onClick={handleClick} className='button_add'>+ Create new user</button>
         
        </div>
        
      <div className={` ${isformClose ? 'container_form_hidden' : 'container_form'}`}>

        <FormUsers
          createNewUser={createNewUser}
          updateUser={updateUser}
          setUpdateUser={setUpdateUser}
          updateUserCard={updateUserCard}
          setIsFormClose={setIsFormClose} />
      </div>

      <div className='container_cards'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateUser={setUpdateUser}
              setIsFormClose={setIsFormClose}
            />
          ))
        }
      </div>



    </div>

  )
}

export default App

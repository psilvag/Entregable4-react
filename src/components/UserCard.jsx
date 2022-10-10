import React from 'react'
import imagetrash from "../images/trash-bin.png"
import imagedraw from "../images/draw.png"
const UserCard = ({ user, deleteUserById, setUpdateUser, setIsFormClose }) => {

  const getInfoupdateCar = () => {
    setUpdateUser(user)
    setIsFormClose(false)
  }


  return (

    <article className='article_card'>
      <h2 className='article_name'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='article_info'>
        <li><span>Email:</span>{user.email}</li>
        <li><span>Birthday:</span>{user.birthday}</li>
      </ul>
      <footer className='article_buttons'>
        <img onClick={() => deleteUserById(user.id)} src={imagetrash} alt="img" />
        <img onClick={getInfoupdateCar} src={imagedraw} alt="img" />
      </footer>
    </article>
  )
}

export default UserCard
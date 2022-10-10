import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import closeicon from '../images/close.png'

const values = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}
const FormUsers = ({ createNewUser, updateUser, setUpdateUser, updateUserCard, setIsFormClose }) => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    useEffect(() => {

        if (updateUser) {
            reset(updateUser)
        }


    }, [updateUser])


    const submit = data => {

        if (updateUser) {

            updateUserCard(updateUser.id, data)
            setUpdateUser()
            setIsFormClose(true) 
        }
        else {
            if(data)
            {
                createNewUser(data)
                setIsFormClose(true) 
            }
           else{
            setIsFormClose(false)
           }

        }


        reset(values)
    }

    
    const handleClickCloseForm = () => 
    { 
      setUpdateUser()
      setIsFormClose(true) 
      reset(values)
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>

            <h2>{updateUser ? 'Update User' : 'Create new User'}</h2>
            <img onClick={handleClickCloseForm} src={closeicon} alt="" />

            <div className='form_input_container'>
                <label className='form_label' htmlFor="First_name">First name:</label>
                <input className='form_input' placeholder='Enter your name' type="text" id="first_name"
                    {...register('first_name', {
                        required: true,
                        maxLength: 20


                    })} />
                {errors.first_name?.type === 'required' && <i >Name is required</i>}
                {errors.first_name?.type === 'maxLength' && <i >No more than 20 characters</i>}
            </div>

            <div className='form_input_container'>
                <label className='form_label' htmlFor="Last_name">Last name:</label>
                <input className='form_input' placeholder='Enter your last name' type="text" id="last_name"
                    {...register('last_name', {
                        required: true,
                        maxLength: 20
                    })} />
                {errors.last_name?.type === 'required' && <i >Last name is required</i>}
                {errors.last_name?.type === 'maxLength' && <i >No more than 20 characters</i>}
            </div>


            <div className='form_input_container'>
                <label className='form_label' htmlFor="email">Email:</label>
                <input className='form_input' placeholder='Enter your email' type="email" id="email"
                    {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                {errors.email?.type === 'pattern' && <i >Must be an email</i>}
            </div>

            <div className='form_input_container'>
                <label className='form_label' htmlFor="password">Password:</label>
                <input className='form_input' placeholder='Password' type="password" id="password"
                    {...register('password', {
                        required: true
                    })} />
                {errors.password?.type === 'required' && <i >Password is required</i>}
            </div>

            <div className='form_input_container'>
                <label className='form_label_birth' htmlFor="birthday">Birthday:</label>
                <input className='form_input_birth' type="date" id="birthday"
                    {...register('birthday', {
                        required: true
                    })} />
                {errors.birthday?.type === 'required' && <i >Birthday is required</i>}
            </div>

            <div className='form_button_container'>
                <button  className='form_button'>{updateUser ? 'Update' : 'Create'}</button>
            </div>
        </form>
    )
}

export default FormUsers
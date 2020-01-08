import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import *as yup from 'yup'
import axios from 'axios'
import {history} from '../../history'

import '../login/Login.css'




const Register = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/user', values)
        .then(resp => {
            const {data} = resp
            if (data){
                localStorage.setItem('app-token',data)
                history.pushState('/login')
            }
        } )
    }
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (

        <>
            <h1>Register</h1>
            <p>Fill the fields to create a new user</p>
            <Formik initialValues={{}} onSubmit={handleSubmit} 
            validationSchema={validations}>
                <Form className="Login">
                <div className="Login-Group-password">
                        <Field
                            name="firstName"
                            className="Login-Field"
                        />
                        <ErrorMessage 
                        component="span" 
                        name="firstName" 
                        className="Login-Erro"/>
                    </div>
                    <div className="Login-Group-password">
                        <Field
                            
                            name="lastName"
                            className="Login-Field"
                        />
                        <ErrorMessage 
                        component="span" 
                        name="lastName" 
                        className="Login-Erro"/>
                    </div>
                    <div className="Login-Group">
                        <Field 
                            name="email"
                            className="Login-Field"
                        />
                        <ErrorMessage 
                        component="span" 
                        name="email" 
                        className="Login-Erro"/>
                    </div>
                    <div className="Login-Group-password">
                        <Field
                            name="password"
                            className="Login-Field"
                        />
                        <ErrorMessage 
                        component="span" 
                        name="password" 
                        className="Login-Erro"/>
                    </div>
                    <button className='Login-btn' type="submit" >Register</button>
                </Form>
            </Formik>
        </>
    )
}

export default Register
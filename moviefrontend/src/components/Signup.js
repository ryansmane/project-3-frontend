import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
const axios = require('axios');

const Login = props => {
   const [credentials, setCredentials] = useState({});
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [username, setUsername] = useState('');

   const getInfoAndValidate = () => {
      const info = { email, password, userName: username };
      setCredentials(info);
      axios
         .post('http://localhost:8080/api/user', info)
         .then(res => console.log(res))
         .catch(err => console.log(err));

      //needs validation
   };

   return (
      <div>
         <Form className='login-form'>
            <Form.Group
               onChange={evt => setUsername(evt.target.value)}
               controlId='formBasicText'
            >
               <Form.Label>Username</Form.Label>
               <Form.Control type='text' placeholder='Enter username' />
               <Form.Text className='text-muted'></Form.Text>
            </Form.Group>
            <Form.Group
               onChange={evt => setEmail(evt.target.value)}
               controlId='formBasicEmail'
            >
               <Form.Label>Email address</Form.Label>
               <Form.Control type='email' placeholder='Enter email' />
               <Form.Text className='text-muted'></Form.Text>
            </Form.Group>

            <Form.Group
               onChange={evt => setPassword(evt.target.value)}
               controlId='formBasicPassword'
            >
               <Form.Label>Password</Form.Label>
               <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Button
               onClick={evt => {
                  evt.preventDefault();
                  getInfoAndValidate();

                  console.log(credentials);
               }}
               variant='primary'
               type='submit'
            >
               Sign up
            </Button>
         </Form>
      </div>
   );
};

export default Login;

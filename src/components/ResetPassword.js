import React, { useContext, useState } from 'react'
import { Container, Nav,Navbar,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from './api';
import DataContext from '../Context/DataContext';

const ResetPassword = () => {

  const {email,setEmail,error,setError,timeout} = useContext(DataContext)

  const {id,token} = useParams();
   
  const navigate = useNavigate();

  const [newPassword,setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordChanged, setPasswordChanged ] = useState(false);

   

  const navigateToHome = () => {
    setTimeout(()=>{
      navigate("/login");
    },2000)
  }

  function validatePassword(newPassword,confirmPassword) {
    const lengthRegex = /^.{4,6}$/;
  
    const isValidLengthNew = lengthRegex.test(newPassword);
  const isValidLengthConfirm = lengthRegex.test(confirmPassword);

  const isValidLength = isValidLengthNew && isValidLengthConfirm;
  
    return isValidLength;
  }

  const canClick = Boolean(newPassword,confirmPassword);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const passwords = {
        newPassword, confirmPassword
      }
      const response = await api.post(`/resetpassword/${id}/${token}`,passwords)

      setPasswordChanged(response?.data.changed);

      localStorage.setItem("name",JSON.stringify(response?.data.name));

    } catch (error) {
      
      console.log(error);
      setError(error.response?.data)
      timeout();
    }

  }

  return (
    <>
    
    <header> 
      <Navbar expand="sm" className="bg-body-tertiary"
      >
      <Container>
        <Navbar.Brand>Item-Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"
            className='nav-link'
            >SignIn</Nav.Link>

            <Nav.Link href="/login"
             >Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>
     <main className='input-forms'>
<section>
  {!passwordChanged ? (
<Form onSubmit={handleSubmit}>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="Password" placeholder="Enter New Password" 
        autoFocus
        onChange={(e)=>setNewPassword(e.target.value)}
        />
        <Form.Text className="text-muted">
          Please Make Sure Both Passwords are Same !
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Confirm Password"
        onChange={(e)=>setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      
      {error ? <p style={{color:'red',margin:"0"}}>{error}</p> : <br/>}

      <Button variant="primary" type="submit"
      disabled={!canClick || !validatePassword(newPassword,confirmPassword)}
      >
        Submit
      </Button>
    </Form>
   ):(<section className='success-popup'>

   <h4>Password Changed Successfully !!</h4>
   
   {navigateToHome()}
</section>)}
</section>
     </main>
     </>
  )
}

export default ResetPassword
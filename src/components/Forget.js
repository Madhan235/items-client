import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Nav,Navbar,Button} from 'react-bootstrap'
import DataContext from '../Context/DataContext';
import api from './api';

const Forget = () => {
  const {email,setEmail,error,setError,timeout} = useContext(DataContext);

  const [mailSent , setMailSent] = useState(false);

  const canClick = Boolean(email);

  const handleSubmit = async (e)=>{
e.preventDefault();
    try {
       const response = await api.post("/forget-password",{email})

          setMailSent(true);

      console.log(mailSent);
    } catch (error) {
      console.error(error);
      if(error.response){
        setError(error.response?.data)
      } else{
        setError(error.message)
      }
      timeout();
    }
  }
  return (
    < > 
      <header> 
      <Navbar expand="sm" className="bg-body-tertiary"
      >
      <Container>
        <Navbar.Brand
        >Item-Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/"
            className='nav-link'
            >SignIn</Nav.Link>

            <Nav.Link href="/login"
            className='nav-link'
             >Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>

     <main className='input-forms'>

     <section style={{marginBottom:"50vh"}}>
     {!mailSent ? (
<Form onSubmit={handleSubmit}>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Text className="text-muted">
           Please Confirm your Registred email !
        </Form.Text>
        <br />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email}
        autoFocus
        onChange={(e)=>setEmail(e.target.value)}
        />
         
      </Form.Group>
      
      {error ? <p style={{color:'red',margin:"0"}}>{error}</p> : <br/>}

      <Button variant="primary" type="submit"
      disabled={!canClick}
      >
        Submit
      </Button>

    </Form>
    ):(

      <section className='success-popup'>
          <h4>Reset-Password Link Has Been Sent Successfully !! Check Your Mail </h4>
      </section>
    )}
   
</section>
     </main>
    </>
  )
}

export default Forget
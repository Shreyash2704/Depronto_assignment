import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Feedback() {
    const [name, setname] = useState("")
    const [message, setmessage] = useState("")
    const [date, setdate] = useState("")
    const [email, setemail] = useState("")
    const [category, setcategory] = useState("")
    const [gender, setgender] = useState("")


    const submit = (e) =>{
        e.preventDefault()
        console.log(name,message,date,category,gender)
    }
  return (
    <div className="container">
       
        <Form className='p-5 bg-white'> 
        <h4>Feedback</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" onChange={(e) => setname(e.target.value)} value={name} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" onChange={(e) => setdate(e.target.value)} value={date} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message </Form.Label>
                <Form.Control type="text" onChange={(e) => setmessage(e.target.value)} value={message} placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
            <Form.Label>Category   </Form.Label><br></br>
            <Form.Check
                inline
                label="1"
                name="group1"
                type='checkbox'
                value="category 1"
                onChange={(e) => e.target.checkbox === "on" && setcategory(e.target.value)}
                id={`inline-checkbox-1`}
            />
          <Form.Check
                inline
                label="2"
                name="group1"
                type='checkbox'
                value="category 2"
                onChange={(e) => e.target.checkbox === "on" && setcategory(e.target.value)}
                id={`inline-checkbox-2`}
            />
            </Form.Group>

            <Form.Group>

            <Form.Label>Gender  </Form.Label><br></br>
            <Form.Check
                inline
                label="Male"
                value="1"
                name="group1"
                type='radio'
                onChange={(e) => setgender(e.target.value)}
                id={`inline-radio-1`}
            />
          <Form.Check
                inline
                label="female"
                name="group1"
                value="2"
                type='radio'
                onChange={(e) => setgender(e.target.value)}
                id={`inline-radio-2`}
            />
            </Form.Group>

           
            <Button variant="primary" onClick={submit} type="submit">
                Submit
            </Button>
    </Form>
    </div>
  )
}

import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function Cards(props) {
    const [show, setShow] = useState(false);
    const [title, settitle] = useState("");
    const [body, setbody] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    console.log(data)
    settitle(data.data.title)
    setbody(data.data.body)
    setShow(true)
  }
  return (
<>
    <Card style={{ width: '18rem' }} className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center m-1 p-2 " key={props.id}>
      <Card.Body className="">
        <Card.Title>{props.title}</Card.Title>
        <small>by user {props.userid}</small>
        <Card.Text>
         {props.body}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Show Post</Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

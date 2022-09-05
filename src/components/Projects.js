import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Projects() {
    const initialdata = [{
        id:"1",
        title:"Project 1",
        desc:"Description 1",
        date:"22/01/2022"
    },
    {
        id:"2",
        title:"Project 2",
        desc:"Description 2",
        date:"22/01/2022"
    },{
        id:"3",
        title:"Project 3",
        desc:"Description 3",
        date:"22/01/2022"
    }]

    const [data, setdata] = useState(initialdata)

    const filter = (name) =>{
       setdata(initialdata)
        var arr = []
        data.map(ele =>{
            if (ele.title.includes(name)){
                arr.push(ele)
            }
        })
        setdata(arr)
    }
  return (
    <div className="container mt-5">
        <div className='bg-light'>
        <h1>Projects</h1>
        </div>
         <Table striped bordered hover size="sm">
            
            <thead>
            <tr>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Filter out
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Search</Dropdown.Item>
                   <input type="text" className='m-2' onChange={(e) => filter(e.target.value)} placeholder="Filter using Project Title"></input>
                    
                </Dropdown.Menu>
            </Dropdown>
            </tr>
                <tr>
                <th>#</th>
                <th>Project Title</th>
                <th>Description</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>

                {data.map(ele =>{
                    return(<>
                    <tr>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.desc}</td>
                <td>{ele.date}</td>
                </tr>
                    </>)
                })}
                
            </tbody>
        </Table>
    </div>
  )
}

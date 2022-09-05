import React,{useState,useEffect} from 'react'
import Cards from './Cards'
import axios from 'axios'

export default function Blogs() {
    const [data, setdata] = useState([])
    const limit = 12;
    
    const loadData = async() =>{
        const url = "https://jsonplaceholder.typicode.com/posts"
        const data = await axios.get(url)
        setdata(data.data)

    }
    var count = 0;
    useEffect(() => {
        loadData()
        console.log(data)
    }, [])
    
  return (
    <div className="container">

         
         <div className='row p-3 '>
         <h2>Blogs</h2><hr></hr>
         {
            data.length > 0 && (

                data.map(function(ele){
                    count = count + 1
                    if (count <= limit){
                    const {id,userId,body,title} = ele
                    
                    return(
                    <>
                   
                    <Cards title={title} userid={userId} id={id} body={body}  />
                    
                    </>)
                    }
                })
            )
         }
         </div>
         
    </div>
  )
}

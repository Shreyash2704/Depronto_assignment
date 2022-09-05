import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './style.css'

export default function Introduction() {
  return (
    <div className="container-fluid">
        
         <Carousel  variant="dark" className='carousel'>
            
            <Carousel.Item className=" ">
                <img
                className="img w-100"
                src="https://th.bing.com/th/id/R.63be24348856919856f4184631a12f55?rik=qh3r9%2fTo2jgAow&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f9quGkLG.jpg&ehk=0Xx4Qv2EDKAKYFWXlL4agJowBrvKUasWzeH%2fBkx2PUE%3d&risl=&pid=ImgRaw&r=0"
                alt="Second slide"
                />

                <Carousel.Caption className="text-white">
                <h3>Introduction</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=" ">
                <img
                className="img w-100"
                src="https://th.bing.com/th/id/R.50cac0ffa586c424c40e101d36d42e6e?rik=lhUsSwTe9yUFDQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f7TZf9RT.jpg&ehk=p%2bGKM7WxWAAcymim5yG98gi0o80evhEKkENlnnUbUnI%3d&risl=&pid=ImgRaw&r=0"
                alt="First slide"
                />
                <Carousel.Caption className="text-white">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=" \">
                <img
                className="img w-100"
                src="https://th.bing.com/th/id/R.35a92a99df5d5d51b037ba5fa9102e04?rik=l8fTY2vSouRekg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fshDUNb6.jpg&ehk=OEaGJ47fyGcv%2bpBW%2bZqcgwoX9jjKlGcmDGGKPdqiKcw%3d&risl=&pid=ImgRaw&r=0"
                alt="Third slide"
                />

                <Carousel.Caption  className="text-white">
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
   
  )
}

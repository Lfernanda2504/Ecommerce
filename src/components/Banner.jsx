import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Banner = () => {
    return (
        <Container>
            <div className="banner">
              <Image src="https://res.cloudinary.com/academia/image/upload/v1629990658/magher/romabanner_itpqsj.jpg">
              </Image>
              <h2>Shop Now</h2>
            </div>
        </Container>
        
    )
}

export default Banner

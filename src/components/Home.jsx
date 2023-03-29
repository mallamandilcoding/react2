import React from 'react'
import vg from '../assets/2.webp'

const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
          <h1>TechStar</h1>
          <p>solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics"/>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt culpa architecto iusto voluptatum? Ducimus dignissimos qui possimus voluptate fuga.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home

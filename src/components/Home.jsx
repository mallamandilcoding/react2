import React from 'react';
import vg from '../assets/2.webp';
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className='home' id="home">
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

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio, aut sapiente doloribus sequi, delectus beatae unde ab provident illo perspiciatis neque omnis voluptates praesentium. Voluptas neque consequatur quae ab. Modi nulla quas deserunt veritatis nihil facere a consequuntur blanditiis inventore, hic quidem autem. Possimus obcaecati cupiditate odit amet quasi, quibusdam porro, inventore dignissimos ut doloremque harum commodi numquam, incidunt natus quo dolor nostrum voluptates ad unde eius consequuntur? Nesciunt reprehenderit quas nisi eos natus! Nihil itaque laborum esse recusandae ab sint? Dolorum veniam dignissimos consectetur ab, distinctio non, fugit sed repellendus explicabo odio cumque quasi tempore omnis dolores voluptate?</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s",
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s",
            }}>
              <AiFillInstagram />
              <p>Instragram</p>
            </div>
            <div style={{
              animationDelay:"0.7s",
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"1s",
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>

    </>
  )
}

export default Home

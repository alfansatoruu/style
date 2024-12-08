import React, { useEffect, useRef } from 'react';
import ObjectManager from './ObjectManager';

const App = () => {
  const canvasRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const manager = new ObjectManager(canvasRef.current);
    manager.init();

    return () => {
      manager.cleanup();
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="stack">


      <div className="section section-1">
        <div id="loading-screen">
          <div id="loading-spinner"></div>
          Loading...
        </div>

        <h1 className="animated-text">Node Alvan</h1>
        <p className="animated-text">Scroll down to rotate the Camera</p>
        <div class="navigation">
          <div class="menuToggle"></div>
          <div class="menu">
            <ul>
              <li style="--i: 0.1s;"><a href="#home">Home</a></li>
              <li style="--i: 0.2s;"><a href="#about">About</a></li>
              <li style="--i: 0.3s;"><a href="#services">Services</a></li>
              <li style="--i: 0.4s;"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="audio-container">
          <audio id="audio" autoPlay loop>
            <source src="music/yve.mp3" type="audio/mp3" />
          </audio>
        </div>
      </div>

      <div className="section section-2">
        <h2 className="animated-text">私について</h2>
        <h2 className="animated-text">About Me</h2>
        <div className='column'>

          <p className="animated-text">
            I am a passionate Mobile and Web Developer with experience in building responsive websites and user-friendly mobile applications. I specialize in creating innovative solutions that deliver seamless digital experiences.
          </p>
        </div>
        <div className='column2'>
          <p className="animated-text">
            私は情熱を持ったモバイルおよびウェブ開発者であり、レスポンシブなウェブサイトやユーザーフレンドリーなモバイルアプリケーションの構築経験があります。シームレスなデジタル体験を提供する革新的なソリューションの開発を専門としています。
          </p>
        </div>
      </div>

      <div className="section section-3">
        <div className="profile-column">
          <h3>My Profile</h3>
          <p>This is a profile picture.</p>
          <div className="card">
            <div className="gallery">
              <img src="album/fotoku.png" alt="Profile" />
              <img src="album/coding3.png" alt="Profile" />
              <img src="album/coding2.png" alt="Profile" />
            </div>
          </div>
        </div>
        <div className="experience-column">
          <div className="container">
            <h1>
              My <span>Timeline</span>
            </h1>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>March 2022 - April 2023</h3>
                <span>Flutter</span>
                <p>
                  Developing and maintaining web applications using Flutter and other related technologies. Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>April 2023 - Sep 2024</h3>
                <span>React.Js</span>
                <p>
                  Developing and maintaining web applications using React.js and other related technologies. Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-4">
        <h2 className="animated-text">Contact Me</h2>
        <form id="contactForm">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <p id="confirmationMessage" className="message"></p>
      </div>

      <canvas ref={canvasRef} className="canvas" />
    </div>
  );
};

export default App;

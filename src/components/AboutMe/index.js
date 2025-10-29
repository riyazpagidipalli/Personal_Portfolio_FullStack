import Header from '../Header'
import './index.css'

const AboutMe = () => {
  return (
    <>
      <Header />
      <div class="container">
        <header>
          <h1>About Me</h1>
          <p>Web Developer | Tech Enthusiast | Problem Solver</p>
        </header>

        <section className="profile-card">

          <h2>Riyaz Pagidipalli</h2>
          <p>Hello! I'm Riyaz, a passionate web developer with experience in frontend and backend technologies. I enjoy creating beautiful, responsive, and interactive web applications. My goal is to solve real-world problems through clean and efficient code.</p>
        </section>
        <h1 className='headingh1'>
          Technical Skils:-
        </h1><br></br>
        <section className="skills">

          <div className="skill-card">HTML & CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Node.js & Express</div>
          <div className="skill-card">React</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Oracle</div>
          <div className="skill-card">Python</div>

        </section>

        <footer>
          <p>Connect with me:-😊👇❤️<br></br>
            <a href="https://www.linkedin.com/in/riyaz-pagidipalli-55b848231" target='_blank'>LinkedIn</a> |
            <a href="https://github.com/riyazpagidipalli" target='_blank'>GitHub</a> |
            <a href='https://www.youtube.com/@riyazpagidipalli8756' target='_blank'>YouTube</a>

          </p>
        </footer>
      </div>
    </>
  )
}

export default AboutMe
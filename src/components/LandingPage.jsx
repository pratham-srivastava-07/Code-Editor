import React from 'react'
import {Link} from "react-router-dom"

export default function LandingPage() {
  return (
    <>
    <main className='home-page'>
      <nav className='nav'>
        <h2>CodeNest</h2>
        <img className='img' 
        src="/images/dwnld.png" alt="" />
      </nav>
      <div className='landing--text'>
       <h2 className='code'>Learn how to code</h2>
       <h2 className='code' >and build skills in </h2>
       <h2 className='code-text' > &lt; programming / &gt; </h2>
      </div>
      <div className='page--text'>
       <div className="content">
            <img 
            className='img2'
            src="/images/code.png" alt="" />
       </div>
       <div className="no-content">
       <h2>Because learning to code might be the</h2>
       <h2>easiest way to change your career.</h2>
       <Link to="/editor">
        <button className='button'>
          Start Coding!
        </button>
       </Link>
       </div>
      </div>
    </main>
    <footer>CopyRight @2023</footer>
    </>
  )
}

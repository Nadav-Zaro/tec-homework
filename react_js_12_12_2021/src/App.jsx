import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Mentoring from './pages/Mentoring'
import Testimonials from './pages/Testimonials'
import Events from './pages/Events'
import './App.css';
import {BrowserRouter , Switch, Route , Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='App-header'>
        <div className='title'><span style={{color: "red"}}>Nadav</span> Zaro</div>
        <div className='LinksHolder'>
        <Link className='Link' to='/'>Home</Link>
        <Link className='Link' to='/About'>About</Link>
        <Link className='Link' to='/Contact'>Contact</Link>
        <Link className='Link' to='/Courses'>Courses</Link>
        <Link className='Link' to='/Mentoring'>Mentoring</Link>
        <Link className='Link' to='/Testimonials'>Testimonials</Link>
        <Link className='Link' to='/Events'>Events</Link>
        </div>
      </div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component={About}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/Courses' component={Courses}/>
      <Route exact path='/Mentoring' component={Mentoring}/>
      <Route exact path='/Testimonials' component={Testimonials}/>
      <Route exact path='/Events' component={Events}/>
      </Switch>
      <div className='footer'>
        <div className='footerLinks'>
          <a href="https://github.com/Nadav-Zaro"><img className='footerImg' src="https://img.icons8.com/ios-glyphs/30/4a90e2/github.png"/></a>
          <a href="https://www.linkedin.com/in/nadav-zaro-6b979321a/"><img className='footerImg' src="https://img.icons8.com/fluency/64/000000/linkedin.png"/></a>
          <a href="https://www.youtube.com/watch?v=jI-w4gvkCkQ&list=RDjI-w4gvkCkQ&start_radio=1"><img className='footerImg' src="https://img.icons8.com/fluency/48/000000/youtube-play.png"/></a>
          <a href="https://www.udemy.com/user/nathan-krasney/"><img className='footerImg' src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-udemycom-is-an-online-learning-and-teaching-platform-logo-shadow-tal-revivo.png"/></a>
        </div>
        <span style={{fontSize:"20px",}}>© 2020 NADAV ZARO. ALL RIGHTS RESERVED.</span>
      </div>
    </div>
    </BrowserRouter>
  );
}

<img src="https://img.icons8.com/ios-glyphs/30/4a90e2/github.png"/>
export default App;

import './App.css'
import Profile from './components/profile'
import Links from './components/links'
import github from './assets/github-svg.svg'
import slack from './assets/slack-svg.svg'

function App() {

  return (
    <div className="App">
      <Profile />
      <div className="cs_my-2">
          <Links id="twitter" href="https://twitter.com/stilkinging">
            stilkinging
          </Links>
      </div>
      <div className="cs_my-2">
        <div className="socials">
            <img src={slack} alt="the logo of slack"/>
          <a href="http://github.com/stilkinging">
            <img src={github} alt="the logo of github "/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App

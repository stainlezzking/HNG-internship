import './App.css'
import Profile from './components/profile'
import Links from './components/links'

function App() {

  return (
    <div className="App">
      <Profile />
      <div className="cs_my-2">
          <Links id="twitter" href="https://twitter.com/stilkinging">
            stilkinging
          </Links>
      </div>
    </div>
  )
}

export default App

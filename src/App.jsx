import './App.css'
import Profile from './components/profile'
import Links from './components/links'
import Footer from './components/footer'
import github from './assets/github-svg.svg'
import slack from './assets/slack-svg.svg'
import back from './assets/reply.svg'

const links = [
    {id : "twitter", title : "stilkinging", href : "https://twitter.com/stilkinging"},
    {id : "btn_zuri", title : "Zuri Books", hidden: true, href : "https://training.zuri.team/"},
    {id : "book_python", title : "Python Books", href : "http://books.zuri.team/python-for-beginners?ref_id=stilkinging"},
    {id : "pitch", title : "Background Check for Coders", href : "https://background.zuri.team"},
    {id : "book_design", title : "Design Books", href : "https://books.zuri.team/design-rules"}
]

function App() {
 
  return (
    <div className="App">
      <a href="#" className="back">
        <img src={back}  width="20px"/>
      </a>
      <Profile />
      <div className="cs_my-2">
        {links.map((link,i)=><Links key={i} id={link.id} href={link.href}>{link.title}</Links>)}
      </div>
      <div className="cs_my-2">
        <div className="socials">
            <img src={slack} alt="the logo of slack"/>
          <a href="http://github.com/stilkinging">
            <img src={github} alt="the logo of github "/>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

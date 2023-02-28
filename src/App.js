import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Goal from "./components/Goal/Goal";
import './components/Goal/Goal.css'


import "./styles/index.css"
import "./styles/certificates.css"


function App() {
  return (
    <div className="main-container">
      <Header />
      <Profile />

      <div className="certificates-container">
        <button class="view-btn">View Certificates</button>
      </div>

      <div className='goals-container'>
        <Goal text='My goals as a Software Developer' img="./images/goals.jpg" link='https://same-fig-3ec.notion.site/Quick-Note-2ed50e999dda4e01b2e1f019e9f1bbd2' />
        <Goal text='My Projects/Work' img="./images/projects.jpg" link='https://github.com/Kyekini' />
      </div>

      
    </div>
  );
}

export default App;

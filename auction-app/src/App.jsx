
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import LoginContainer from './containers/LoginContainer';
import AddUser from './containers/AddUser';

function App() {

  return (
    <>
      <Navigation />
      <Main />
      <LoginContainer/>
      <AddUser/>
    </>
  )
}

export default App

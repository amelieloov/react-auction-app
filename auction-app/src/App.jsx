
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import LoginContainer from './containers/LoginContainer';
import AddUserContainer from './containers/AddUserContainer';
import UpdateUserContainer from './containers/UpdateUserContainer';
import { GetUser } from './services/UserService';
import { useEffect, useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {

  const {setUser} = useContext(AuthContext);

  useEffect(() => {
    const GetUserInfo = async () => {
      var user = await GetUser();
      setUser(user);
    }

    GetUserInfo();
  }, [])

  return (
    <>
      <Navigation />
      <Main />

       {/* Initially hidden */}
      <LoginContainer/>
      <AddUserContainer/>
      <UpdateUserContainer/>
    </>
  )
}

export default App

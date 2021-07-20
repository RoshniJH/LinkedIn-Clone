import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import {useSelector} from 'react-redux';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { logout,login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      }
      else {
        dispatch(logout());
      }
    });
  }, []);


  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ): (
        <div className="app__body" >
      <Sidebar />
      <Feed />
      <Widgets />
      </div>
      )
    }
      
    </div>
  );
}

export default App;

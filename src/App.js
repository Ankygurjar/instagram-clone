import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Components/HomeComponents/Home'
import { auth, db } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import PostIndex from './Components/PostComponents/PostIndex'
import Header from './Components/Header'
import Spinner from 'react-spinkit'
import UserIndex from './Components/UserComponents/UserIndex';
import { useDispatch } from 'react-redux'
import { currentUser } from './features/appSlice'
import CurrentPost from './Components/PostComponents/CurrentPost'
import Footer from './Components/HomeComponents/HomeFooter'

function App() {

  const [ user, loading ] = useAuthState(auth);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(user){
      db.collection("users")
      .where("userId", "==", user.uid)
      .get()
        .then((doc)=>{
          doc.forEach((item)=>{
            dispatch(currentUser({
              userId: item.data().userId,
              userName: item.data().userName,
              userEmail: item.data().email,
              userProfilePic: item.data().profilePicture
            }))
          })
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }, [user])

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContents>
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (

    <Router>

      <Switch>
        <Route path="/" exact>
          {!user && (
            <Home />
          )}
          {user && (
            <>
              <Header/>
              <PostIndex/>
            </>
          )}
        </Route>
        {user && (
          <>
            <Header/>
              <Route path="/user" component={UserIndex}/>
              <Route path="/currentPost/:id" component={CurrentPost}/>
            <Footer/>
          </>
        )}
        <Home/>
      </Switch>
    </Router>
  );
}

const AppLoading = styled.div`
  
`

const AppLoadingContents = styled.div`
  margin-top: 30%;
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
  }
`

export default App;

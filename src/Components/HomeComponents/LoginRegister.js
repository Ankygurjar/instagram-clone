import React, { useState } from 'react'
import styled from 'styled-components'
import appStore from '../../images/appStore.png'
import playStore from '../../images/playStore.png'
import {FacebookLogin, GoogleLogin, GithubLogin} from '../UserFunctions/Login'
import { auth, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import instaLogo from '../../images/instagramLogo.jpeg'

function LoginRegister() {

    return (

        <LoginRegisterContainer>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
            </style>    

            <LoginContainer>
                <h1>Instagram</h1>
                <img src={instaLogo} alt="Avatar"/>
                <button onClick={GoogleLogin}>
                    Login With Google
                </button>
                <button onClick={GithubLogin}>
                    Login With Github 
                </button>
                <button onClick={FacebookLogin}>
                    Login With Facebook 
                </button>
            </LoginContainer>

            <AppContainer>
                <p>Get the App.</p>
                <img src={appStore} alt="App Store App"/>
                <img src={playStore} alt="Play Store App"/>
            </AppContainer>

        </LoginRegisterContainer>
    )
}

const AppLoading = styled.div`
  
`

const AppLoadingContents = styled.div`
  margin-top: 70%;
  text-align: center;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  > img {
    margin-top: -10px;
    height: 100px;
    padding: 20px;
  }
`

const LoginRegisterContainer = styled.div`
    
`

const LoginContainer = styled.div`
    border: 1px solid lightgray;
    padding:20px;
    margin: 20px;
    width: 100%;
    background-color: white;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 20px;
    > h1 {
        font-family: 'Pattaya', sans-serif;
        align-items: center;
        margin-left: 15%;
    }
    > img {
        display: flex;
        border-radius: 50%;
        height: 84px;
        width: 84px;
        align-items: center;
        margin-bottom: 16px;
        margin-left: 28%;
    }

    >h3{
        text-align: center;
    }

    > button{
        margin:5px;
        color: white;
        font-weight: bold;
        border: none;
        padding: 8px;
        border-radius: 100px;
        cursor:pointer;
        text-transform: capitalize;
        background-color: #0095f6;
        background-color: rgba(var(--d69,0,149,246),1);
    }

    > form{
        display: grid;
        grid-template-columns: auto;
        grid-gap: 10px;
        > input{
            padding: 10px;
            border: 1px solid gray;
            border-radius: 5px;
            font-size: 10px;
            font-weight: 600;
        }

        > button:nth-child(odd){
        margin:5px;
        color: white;
        font-weight: bold;
        border: none;
        padding: 8px;
        border-radius: 100px;
        cursor:pointer;
        background-color: #0095f6;
        background-color: rgba(var(--d69,0,149,246),1);
        }

    }

`

const AppContainer = styled.div`
    width: 80%;
    margin-left: 80px;
    text-align:center;
    > p {
        padding: 0px;
        margin: 2px;
    }

    > img {
        height: 40px;
        width: 100px;
        object-fit: contain;
        margin:5px;
    }

`


export default LoginRegister

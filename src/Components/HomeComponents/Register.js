import React from 'react'
import styled from 'styled-components'
import GTranslateIcon from '@material-ui/icons/GTranslate';
import HomeFooter from './HomeFooter'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <RegisterContainer>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
            </style>  
            <RegisterInner>
                <h1>Instagram</h1>
                <TagLine>
                    <span>
                        Sign up to see photos and videos from your friends
                    </span>
                </TagLine>
                <LoginGoogle>
                    <span>
                        <GTranslateIcon/>
                        <button>Login With Google</button>
                    </span>
                </LoginGoogle>
                <SpanContainer>
                    <span></span>
                    <span>or</span>
                    <span></span>
                </SpanContainer>
                <form>
                    <input
                        placeholder="Enter your Email"
                    />
                    <input
                        placeholder="Enter your Full Name"
                    />
                    <input
                        placeholder="Enter your UserName"
                    />
                    <input
                        placeholder="Enter your PassWord"
                    />
                    <button variant="outlined" color="primary">
                        Sign Up
                    </button>
                </form>
                <span>
                By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                </span>
            </RegisterInner>
            <Login>
                <span>Have and account ? </span>
                <Link to="/">Login</Link>
            </Login>
            <HomeFooter/>
        </RegisterContainer>
    )
}

const RegisterContainer = styled.div`
    background-color: #fafafa;
    background-color: rgba(var(--b3f,250,250,250),1);
    display: grid;
    grid-template-columns: 25%;
    height: auto;
    justify-content: center;
`

const Login = styled.div`
    text-align: center;
    padding: 10px;
    background-color: white;
    border: 1px solid lightgray;
    margin-top:10px;

    > a {
        text-decoration: none;
        color: #0095f6;
        color: rgba(var(--d69,0,149,246),1);
        font-weight: 600;
    }
`

const TagLine = styled.div`
`

const LoginGoogle = styled.div`
    padding: 10px;
    >span{
    background-color: #0095f6;
    background-color: rgba(var(--d69,0,149,246),1);
    display: grid;
    color: white;
    justify-content: center;
    grid-template-columns: auto auto;
    grid-gap: 4px;
    grid-auto-flow: row;
    align-items: center;
    border-radius: 10px;
        
        >button{
            padding:10px;
            font-weight: 700;
            background-color: transparent;
            border: none;
            color: white;
            cursor:pointer;
        }
    }
`


const RegisterInner = styled.div`
    background-color: white;
    border: 1px solid lightgray;
    margin-top: 20px;
    display: grid;
    justify-content: center;
    grid-template-columns: 90%;
    padding-bottom: 3rem;

    > h1 {
        font-family: 'Pattaya', sans-serif;
        text-align: center;
        padding-bottom: 0px;
    }

    div${TagLine}{
        padding: 10px;
        text-align: center;
        > span{
            color: gray;
            font-weight: 800;
        }
    }

    > span {
            margin: 10px;
            color: gray;
            text-align: center;
        }

    > form{
        display: grid;
        grid-gap: 10px;

        > input{
            padding: 10px;
            border: none;
            border: 1px solid lightgray;
            border-radius: 5px;
        }

        > button{
            padding: 10px;
            background-color: #0095f6;
            background-color: rgba(var(--d69,0,149,246),1);
            color: white;
            font-weight: 800;
            border:none;
            border-radius: 10px;
        }
    }
`

const SpanContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 5px;
    text-align: center;
    grid-row-end: span;
    margin: 10px;
    color: #dbdbdb;
    text-transform: uppercase;
    color: rgba(var(--b38,219,219,219),1);  
    font-weight: 800;
    >span:nth-child(odd){
        background-color: #dbdbdb;
        background-color: rgba(var(--b38,219,219,219),1);   
        border-top:1px solid #dbdbdb;;
        position: relative;
        height: 1px;
        top: .60em;
    }
`

export default Register

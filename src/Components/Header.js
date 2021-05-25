import React, { useState} from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import HeaderIcon from './HeaderIcon';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { currentUserId } from '../features/appSlice'
import Logout from './Logout'

function Header() {

    const [user] = useAuthState(auth);

    if(user){
        return (
        
        <HeaderContainer>
            <Logout/>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
            </style>    
            <InnerHeaderContainer>
            <HeaderLeft>
                <Link to="/"><h1>Instagram</h1></Link>
            </HeaderLeft>
            <HeaderRight>
                <Link to="/"><HeaderIcon Icon={HomeIcon}/></Link>
                <HeaderIcon Icon={FavoriteBorderOutlinedIcon}/>
                <HeaderIcon Icon={ExploreOutlinedIcon}/>
                <Link to="/user">
                    <img src={user.photoURL}/>
                </Link>
            </HeaderRight>
            </InnerHeaderContainer>
        </HeaderContainer>

        )
    }else{
        return(
            <div>
            </div>
        )
    }
}

export default Header

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    border-bottom: 1px solid gray;

`

const InnerHeaderContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
`

const HeaderLeft = styled.div`

    > a{
        text-decoration:none;
        color: black;

        >h1 {
            font-family: Pattaya;
            padding: 0;
            margin: 0;
        }
    }
`

const HeaderRight = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;

    >a {
    text-decoration:none;
    color: black;

        > img{
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
        }
    }
`

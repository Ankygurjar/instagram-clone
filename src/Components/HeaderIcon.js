import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { currentUser } from '../features/appSlice'
import { useHistory } from 'react-router-dom'
import { auth } from './../firebase'

function HeaderIcon({Icon, logout}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = async(e) =>{
        e.preventDefault()

        await auth.signOut()
        dispatch(currentUser({
            userEmail: null,
            userId: null,
            userName: null
        }))

        history.push('/')
    }

    return (
        <HeaderIconContainer onClick={logout && handleLogout}>
            {Icon && <Icon  style={{padding: 10}}/>}
        </HeaderIconContainer>
    )
}

export default HeaderIcon

const HeaderIconContainer = styled.div`

    cursor: pointer;

    >.MuiSvgIcon-root{
        cursor: pointer;
    }

    > img {
        width: 44px;
        height: 40px;
        border-radius: 50%;
    }

`


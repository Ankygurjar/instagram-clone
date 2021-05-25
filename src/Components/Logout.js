import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { currentUser } from '../features/appSlice'
import { auth } from './../firebase'

function Logout() {

    const dispatch = useDispatch();
    
    const logout = async () =>{
        console.log("mai hu don")
        await auth.signOut()
        dispatch(currentUser({
            userEmail: null,
            userId: null,
            userName: null
        }))
    }

    return (
        <LogoutContainer>
            <button onClick={
                logout
            }>
                Click Me
            </button>
        </LogoutContainer>
    )
}

export default Logout

const LogoutContainer = styled.div`
`


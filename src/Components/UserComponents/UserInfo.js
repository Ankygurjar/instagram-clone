import React from 'react'
import styled from 'styled-components'

function UserInfo({userProfilePic, userName, userEmail, count}) {

    return (
        <UserInfoContainer>
            <img src={userProfilePic}/>
            <UserDetails>
                <span>
                    {userName}
                </span>
                <span>
                    {userEmail}
                </span>
                <b>{count} posts </b>
            </UserDetails>
        </UserInfoContainer>
    )
}

export default UserInfo

const UserInfoContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 50px;
    align-items: center;

    > img{
        border-radius: 50%;
        
    }
`

const UserDetails = styled.div`
    text-transform: lowercase;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
    font-weight: 500;
`


import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/appSlice'
import User from './User'

function ShowUsers({ userId, curUserDocId, following}) {

    const user = useSelector(selectUser)

    const [users] = useDocument(
        userId && 
        db.collection("users")
        .where("userId", "!=", userId)
        .limit(5)
    )

    return (
        <ShowUsersContainer>
            <InnerContainer>
                <Header>
                    <b>Suggestions For You</b> &nbsp;
                    <Link to="/allUsers">See All</Link>
                </Header>
                { users && (
                    users.docs.map((doc)=>{
                        const { userName, profilePicture, userId } = doc.data()
                        const isFollowing = (following.includes(userId))
                        return(
                            <User key={doc.id}
                                userImage={profilePicture}
                                userName={userName}
                                followingId={userId}
                                isFollowing = {isFollowing}
                                curUserDocId= {curUserDocId}
                            /> 
                        )
                    })
                )}
            </InnerContainer>
        </ShowUsersContainer>
    )
}

export default ShowUsers
/*
const User = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    margin: 10px;
    > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }


    > button {
        border: none;
        cursor: pointer;
        background-color: transparent;
        color: #0095f6;
        font-weight: 900;
    }
`
*/
const ShowUsersContainer = styled.div`
    
`

const InnerContainer = styled.div`
`

const Header = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    > b{
        color: gray;
    }

    > a{
        text-decoration: none;
        color: black;
    }

`

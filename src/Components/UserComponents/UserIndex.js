import React, { useState, useEffect} from 'react'
import UserInfo from './UserInfo'
import styled from 'styled-components'
import AddPost from './AddPost'
import { db } from '../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/appSlice'
import { useDocument } from 'react-firebase-hooks/firestore'
import { Link } from 'react-router-dom'

function UserIndex() {

    const user = useSelector(selectUser)

    const [posts, loading] = useDocument(
        user && user.userId && 
        db.collection("posts")
        .where("userId", "==", user.userId)
    )
    


    return (
        <UserIndexContainer>
            <InnerContainer>
                <UserInfo 
                userProfilePic={user.userProfilePic}
                userName={user.userName} 
                userEmail={user.userEmail}
                count={posts && posts.docs.length}
                />
                <AddPost
                userId = {user.userId}
                />
                <PostContainer>
                    { loading && (
                        <h1 style={{textAlign:"center"}}>Loading your posts.....</h1>
                    )}
                    {
                        posts?.docs.map((post)=>{
                            const {imageUrl} = post.data();
                            const  id  = post.id;
                            return(
                                <Link key={id} to={`/currentPost/${id}`} >
                                    <img  src={imageUrl}/>
                                </Link>
                            )
                        })
                    }
                </PostContainer>
            </InnerContainer>
        </UserIndexContainer>
    )
}

export default UserIndex

const UserIndexContainer = styled.div`
    display: grid;
    grid-template-columns: 70%;
    justify-content: center;
    background-color: #fafafa;
    min-height: 100vh;
    padding-top: 20px;
`

const InnerContainer = styled.div`
    width: 100%;

`
const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 10px;

    @media(max-width: 600px){
        grid-template-columns: auto auto;
    }
    > a > img {
        width: 100%;
        height: 300px;
        border-radius: 3px;
    }
`
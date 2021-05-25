import React, { useState } from 'react'
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import Post from './Post'

function PostIndex() {
    const [user, loading] = useAuthState(auth);
    const [posts, setposts] = useState([
        {
            postId: 1,
            userName: 'Ankit Gurjar',
            imageURL: 'rawImage.jpg',
        }
    ])

    const logout = (e) => {
        auth.signOut();
        e.preventDefault();
    }

    return (
        <PostIndexContainer>
            <Posts>
                {posts.map((post)=>{
                    const { postId, userName, imageURL} = post;
                    return(
                        <Post
                        key={postId}
                        id={postId}
                        userName={userName}
                        imageURL={imageURL}
                        />
                    )
                })}
            </Posts>
        </PostIndexContainer>
    )
}

export default PostIndex

const Posts = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
`

const PostIndexContainer = styled.div`
    background-color: #F0F0F0;
    height: 100vh;
`

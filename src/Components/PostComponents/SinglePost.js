import React from 'react'
import styled from 'styled-components'
import CommentSection from './CommentSection'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'

function SinglePost({ postId,imageUrl, timestamp, caption, userId }) {

    const [fetchUser] = useDocument(
        userId && 
        db.collection("users")
        .where("userId", "==", userId)
    )

    const user = fetchUser && {
        image: fetchUser.docs[0].data().profilePicture,
        name: fetchUser.docs[0].data().userName
    }

    return (
        <SinglePostContainer>
            <InnerContainer>
                <img src={imageUrl}/>
                <PostDetails>
                    <Header>
                        <img src={user?.image} alt="Avatar"/>
                        <span>{user?.name}</span>
                        <span>...</span>
                    </Header>
                    <CommentSection
                    postId={postId}
                    userId={userId}
                    userName={user?.name}
                    />
                </PostDetails>
            </InnerContainer>
        </SinglePostContainer>
    )
}

export default SinglePost

const SinglePostContainer = styled.div`
    padding: 60px;

`

const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.2fr;
    justify-content: center;
    grid-gap: 0px;
    width: 70%;
    margin: auto;
    > img {
        width: 100%;
        height: 550px;
    }

`

const PostDetails = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: auto;
    width: 100%;
`

const Header = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    
    > img{
        border-radius: 50%;
        height: 50px;
    }
`

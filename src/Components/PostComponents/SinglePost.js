import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CommentSection from './CommentSection'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db, storage } from '../../firebase'
import { selectUser } from '../../features/appSlice'
import { useHistory } from 'react-router-dom'

function SinglePost({ postId,imageUrl, timestamp, caption, userId }) {

    const currUser = useSelector(selectUser)
    const history = useHistory();

    const [fetchUser] = useDocument(
        userId && 
        db.collection("users")
        .where("userId", "==", userId)
    )

    const user = fetchUser && {
        image: fetchUser.docs[0].data().profilePicture,
        name: fetchUser.docs[0].data().userName
    }

    const handleDelete = (e) => {
        e.preventDefault()
        if(window.confirm("Are you sure you want to delete this post?. It cannot be undo.")){
            db.collection("posts")
            .doc(postId)
            .delete()
            .then(()=>{
                let pictureRef = storage.refFromURL(imageUrl)
                pictureRef.delete()
                .then(()=>{
                    console.log(true)
                    history.push("/user")
                })
                .catch(err=>console.log(err.message))
            })
        }
    }

    return (
        <SinglePostContainer>
            { postId && imageUrl && (
            <InnerContainer>
                <img src={imageUrl}/>
                <PostDetails>
                    <Header>
                        <img src={user?.image} alt="Avatar"/>
                        <span>{user?.name}</span>
                        {
                            currUser && 
                            (currUser.userId=== userId) &&
                            <button onClick={handleDelete}>
                                Delete this Post
                            </button>
                        }
                    </Header>
                    <p>On <span>{new Date(timestamp?.toDate()).toUTCString()}</span></p>
                    <p>{caption}</p>
                    <CommentSection
                    curUserId={currUser?.userId}
                    postId={postId && postId}
                    userId={userId && userId}
                    userName={user?.name}
                    />
                </PostDetails>
            </InnerContainer>
            )}
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
    >p{
        margin: 0px;
    }
`

const Header = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    height: 50px;
    align-items: center;
    > img{
        border-radius: 50%;
        height: 50px;
    }
`

import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'
import styled from 'styled-components'
import SinglePost from './SinglePost'

function CurrentPost() {

    const postId = useParams().id
    const [post, loading] = useDocument(
        postId &&
        db.collection("posts")
        .doc(postId)
    )

    return (
        <CurrentPostContainer>
            {
                loading && (
                    <h2>Post is loading.....</h2>
                )
            }
            { post && !loading &&(
                <SinglePost
                postId={postId}
                imageUrl={post.data().imageUrl}
                timestamp={post.data().timestamp}
                userId={post.data().userId}
                caption={post.data().caption}
                />
            )}
        </CurrentPostContainer>
    )
}

export default CurrentPost

const CurrentPostContainer = styled.div`
    background-color: #f4f4f4;

    > h2 {
        margin-top: 50px;
        text-align: center;
    }
`


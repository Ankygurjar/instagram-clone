import React, {  } from 'react'
import styled from 'styled-components'
import CommentSection from './CommentSection'
//import userImage from './../../images/rawImage.jpg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Dummy from '../../images/dummy.png'

function Post({ postId, imageURL, by, userProfilePic, caption, curUserName, timestamp,curUserId, userId}) {

    let postBy = userId === curUserId ? "Me" : by;
    console.log(timestamp)
    return (
        <PostContainer>
            <InnerContainer>
                <Header>
                    <img alt="Avatar" src={userProfilePic ? userProfilePic : Dummy}/>
                    <b>{postBy}</b>
                    <MoreHorizIcon/>
                </Header>
                <img src={imageURL} alt="post"/>
                <p>On <span>{new Date(timestamp?.toDate()).toUTCString()}</span></p>
                <p>{caption}</p>
                <CommentSection 
                postId={postId}
                curUserId={curUserId}
                curUserName={curUserName}
                />
            </InnerContainer>
        </PostContainer>
    )
}

export default Post

const PostContainer = styled.div`
    background-color: white;
    border: 1px solid lightgray;
    margin: 15px;
`

const Header = styled.div`

    display: grid;
    grid-template-columns: 4fr 4fr 1fr;
    align-items: center;
    padding: 5px;

    > img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: contain;
    }
    >b{
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    }

    > .MuiSvgIcon-root{
    
    }
`

const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-gap:0px;
    >p{
        margin:4px;
        >span{
            color: gray;
        }
    }
    >img{
        width: 100%;
        height: 400px;
        object-fit: cover;
        padding: 0px;
        margin: 0px;
    }

`

import React, { useState } from 'react'
import styled from 'styled-components'
import CommentSection from './CommentSection'
import userImage from './../../images/rawImage.jpg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post({ postId, userName, imageURL}) {

    return (
        <PostContainer>
            <InnerContainer>
                <Header>
                    <img src={userImage}/>
                    <b>{userName}</b>
                    <MoreHorizIcon/>
                </Header>
                <img src={`/images/${imageURL}`} alt="post"/>
                <CommentSection />
            </InnerContainer>
        </PostContainer>
    )
}

export default Post

const PostContainer = styled.div`
    background-color: white;
    margin-top: 50px;
    border: 1px solid gray;
`

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    grid-gap: 10px;
    margin: 10px;
    align-items: center;

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
    width: 100%;
    >img{
        width: 100%;
        height: 400px;
        object-fit: cover;
        padding: 0px;
        margin: 0px;
    }

`

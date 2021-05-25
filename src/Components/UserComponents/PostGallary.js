import React from 'react'
import styled from 'styled-components'

function PostGallary({ imageUrl}) {
    return (
        <PostGallaryContainer>
            <img src={imageUrl}/>
        </PostGallaryContainer>
    )
}

export default PostGallary

const PostGallaryContainer = styled.div`

`


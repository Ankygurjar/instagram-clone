import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'
import { Link } from 'react-router-dom'

function Posts({ imageUrl }) {

    return (
        <PostsContainer>

            <Link ><img src = {imageUrl}/></Link>

        </PostsContainer>
    )
}

export default Posts

const PostsContainer = styled.div`
    
    > img { 
        width: 100%;
    }
`


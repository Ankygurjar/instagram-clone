import React, { useState } from 'react'
import styled from 'styled-components'
import { firebase, storage, db } from './../../firebase'

function AddPost({ userId }) {

    const [caption, setcaption] = useState('');
    const [postPicture, setpostPicture] = useState(null)
    const [progress, setProgress] = useState(0);

    const handleChange = (event) => {
        event.preventDefault();
        if(event.target.files[0]){
            setpostPicture(event.target.files[0]);
        }
    }

    const handlePost = (event) => {
        event.preventDefault();
        const uploadTask = storage.ref(`images/${postPicture.name}`)
            .put(postPicture);
        uploadTask.on(
            "state_changed", 
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            }, 
            (error) => {
                console.log(error.message)
            },
            () => {
                storage
                    .ref("images")
                    .child(postPicture.name)
                    .getDownloadURL()
                    .then((url)=>{
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            userId: userId
                        })
                    })
                
            }
        )
        setcaption("")
        setProgress(0)
        setpostPicture(null)
    }

    return (
        <AddPostContainer>
            <h3> Add New Post </h3>
            <form>
                <input className="test"
                onChange={(event)=>{
                    event.preventDefault();
                    setcaption(event.target.value)
                }}
                placeholder="enter the caption"/>
                <input type="file" onChange={handleChange}/>
                <button 
                
                disabled={!caption && !postPicture}
                type="submit"
                onClick={handlePost}
                > Add Post </button>
            </form>
        </AddPostContainer>
    )
}

export default AddPost

const AddPostContainer = styled.div`
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 10px 0px;

    > form{
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;
        grid-gap: 10px;
        align-items: center;

        @media(max-width: 600px){
            grid-template-columns: auto;
        }

        > input{
            border: none;
            outline: none;
            background-color: transparent;
        }
        > .test{
            border-bottom: 1px solid lightgray;
        }
        > button{
            border: none;
            padding: 10px;
            font-weight: 600;
            background-color: transparent;
            color: #0095f6;
            cursor: pointer;
        }
    }
`


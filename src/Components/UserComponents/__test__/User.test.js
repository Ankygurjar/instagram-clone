import React from 'react'
import ReactDOM from 'react-dom'
import UserIndex from '../UserIndex'

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<UserIndex></UserIndex>, div)
})
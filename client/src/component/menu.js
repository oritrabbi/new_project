import React from 'react'
import {Link} from 'react-router-dom'
export default function Menu(){
    return(
        <ul>
            <li >
                <Link to="/First">first</Link>
            </li>
            <li >
                <Link to="/Second">second</Link>  
            </li>
            <li >
                <Link to="/Third">third</Link>
            </li>
        </ul>
    )
}
import React from 'react';

export default function Header(props){
    return(
        <nav>
            <h1>Hello! Welcome to our list of things!</h1>
            <p>Current things count: {props.count}</p>
        </nav>
    )
}

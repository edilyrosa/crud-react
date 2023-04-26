import React, { useState, useEffect } from 'react';

function Message({msj, bgColor}) {

    let style ={
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor
    }
    return (  
        <vid>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={style} > <p>{msj}</p> </div>
        </vid>
     
    );
}

export default Message;
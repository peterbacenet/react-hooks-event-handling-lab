import React from "react"
function KeyPad () {
    return (
        <input onChange={() => console.log('Entering password...')} type="password">

        </input>
    )
}

export default KeyPad;
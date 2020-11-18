import React from 'react'
const Samarth = (props) => {
    let count = 1
    const handleClick = ()=>{
        console.log(`Clicked ${props.name}: ${count} times`);
        count++
    }
    return (
        <React.Fragment>
            <h1 onClick={handleClick} >This component name is {props.name} and it is a functional component</h1>
            <h4>{props.thisIsProp}</h4>
        </React.Fragment>
    )
}
export default Samarth
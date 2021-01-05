import React from 'react'

const Button=(props)=>{
    const iconToDisplay=props.iconToDisplay;
    const buttonLabel=props.buttonLabel;
    const handleClick=props.handleClick;
    const className=props.className;
   
    return(<>
     <button className={`btn btn-default btnMargin ${className}`} onClick={handleClick}>
    {iconToDisplay}{buttonLabel}</button> 
               
    </>);
}
export default Button;

import React from 'react';

const Input = (props)=>{
    var  onChange 
    if(props.onChange != null){
        onChange = props.onChange; 
    }else{
        onChange = "";
    }
    return (
        
        <input id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} autoComplete={props.autoComplete}
        className={props.className}
        required = {props.required} 
        value={props.value}
        
        onChange={onChange}/>
    )

}

export default Input;
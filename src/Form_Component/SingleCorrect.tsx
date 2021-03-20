import React, { MouseEvent } from "react";
import {useState} from "react";
import { Question } from "../AtomicComponent/QuestionAndDescription";
export function SingleCorrect(props:any){

    var [selected,setSelected]=useState(-1);
    var selectedOptions=new Array(props.options.length);
    selectedOptions.fill(false);
    
    var [selectedOption,setSelectedOption]=useState(selectedOptions);


    function changeOption(event:React.ChangeEvent<HTMLInputElement>|React.MouseEvent<HTMLButtonElement>){

        var indexId:string=(event.target as HTMLElement).id;

        if(indexId==="clearSelection")
        {
            if(props.required==="1")
            {
                let parent;
                parent=(event.target as HTMLElement).parentNode as HTMLElement;
                parent.style.border="2px solid red";
            }
           selectedOptions.fill(false);
           setSelectedOption(selectedOptions);
           setSelected(-1);
           props.handler("");
           return;
        }
        var index:number=parseInt(indexId);
        if(selectedOption[index]===true)
        {
            if(props.required==="1")
            {
                let parent;
                parent=(event.target as HTMLElement).parentNode as HTMLElement;
                (parent.parentNode as HTMLElement).style.border="2px solid red";
            }
           selectedOptions.fill(false);
           setSelectedOption(selectedOptions);
           setSelected(-1);
           props.handler("");
        }
        else
        {
            if(props.required==="1")
            {
                let parent;
                parent=(event.target as HTMLElement).parentNode as HTMLElement;
                (parent.parentNode as HTMLElement).style.border="1.5px solid black";
            }
            selectedOption.fill(false);
            selectedOption[index]=true;
            setSelected(index);
            props.handler(props.options[index]);
        }

    }

    return(
        <div id="SingleCorrectContainer">
            
            <Question question={props.question} required={props.required} isDespcription={props.isDespcription} description={props.description}/>

            {props.options.map((x:string,i:number)=>{
                return(
                    <div key={i} style={{display:"flex",padding:"10px",alignItems:"center"}}>
                        <input id={i.toString()} type="checkbox" onChange={changeOption} checked={selectedOption[i]}></input>
                        <label style={{fontSize:"1.2vw"}}>{x}</label>
                    </div>
                );
            })}
            {selected!==-1 && <button id="clearSelection" onClick={changeOption} style={{marginLeft:"40vw",height:"3vh",fontSize:"1.5vh"}}>Clear Selection</button>}


        </div>
    );

}
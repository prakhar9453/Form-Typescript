import React from"react";
import { Question } from "../AtomicComponent/QuestionAndDescription";

export function LongAnswer(props:any){

    function setValueAndIsRequired(event:React.FocusEvent<HTMLTextAreaElement>){

        if(props.required==="1"){
            
            var parent;

            if((event.target as HTMLTextAreaElement).value==="")
            {
            parent=(event.target as HTMLTextAreaElement).parentNode as HTMLElement;
            parent.style.border="2px solid red";
            }
            else
            {
                parent=(event.target as HTMLTextAreaElement).parentNode as HTMLElement;
                parent.style.border="1.5px solid black";
            }   
        }

        var textArea=event.target as HTMLElement;
        textArea.style.height="0px";
        var height=textArea.scrollHeight;
        textArea.style.height=height+"px";
        props.handler((event.target as HTMLTextAreaElement).value);
    }
    function checkIsRequired(event:React.FocusEvent<HTMLTextAreaElement>){

        var parent;
    
        if(props.required==="1"){

            if((event.target as HTMLTextAreaElement).value==="")
            {
                parent=(event.target as HTMLTextAreaElement).parentNode as HTMLElement;
                parent.style.border="2px solid red";
            }
            else
            {
                parent=(event.target as HTMLTextAreaElement).parentNode as HTMLElement;
                parent.style.border="1.5px solid black";
            }
        }
    }
    return(
        <div id="LongAnswerContainer">
            
           <Question question={props.question} required={props.required} isDespcription={props.isDespcription} description={props.description}/>
           
           <textarea 
           onBlur={checkIsRequired} 
           onChange={setValueAndIsRequired} 
           rows={1}
           style={{resize:"none",padding:"5px",marginTop:"0.5vh",boxSizing:"border-box" ,fontSize:"1vw",width:"40vw",border:"none",borderBottom:"1px solid black",outline:"none"}} 
           value={props.value} />
        </div>
    );

}
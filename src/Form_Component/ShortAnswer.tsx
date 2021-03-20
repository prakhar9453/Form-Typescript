import {Question} from  "../AtomicComponent/QuestionAndDescription";
export function ShortAnswer(props:any){

    function setValueAndIsRequired(event:React.FocusEvent<HTMLInputElement>){

        if(props.required==="1"){
            
            var parent;

            if(event.target.value==="")
            {
            parent=(event.target as HTMLElement).parentNode as HTMLElement;
            parent.style.border="2px solid red";
            }
            else
            {
                parent=(event.target as HTMLElement).parentNode as HTMLElement;
                parent.style.border="1.5px solid black";
            }   
        }

        props.handler(event.target.value);
    }
    function checkIsRequired(event:React.FocusEvent<HTMLInputElement>){

        var parent;
    
        if(props.required==="1"){

            if(event.target.value==="")
            {
                parent=(event.target as HTMLElement).parentNode as HTMLElement;
                parent.style.border="2px solid red";
            }
            else
            {
                parent=(event.target as HTMLElement).parentNode as HTMLElement;
                parent.style.border="1.5px solid black";
            }


            if(props.validPhone!==undefined)
            {
                if(!props.validPhone)
                {
                    parent=(event.target as HTMLElement).parentNode as HTMLElement;
                    parent.style.border="2px solid red";
                }
            }
            
        }
    }
    return(
        <div id="ShortAnswerContainer" >

           <Question question={props.question} required={props.required} isDespcription={props.isDespcription} description={props.description}/>
           
           <input type="text" onBlur={checkIsRequired} onChange={setValueAndIsRequired} style={{fontSize:"1vw",width:"20vw",height:"3vh",border:"none",borderBottom:"1px solid black",outline:"none"}} value={props.value}/>
           {props.validEmail===false && <p style={{fontSize:"1vw",color:"red"}}>Please enter a valid email address</p>}
           {props.validPhone===false && <p style={{fontSize:"1vw",color:"red"}}>Please enter a valid Phone Number</p>}
        </div>
    );

}
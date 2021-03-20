export function SubHeader(props:any){

    
    return(
        <div id="SubHeaderContainer">
           <p style={{fontSize:"1.4vw",margin:"3px"}}>
               {props.heading}
           </p>
           {props.isDespcription==="1" && <p style={{fontSize:".8vw",margin:"2px"}}>{props.description}</p>}
        </div>
    );

}
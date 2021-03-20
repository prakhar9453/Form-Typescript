export function FormDetails(props:any){

    var email="mailto:"+props.email;
    return(
        <div id="FormDetailsContainer">
            <p style={{fontSize:"1.5vw"}}>{props.name}</p>
            <p style={{fontSize:"1.2vw",}}>{props.details}
            <a href={email} style={{textDecoration:"none"}}>{props.email}</a>
            </p>
            <p style={{color:"red"}}>*Required</p>
        </div>
    );

}
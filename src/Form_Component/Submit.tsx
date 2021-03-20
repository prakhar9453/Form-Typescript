export function Submit(props:any){

    return(

        <div id="SubmitContainer">
            <button style={{width:"10vw",height:"5vh",backgroundColor:"white",outline:"none"}} onClick={(event)=>props.handler(event)}>Submit</button>
        </div>
        
    );

}
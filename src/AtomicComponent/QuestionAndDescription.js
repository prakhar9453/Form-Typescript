export function Question(props){

    console.log(props);

    return(
        <div id="QuestionandDescriptionContainer">
           <p  id="Question">{props.question}
           {props.required==="1" && <b id="isRequired">*</b>}
           </p>
           {props.isDespcription==="1" && <p id="QuestionDescription">{props.description}</p>}
        </div>
    );

}
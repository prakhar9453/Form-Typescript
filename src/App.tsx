import {FormHeader} from "./Form_Component/FormHeader"
import {FormDetails} from "./Form_Component/FormDetails"
import { SingleCorrect } from "./Form_Component/SingleCorrect";
import {useState} from "react";
import { MultipleCorrect } from "./Form_Component/MultipleCorrect";
import { ShortAnswer } from "./Form_Component/ShortAnswer";
import { LongAnswer } from "./Form_Component/LongAnswer";
import { Submit } from "./Form_Component/Submit";
import { SubHeader } from "./Form_Component/SubHeader";

export function App(){

    var customerType=["I am a new customer","I am an exsisting customer"];
    var [customer,setCustomer]=useState("");

    var [orderNo,setOrderNo]=useState("");

    var colorType=["Red","Blue","Yellow","Green"];
    var [color,setColor]=useState([]);

    var [ProductDetail,setProductDetail]=useState("");

    var [name,setName]=useState("");

    var [phone,setPhone]=useState("");
    var [validPhone,setValidPhone]=useState(true);
    function ValidateandSetPhone(phone:string){

        var element,firstChild;
        setPhone(phone);
        var re = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        var result=re.test(phone);
        if(phone!=="")
        setValidPhone(result);
        else
        setValidPhone(true);

        if(result)
        {
            element=document.getElementById("phone") as HTMLElement;
            firstChild=element.childNodes as NodeListOf<HTMLElement>;
            firstChild[0].style.border="1.5px black solid";

        }
        else
        {
            element=document.getElementById("phone") as HTMLElement;
            firstChild=element.childNodes as NodeListOf<HTMLElement>;
            firstChild[0].style.border="2px red solid";

        }
    }

    var [email,setEmail]=useState("");
    var [validEmail,setValidEmail]=useState(true);

    function ValidateandSetEmail(email:string){

        var element,firstChild;

        setEmail(email);
        var re = /\S+@\S+\.\S+/;
        var result=re.test(email);
        if(email!==""){
         setValidEmail(result);
        }
         else
         setValidEmail(true);

        if(result || email==="")
        {
            element=document.getElementById("email") as HTMLElement;
            firstChild=element.childNodes as NodeListOf<HTMLElement>;
            firstChild[0].style.border="1.5px black solid";

        }
        else
        {
            element=document.getElementById("email") as HTMLElement;
            firstChild=element.childNodes as NodeListOf<HTMLElement>;
            firstChild[0].style.border="2px red solid";

        }
    }

    var contactType=["E-Mail","Mobile"];
    var [contact,setContact]=useState([]);

    var [question,setQuestion]=useState("");

    function validation(event:Event){
        
        event.preventDefault();
        var errorArray=[];
        var element;

       
        if(orderNo==="")
        {
            element=document.getElementById("orderNo") as HTMLElement;
            errorArray.push(element);
        }
        if(color.length===0)
        {
            element=document.getElementById("color") as HTMLElement;
            errorArray.push(element);
        }
        if(name==="")
        {
            element=document.getElementById("name") as HTMLElement;
            errorArray.push(element);
        }
        if(phone==="" || !validPhone)
        {
            element=document.getElementById("phone") as HTMLElement;
            errorArray.push(element);
        }
        if(!validEmail)
        {
            element=document.getElementById("email") as HTMLElement;
            errorArray.push(element);
        }
        if(contact.length===0)
        {
            element=document.getElementById("contactType") as HTMLElement;
            errorArray.push(element);
        }

        for(var i=0;i<errorArray.length;i++)
        {
            var firstChild=errorArray[i].childNodes as NodeListOf<HTMLElement>;
            firstChild[0].style.border="2px red solid";
        }
        if(errorArray.length!==0)
        {
            errorArray[0]!.scrollIntoView();
            return;
        }
        else
        {
            window.location.reload();
        }

    }
    

    return(
    <form>
        <div id="formHeader">
            <FormHeader url="https://i.pinimg.com/originals/f3/95/c6/f395c6aec3c2c0dd491914a863f4ae8f.jpg"/>
        </div>
        <div id="formDetail">
            <FormDetails name="Order Details" details="After you fill out this order request, we will contact you to go over details and availability before the order is completed. If you would like faster service and direct information on current stock and pricing please contact us at Contact us at (123) 456-7890 or " email="no_reply@example.com"/>
        </div>
        <div id="customerType">
            <SingleCorrect question="Are you a new or existing customer?" options={customerType} handler={setCustomer}/>
        </div>
        <div id="orderNo">
            <ShortAnswer question="What is the item you would like to order?" required="1" isDespcription="1" description=" Please enter the order no." handler={setOrderNo}/>
        </div>
        <div id="color">
            <MultipleCorrect question="What color(s) would you like to order?" options={colorType} handler={setColor} required="1"/>
        </div>
        <div id="product">
            <LongAnswer question="Product options" handler={setProductDetail} value={ProductDetail} isDespcription="1" description="Choose size and number per color"/>
        </div>
        <div id="contactSubHeader">
            <SubHeader heading="Contact Details" isDespcription="1" description="Enter Your Personal Contact Details"/>
        </div>
        <div id="name">
            <ShortAnswer question="Enter your Name?"  handler={setName} value={name} required="1"/>
        </div>
        <div id="phone">
            <ShortAnswer question="Enter your Phone No.?"  handler={ValidateandSetPhone} value={phone} required="1" validPhone={validPhone}/>
        </div>
        <div id="email">
            <ShortAnswer question="Enter your Email?"  handler={ValidateandSetEmail} value={email} validEmail={validEmail} />
        </div>
        <div id="contactType">
            <MultipleCorrect question="Preferred contact method ?" options={contactType} handler={setContact} required="1"/>
        </div>
        <div id="question">
            <LongAnswer question="Questions and Comment" handler={setQuestion} value={question}/>
        </div>
        <div>
            <Submit handler={validation}/>
        </div>

    </form>
    );
}

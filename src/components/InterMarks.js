import React, { useEffect, useRef } from 'react'

function InterMarks() {

    let lastNameInputRef =useRef();
    let firstNameInputRef = useRef();
    let rsgInputRef = useRef();
    
    let engInputRef =useRef();
    let hinInputRef =useRef();
    let telInputRef =useRef();
    let mathsInputRef =useRef();
    let sciInputRef =useRef();
    let socInputRef =useRef();

    let phoneInputRef = useRef();
    let emailInputRef =useRef();

    let resultParaRef = useRef();


   
    // for assignning the values i am creating this
    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let rsgResultRef = useRef();
    
    let engResultRef = useRef();
    let hinResultRef = useRef();
    let telResultRef = useRef();
    let mathsResultRef = useRef();
    let sciResultRef = useRef();
    let socResultRef = useRef();

    
    let phoneResultRef =useRef();
    let emailResultRef =useRef();

    let nameRegEx = /^[A-Za-z]+(([',. -][A-Za-z ])?[A-Za-z]*)*$/;
    let ResgistrationRegEx =/[A-Z]{5}\d{5}$/;
    let phoneRegEx =/^(\+91[\-\s]?)?[789]\d{9}$/;
    let emailRegEx =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    useEffect(() =>{
       alert("Welcome to our application");
    },[]);
    
    
   let ValidateName = (nameStr,resultRef)=>{

    let result = nameRegEx.test(nameStr);

    if(result ==true){
       resultRef.current.innerHTML ="Valid";
       resultRef.current.style.backgroundColor= " pink";

    }else{
        resultRef.current.innerHTML ="inValid";
        resultRef.current.style.backgroundColor= "Red";
       
    }
   }
   let ValidateRegistration = (regStr,resultRef)=>{

    let result = ResgistrationRegEx.test(regStr);

    if(result ==true){
       resultRef.current.innerHTML ="InValid";
       resultRef.current.style.backgroundColor= " red";

    }else{
        resultRef.current.innerHTML ="Valid";
        resultRef.current.style.backgroundColor= "pink";
       
    }
   }
   let ValidatePhone = (phoneStr,resultRef)=>{

    let result = phoneRegEx.test(phoneStr);

    if(result ==true){
       resultRef.current.innerHTML ="Valid";
       resultRef.current.style.backgroundColor= " pink";

    }else{
        resultRef.current.innerHTML ="InValid";
        resultRef.current.style.backgroundColor= "Red";
       
    }
   }

    let Validateemail = (emailStr, resultRef) =>{
        let result = emailRegEx.test(emailStr);

    if(result == true){
       resultRef.current.innerHTML ="Valid";
       resultRef.current.style.backgroundColor="pink";
    }else{
        resultRef.current.innerHTML ="InValid";
        resultRef.current.style.backgroundColor="red";
    }
    }



    
  return (
    <div className='formDiv'>

        
        <form>
             <caption>Inter Marks</caption>
        <div>
           <legend> Personal details
            <div>
             
                <label>First Name</label>
                <input type="text" ref={firstNameInputRef}
                  onChange={() =>{
                    ValidateName(firstNameInputRef.current.value,firstNameResultRef);
                  }}
                ></input>
                <span ref={firstNameResultRef}></span>
            </div>
            
            <div>
                <label>Last Name</label>
                <input type="text" ref={lastNameInputRef}
                onChange={() =>{
                  ValidateName(lastNameInputRef.current.value,lastNameResultRef);
                }}
                ></input>
                <span ref={lastNameResultRef}></span>
            </div>

            <div>
                <label>Resgistration Number</label>
                <input type="text" ref={rsgInputRef}
                                onChange={() =>{
                                    ValidateRegistration(rsgInputRef.current.value,rsgResultRef);
                                  }}
                ></input>
                <span ref={rsgResultRef}></span>
            </div>

            
            <div>
                <label>Phone Number</label>
                <input type="Number" ref={phoneInputRef}
                        onChange={() =>{
                            ValidatePhone(phoneInputRef.current.value,phoneResultRef);
                        }}
            ></input>
                <span ref={phoneResultRef}></span>
            </div>

            <div>
                <label>Email </label>
                <input type="email" ref={emailInputRef}
                    onChange={() =>{
                        Validateemail(emailInputRef.current.value,emailResultRef);
                    }
                    }
                ></input>
                <span ref={emailResultRef}></span>
            </div>
            </legend>
       </div>

            <div>
                <label>English</label>
                <input type="Number" 
                ref={engInputRef}
                onFocus={() =>{
                    console.log("English-onFocus")
                    engInputRef.current.style.backgroundColor="Pink"
                }}
                onChange={() =>{
                engResultRef.current.innerHTML = engInputRef.current.value >= 35? "Pass" :"Fail";
                engResultRef.current.style.backgroundColor="light-green";
                engResultRef.current.style.backgroundColor=engInputRef.current.value >= 35? "Green" :"red";;
                
                }}
                onBlur={() =>{
                    console.log("English-onBlur")
                    engInputRef.current.style.backgroundColor=""
                }}
                
                
                ></input>
                <span ref={engResultRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input type="Number" ref={hinInputRef}
                                onFocus={() =>{
                                    console.log("Hindi-onFocus")
                                    hinInputRef.current.style.backgroundColor="Pink"
                                }}
                                onChange={() =>{
                                    hinResultRef.current.innerHTML = hinInputRef.current.value >= 35? "Pass" :"Fail";
                                    hinResultRef.current.style.backgroundColor="light-green";
                                    hinResultRef.current.style.color=hinInputRef.current.value >= 35? "green" :"red";
                                }}
                                onBlur={() =>{
                                    console.log("Hindi-onBlur")
                                    hinInputRef.current.style.backgroundColor=""
                                }}
                ></input>
                 <span ref={hinResultRef}> </span>
            </div>
            <div>
                <label>Telugu</label>
                <input type="Number" ref={telInputRef}
                                  onFocus={() =>{
                                    console.log("Telugu-onFocus")
                                    telInputRef.current.style.backgroundColor="Pink"
                                }}
                                onChange={() =>{
                                    telResultRef.current.innerHTML = telInputRef.current.value >= 35? "Pass" :"Fail";
                                    telResultRef.current.style.backgroundColor="light-green";
                                    telResultRef.current.innerHTML=telInputRef.current.value >= 35? "🌝" :"😞";
                                }}
                                onBlur={() =>{
                                    console.log("Telugu-onBlur")
                                    telInputRef.current.style.backgroundColor=""
                                }}
                ></input>
                 <span ref={telResultRef}></span>
            </div>
            <div>
                <label>science</label>
                <input type="Number" ref={sciInputRef}
                                onFocus={() =>{
                                    console.log("Science-onFocus")
                                    sciInputRef.current.style.backgroundColor="Pink"
                                }}
                                onChange={() =>{
                                    console.log("science-onChange")
                                    sciInputRef.current.style.backgroundColor="gray"
                                    sciResultRef.current.innerHTML = sciInputRef.current.value >= 35? "Pass" :"Fail";
                                    sciResultRef.current.style.backgroundColor="light-green";
                                    sciResultRef.current.innerHTML=sciInputRef.current.value >= 35? "🌝" :"😞";
                                }}
                                onBlur={() =>{
                                    console.log("science-onBlur")
                                    sciInputRef.current.style.backgroundColor=""
                                }}
                ></input>
                 <span ref={sciResultRef}></span>
            </div>
            <div>

                <label>social</label>
                <input type="Number" ref={socInputRef}
                                onFocus={() =>{
                                    console.log("social-onFocus")
                                    socInputRef.current.style.backgroundColor="Pink"
                                }}
                                onChange={() =>{
                                    socResultRef.current.innerHTML = socInputRef.current.value >= 35? "Pass" :"Fail";
                                    socResultRef.current.style.backgroundColor="light-green";
                                    socResultRef.current.innerHTML=socInputRef.current.value >= 35? "🌝" :"😞";
                                }}
                                onBlur={() =>{
                                    console.log("Social-onBlur")
                                    socInputRef.current.style.backgroundColor=""
                                }}
                ></input>
                 <span  ref={socResultRef}></span>
            </div>
            <div>
                <label>maths</label>
                <input type="Number" ref={mathsInputRef}
                                onFocus={() =>{
                                    console.log("maths-onFocus")
                                    mathsInputRef.current.style.backgroundColor="Pink"
                                }}
                                onChange={() =>{
                                    mathsResultRef.current.innerHTML = mathsInputRef.current.value >= 35? "Pass" :"Fail";
                                    mathsResultRef.current.style.backgroundColor="light-green";
                                    mathsResultRef.current.innerHTML=mathsInputRef.current.value >= 35? "🌝" :"😞";
                                }}
                                onBlur={() =>{ 
                                    console.log("maths-onBlur")
                                    mathsInputRef.current.style.backgroundColor=""
                                }}
                ></input>
                 <span  ref={mathsResultRef}></span>
            </div>
            <div>
            <button 
            type="button" onClick={()=>{
                let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks= Number(engInputRef.current.value);
                let hinMarks= Number(hinInputRef.current.value);
                let telMarks= Number(telInputRef.current.value);
                let sciMarks= Number(sciInputRef.current.value);
                let socMarks= Number(socInputRef.current.value);
                let mathsMarks= Number(mathsInputRef.current.value);
    
               
                let totalMarks =engMarks+ telMarks+ hinMarks+ sciMarks+ socMarks+mathsMarks;

                //engInputRef.current.value=7777666;
                // engInputRef.current.value;
                // hinInputRef.current.value;
                // telInputRef.current.value;
                // sciInputRef.current.value;
                // socInputRef.current.value;
                // mathsInputRef.current.value;
                alert(` ${firstName} ${lastName}Total Marks are ${totalMarks}`);
                resultParaRef.current.innerHTML=` ${firstName} ${lastName} Total Marks are  ${totalMarks}`;
               
            }} >Calculate Result
            </button>
            </div>
            <p ref={resultParaRef}>Please Enter values and Click Calculate</p>
        </form>
    </div>
  )
}


export default InterMarks
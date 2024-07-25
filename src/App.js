import logo from './logo.svg';
import './App.css';
import InterMarks from './components/InterMarks';


function App() {
    let CalculateMidMarks =( engMarks,telMarks,hindiMarks,sciMarks,socMarks,mathsMarks)=>{
    let totalMarks= engMarks+telMarks+hindiMarks+sciMarks+socMarks+mathsMarks;
    let passMarks=35;
    let result;

    if( engMarks>=passMarks &&
      telMarks>=passMarks &&
      hindiMarks>=passMarks &&
      sciMarks>=passMarks &&
      socMarks>=passMarks &&
      mathsMarks>=passMarks ){
      result ="fail";
    }else{
       result ="pass";
    }
    
    let perc =(totalMarks/600) *100;
    
    let totalall ={
      total:totalMarks,
      perc: perc.toFixed(3),
      result:result,
    }
    return totalall;
    }



  let result= CalculateMidMarks( 99,88,77,66,11,100);
  console.log(result)


  return (
    <div className="App">
    <InterMarks/>
    <h1>Function with return type</h1>
    <p> In this i am working function with returm type i.e it return some value</p>
   

    </div>
  );
}

export default App;

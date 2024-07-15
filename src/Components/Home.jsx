import  React , {useState} from 'react'

const Home = () => {

    const [inputValue , setInputValue]=useState(0);
    // console.log(inputValue)
    // let inputValue=0;

    const increment=()=>{
        setInputValue(inputValue+1);
    }
    const decrement=()=>{
        setInputValue(inputValue-1);
    }

    const btnStyle={
        padding:"20px",
        border:"1px solid black",
        backgroundColor:"#f1f1f1",
        margin:"10px"
    }

  return (
    <div>
      <input style={{padding : "20px",border:"2px solid red" , marginTop:"25px"}} type="number" placeholder='Enter the value' 
      value={inputValue}
      />

      <button style={btnStyle} onClick={increment}>+</button>
      <button style={btnStyle} onClick={decrement}>-</button>
    
     </div>
  )
}

export default Home

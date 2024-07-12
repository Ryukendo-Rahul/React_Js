
import './App.css';


function MyComponent({name , giveClass, income=0} ){
  return ( 
<>
  <div className={giveClass} >
    {name}: $ {income}</div>
  <hr/>
  </>
 );
}

function App() {
  return (
   <div>
    Hello <MyComponent name={"Abhi"} income={"234"} giveClass="comp1" />  
    <MyComponent name={"Satya"} giveClass="comp2"/> 
     <MyComponent name={"Simmi"} income={"5634"} giveClass="comp3"/> 

   </div>
  );
}

export default App;


import {Number} from "./Number";

//let array=arr()
function App() {
  return (
    <div className="App">
      {arr.map((post,index)=>
      <Number key={index}
              num={post}
             />
      )
          }   

    </div>
  );
}


let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

export default App;


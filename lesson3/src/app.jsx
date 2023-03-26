import { useState } from "react"
import Avatar from "./components/avt"

// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
const user = {
    name: "Tran Van D",
    age: 20,
    image: "https://picsum.photos/id/237/100/100"
}
const App = () => {
   const [counter, setCounter] = useState("logo192.png")
   //counter
   function increase(){
       setCounter("logo512.png")
   }
   console.log(counter);
   return <div>
      <img src={counter} alt="" onClick={increase} />
   </div>

}

export default App


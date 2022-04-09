import { useState } from "react";
const Home = () => {
    const [name, setName] = useState("Mario");
    const [age, setAge]= useState(25);


    const handleClick =(e) =>{
       setName("Luigi");
        console.log("Hello " + {name}  +" !", e)
    }
    const handleClickAgain = (name, e) => {
       console.log("Hi"  + {name}, e);
       console.log("Hello " + {name}  +" !", e)
       setAge(30);
    } 
        return ( 
        <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        <p>{name}</p>
        <p>I guess you are  + {age} + years old!</p>
        <button onClick={(e) => handleClickAgain("Spiderman", e)}>Click me Again</button>
        </div>
     );
}
 
export default Home;
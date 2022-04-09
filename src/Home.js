const Home = () => {
    const handleClick =(e) =>{
        console.log("Hello Bob!", e)
    }
    const handleClickAgain = (name, e) => {
       console.log("Hi"  + name, e);
    } 
        return ( 
        <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => handleClickAgain("Spiderman", e)}>Click me Again</button>
        </div>
     );
}
 
export default Home;
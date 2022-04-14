import { useState } from "react";
import { useNavigate } from "react-router-dom";

const  Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Yoshi')
  const [isPending, setIspending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const blog= { title, body, author};
    setIspending(true)

    fetch('http://localhost:8000/blogs', {
      method :'POST',
      headers :{ "Content-Type":"application/json"},
      body: JSON.stringify(blog)
    }).then(() =>{
      console.log("New blog added")
      setIspending(false)
      navigate('/');
    })
   
  }
    

    return (
        <div className="create">
        <form onSubmit ={handleSubmit}>
          <label>Blog Title:</label>
          <input 
               type="text"
                required
                value ={title}
               onChange ={(e) => setTitle(e.target.value)} />
          
          <label>Blog Body:</label>
          <textarea
             required
               value ={ body}
               onChange ={(e) => setBody(e.target.value)} />
         
          <label>Blog Author:</label>
          <select 
          value = { author }
          onChange = {(e) => setAuthor(e.target.value)}
          >
            <option value="Mario">Mario</option> 
            <option value="Yoshi">Yoshi</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button>Adding Blog.....</button>}
             </form>
             <div>
             <p>{ title }</p>
             <p> { body}</p>
             <p>{ author }</p>
             </div>
                    </div>
        
      );
}
 
export default Create;
import { useState } from "react";

const  Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Yoshi')

  const handleSubmit = (e)=>{
    e.preventDefault();


    const blog= { title, body, author};

    console.log(blog);

  }
    

    return (
        <div className="create">
        <form onSubmit ={handleSubmit}>
          <label>Blog Title:</label>
          <input 
               type="text"
                reuired
                value ={title}
               onChange ={(e) => setTitle(e.target.value)} />
          
          <label>Blog Body:</label>
          <textarea
             reuired
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
          <button>Add Blog</button>
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
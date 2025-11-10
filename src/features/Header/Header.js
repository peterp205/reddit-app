import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { searchPosts }   from "../redditSlice";


function Header() {
    
    //set search term state
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    // handle input change
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch searchPosts action
        dispatch(searchPosts(searchTerm));
    }

  return (
      <>
        <h1>Reddit App</h1>
        <input type="text" placeholder="Search Reddit..." value={searchTerm} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Search</button>
        <p>{searchTerm} </p>
      </>
  );
}

export default Header;

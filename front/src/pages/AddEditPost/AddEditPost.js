import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";



const initialState = {
    title: "",
    tags: [],
    trending: "no",
    category: "",
    description: "",
    comments: [],
    likes: []
  };

  const categoryOption = [
    "Fashion",
    "Technology",
    "Food",
    "Politics",
    "Sports",
    "Business",
  ];
const AddEditPost = () => {
    const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);


  const { title, tags, category, trending, description } = form;
  const { id } = useParams();

  return (
    <div>

        { id ? "Update Post" : "Create Post"}
        <form>
        <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
                <ReactTagInput />
        </form>
    </div>
  )
}

export default AddEditPost
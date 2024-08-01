import { useContext, useRef } from "react";
import { PostList } from '../store/post-list-store';

const CreatePost = () => {

    const {addPost} = useContext(PostList)
    const postTitle = useRef();
    const postBody = useRef();
    const tags = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const titleData = postTitle.current.value;
        const bodyData = postBody.current.value;
        const getTags = tags.current.value.split(' ')

        postTitle.current.value = "";
        postBody.current.value = "";
        tags.current.value = "";
        addPost(titleData,bodyData,getTags)
    }
    return (

    <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Post Title</label>
            <input type="text" ref={postTitle} className="form-control" id="title" placeholder="How are you feeling today..."/>
        </div>
        <div className="mb-3">
            <label htmlFor="body" className="form-label">Post Content</label>
            <textarea type="text" ref={postBody} rows="4" className="form-control" id="body" placeholder="Tell us more about it..."/>
        </div>
        <div className="mb-3">
            <label htmlFor="tags" className="form-label">Enter your hashtags</label>
            <input type="text" ref={tags} className="form-control" id="tags" placeholder="Please enter tags using space.."/>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
    </form>
    )
};

export default CreatePost;
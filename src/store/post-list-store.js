import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});

const postListReducer = (current,action) => {
    let newPostList = current;
    if (action.type === 'DELETE_POST'){
        newPostList = current.filter(post => post.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_POST'){
        newPostList = [action.payload, ...current]
    }
    return newPostList;
}
const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer(postListReducer,[])

    const addPost = (titleData,bodyData,getTags) => {

        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: titleData,
                body: bodyData,
                //reactions: 2,
                tags: getTags
            }
        })


    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId
            }
        })
    }

    return <PostList.Provider value={{postList, addPost, deletePost}}>
            {children}
    </PostList.Provider>
}


export default PostListProvider;
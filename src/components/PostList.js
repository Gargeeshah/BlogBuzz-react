import { useContext } from 'react';
import Post from './Post';
import { PostList as postData } from '../store/post-list-store';
const PostList = () => {
    const {postList} = useContext(postData)
    return <>
        {postList.map((post) => (<Post key={post.id} post={post}/>))}
        </>
}

export default PostList;
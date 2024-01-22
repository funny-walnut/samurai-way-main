import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./MyPost/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add New post</button>
            </div>
            <div className='posts'>
                <Post message="How are you?" likeCounter={5}/>
                <Post message="Its my first message" likeCounter={13}/>
            </div>
        </div>
    )
}

export default MyPosts;
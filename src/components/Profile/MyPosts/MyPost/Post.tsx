import React from 'react';
import classes from './Post.module.css';

type PropsType = {
    message: string;
    likeCounter: number;
}

const Post = (props: PropsType) => {
    return (
        <div className={classes.item}>
            <img alt='post img'
                src="https://pyxis.nymag.com/v1/imgs/c7b/27a/b76324b9e7790ff25ba67be21f92ccbbff-cow--.1x.rsquare.w1400.jpg"/>
            {props.message}
            <div>
                <span>like</span>
                <span> {props.likeCounter} likes</span>
            </div>
        </div>
    )
}

export default Post;
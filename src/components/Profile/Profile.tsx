import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
    return <div>
        <div>
            <img  className={classes.mainProfileImage} src='https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg' alt='nature'/>
        </div>
        <div>
            <img
                className={classes.avaImage}
                src='https://static.vecteezy.com/system/resources/previews/025/284/015/non_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg'
                alt='ava'/>
            ava+description
        </div>
        <div>
            <MyPosts/>
        </div>
    </div>
}

export default Profile;
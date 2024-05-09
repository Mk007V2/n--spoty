import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
import {Image} from "antd";
import likeIcon from "../LIKE.png"

const Music = () => {
    const [liked,  setLiked] = useState("#333333")
    let cache = JSON.parse(localStorage.getItem("freesound"))
    const id = useParams()['id'];
    let arrayIndex = 0
    for (let i = 0; i < cache.length; i++) {
        if (cache[i].id === id){
            arrayIndex = i;
            // console.log(11111)
        }
    }
    let props = cache[arrayIndex]
    return (
        <div sttyle={{display: "flex",
                    flexDirection: "row",
        }}>
            <Image style={{
                display: "flex",
                flexDirection: "row",
                flex: 2,
                height: "100%",
                width: "auto"
                }}
                alt="PHOTO"
                src={
                    "https:img.youtube.com/vi/" + props.videos[0].uri.split('watch?v=')[1] + "/sddefault.jpg"}/>
                    <img 
                        width = {500} 
                        src = {likeIcon} 
                        onClick={() => setLiked("#FF0000")}
                        style={{
                            margin:"100px",
                            backgroundColor: liked
                    }}/>

            <Meta
                title={<Title style={{color:"#121220"}} level={2}>{props.title}</Title>}
                description={props.released}
                style={{
                    display: "flex",
                    flex: 2,
                    margin: "8px",
                    color:"#121220"
                }}
            />
            {JSON.stringify(cache[arrayIndex])}
        </div>
    );
};

export default Music;
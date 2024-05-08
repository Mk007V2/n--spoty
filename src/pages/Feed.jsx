import React, {useEffect, useState} from 'react';
import MusicItem from "../components/MusicItem";
import API from "../api/API";
import axios from "axios";
import {Button} from "antd";
import MusicList from "../components/MusicList";

const Feed = () => {


    const [response, setResponse] = useState();


    useEffect(() => {
        API.getAll().then((res) => {
            setResponse(res)
        })
    }, [])

    if (!response){
        return <div>Loading...</div>;
    }
    return (
        <div>
            {/*<Button onClick={loadjson}>LOAD </Button>*/}
            <MusicList props = {response}/>
            {/*{tags && <MusicItem props = {response}/>}*/}
            {/*{tags}*/}
        </div>
    );
};

export default Feed;
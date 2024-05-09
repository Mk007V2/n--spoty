import React, {useEffect, useState} from 'react';
import API from "../api/API";
import {Input} from "antd";
import MusicList from "../components/MusicList";

const Feed = () => {
    const [search, setSearch] = useState()
    const [response, setResponse] = useState();


    useEffect(() => {
        API.getAll().then((res) => {
            setResponse(res)
        })
    }, [])

    if (!response){
        return <div>Loading...</div>;
    }

    const filteredlist = search ? response.filter(item => item.title.includes(search)) : response

    return (
        <div>
            <Input
                placeholder='Search albums here'
                style={{
                    width: 500,
                    margin: '10px 500px',
                    fontSize: 24,
                    border: '1px solid black'
                }}
                onChange={(e) => setSearch(e.target.value)}
            />
            {/*<Button onClick={loadjson}>LOAD </Button>*/}
            <MusicList props = {filteredlist}/>
            {/*{tags && <MusicItem props = {response}/>}*/}
            {/*{tags}*/}
        </div>
    );
};

export default Feed;
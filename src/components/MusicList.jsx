import React from 'react';
import Title from "antd/es/typography/Title";
import MusicItem from "./MusicItem";

const MusicList = (props) => {
    props = props.props
    if (!props.length) {
        // console.log(props.props, 31);
        return (<div>
            <Title level = {2} style={{textAlign: 'center'}}>
                Wait, loading your favourite album...
            </Title>
            </div>
            )
    }
    // console.log(Object.keys(props), 32);


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {props.map((item, index) =>
                // console.log(item.videos);
                <MusicItem props={item} key = {item.id}/>
            )}
        </div>
    );
};

export default MusicList;
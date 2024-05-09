import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
const MusicItem = (props) => {
    props = props.props
    if (!props.id){
        // console.log(props.videos)
        return(
            <div>Loading track...</div>
        )
    }
    return (
        <a href={"/track/" + props.id} rel="noopener noreferrer" style={{display: "flex"}}>
            <div style={{display: "flex", flex: 1}}></div>
            <Card
                hoverable
                style={{
                    margin: "8px",
                    padding: "0px",
                    display: "flex",
                    flex: 100,
                    height: "10%"
                }}
                cover={<img
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 2,
                        height: "100%",
                        width:"auto"
                    }}
                    alt="THUMBNAIL"
                    src={
                        "https:img.youtube.com/vi/" + props.videos[0].uri.split('watch?v=')[1] + "/sddefault.jpg"}/>}
            >
                <Meta
                    title={<Title level={3}>{props.title}</Title>}
                    description={props.released}
                    style={{
                        display: "flex",
                        flex: 2,
                        margin: "8px"
                    }}
                />
            </Card>
            <div style={{display: "flex", flex: 1}}></div>
        </a>
    );
};

export default MusicItem;
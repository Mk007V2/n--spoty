import React from 'react';
import Title from "antd/es/typography/Title";
import {Button, Input} from "antd";

const SignUp = () => {
    return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                    padding: "100px"
                }}>
                <Title level={1}>Sign Up to start listening</Title>
                <Title level={4}>Enter username</Title>
                <Input
                    style={{
                        borderColor: "#6278A6",
                        borderWidth: "4px",
                        padding: "7px",
                        margin: "8px",
                        marginTop: "0px",
                        width: "15%",
                    }}
                    type={"text"}
                    placeholder={"Username"}
                />
                <Title level={4}>Enter password</Title>
                <Input
                    style={{
                        borderColor: "#6278A6",
                        borderWidth: "4px",
                        padding: "7px",
                        margin: "8px",
                        marginTop: "0px",
                        width: "15%",
                    }}
                    type={"text"}
                    placeholder={"Password"}
                />
                <Button
                    onClick={() => {
                        console.log("LogIn")
                    }}
                    style={{marginTop: "10px"}}
                >
                    Enjoy music !
                </Button>
                <Title
                    level={5}
                    style={{color: "#B3B3B3"}}
                >
                    Already have an account? <a href={"/signup"} style={{color: "#6B69B3"}}>Log in here</a>

                </Title>
        </div>
    );
};

export default SignUp;
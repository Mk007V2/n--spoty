import React from 'react'
import {Button} from 'antd';

const LogInItem = () => {
    return (
            <a href={"/login"}>
                <Button
                    type="primary"
                    shape="round"
                    size = "large"
                    style={{
                        display: 'flex',
                        backgroundColor:"#1B205D"
                }}>
                  Log in
                </Button>
            </a>
    );
  };

export default LogInItem

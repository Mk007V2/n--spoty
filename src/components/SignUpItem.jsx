import React from 'react'
import { Button} from 'antd';

const SignUpItem = () => {
    return (
        <a href={"/signup"}>
            <Button
                type="primary"
                shape="round"
                size = "large"
                style={{
                    color:"#B3B3B3",
                    marginRight:"10px",
                    display: 'flex',
                    backgroundColor: '#47449E'
            }}>
              Sign up
            </Button>
        </a>
    );
  };

export default SignUpItem

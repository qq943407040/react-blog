import React, { useState } from 'react';
import '../Styles/Login.css';
import 'antd/dist/antd.css';
import { Card, Input, Icon, Button, Spin ,message} from 'antd';
import servicePath from '../config/apiUrl';
import axios from 'axios'

function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [list,setList] = useState([])

    const checkLogin = ()=>{
        setIsLoading(true)

        if(!userName){
            message.error('用户名不能为空')
            setTimeout(()=>{
                setIsLoading(false)
            },500)
            return false
        }else if(!password){
            message.error('密码不能为空')
            return false
        }
        let dataProps = {
            'userName':userName,
            'password':password
        }
        axios({
            method:'post',
            url:servicePath.checkLogin,
            data:dataProps,
        }).then(
           res=>{
                setIsLoading(false)
                if(res.data.data=='登录成功'){
                    localStorage.setItem('openId',res.data.openId)
                    sessionStorage.setItem("data", "登陆成功")
                    props.history.push('/index')

                }else{
                    message.error('用户名密码错误')
                    props.history.push('/')
                }
           }
        )
        const promise = new Promise((resolve) => {

            axios("http://rap2api.taobao.org/app/mock/296818/infor").then(
              (res) => {
                console.log(res.data)
                setList(res.data)

              }
            )
          })   
        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    }
    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="网盘管理系统" bordered={true} style={{ width: 400 }} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={''}//有icon在这
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    <br /><br />
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={''}//有icon在这
                        onChange={(e) => { setPassword(e.target.value)}
                        }
                        onPressEnter={(e)=>{checkLogin()}}
                    />
                    <br /><br />
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )

}
export default Login
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../Styles/Adminindex.css'
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import { Route } from "react-router-dom";
import AddArticle from './AddArticle'
import ArticleList from './Articlelist';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function AdminIndex(props) {
    const handleClickArticle = e=>{
        // console.log(e.item.props)
        if(e.key=='addArticle'){
          props.history.push('/index/add')
        }else{
          props.history.push('/index/list')
        }
    
      }
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
        setView(collapsed)
        
    };
    const [view, setView] = useState(false) //选择的文章类别
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth='4rem'>
                <div className="logo">
                    <span hidden={view}>BLOG</span>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                    <div className="icon-style"> 
                        {/* <Icon type="pie-chart" /> */}
                        <svg t="1638091753129" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2209" width="20" height="20"><path d="M849.237 136.533c48.26 0 87.382 39.193 87.382 87.54v456.85c0 48.346-39.122 87.54-87.382 87.54l-307.2-0.002v61.553h247.126v60.183H234.837v-60.183h247.126V768.46l-307.2 0.001c-48.26 0-87.382-39.193-87.382-87.54V224.073c0-48.347 39.122-87.54 87.382-87.54h674.474z m0 60.184H174.763c-15.081 0-27.307 12.248-27.307 27.356v456.85c0 15.108 12.226 27.355 27.307 27.355h674.474c15.081 0 27.307-12.247 27.307-27.356V224.073c0-15.108-12.226-27.356-27.307-27.356zM716.8 349.525l42.48 42.557L645.875 505.69c-37.324 37.392-97.837 37.392-135.16 0l-52.727-52.821c-13.863-13.889-36.34-13.889-50.203 0l-103.163 103.35-42.479-42.556 103.163-103.35c37.324-37.392 97.837-37.392 135.161 0l52.726 52.821c13.863 13.888 36.34 13.888 50.203 0L716.8 349.525z" fill="#ffffff" p-id="2210"></path></svg>
                        <span hidden={view}>工作台</span>
                        </div>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        onClick={handleClickArticle}
                        title={
                            <div className="icon-style"> 
                                <svg t="1638089574001" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1220" width="20" height="20"><path d="M288 416h192c17.67 0 32-14.33 32-32s-14.33-32-32-32H288c-17.67 0-32 14.33-32 32s14.33 32 32 32zM288 576h352c17.69 0 32-14.31 32-32s-14.31-32-32-32H288c-17.67 0-32 14.31-32 32s14.33 32 32 32zM480 672H288c-17.67 0-32 14.31-32 32s14.33 32 32 32h192c17.67 0 32-14.31 32-32s-14.33-32-32-32zM939.98 645.16L826.84 532.02c-6.25-6.25-14.44-9.37-22.63-9.37s-16.38 3.12-22.63 9.37L553.37 760.24c-6 6-9.37 14.14-9.37 22.63V896c0 17.67 14.33 32 32 32h113.14c8.49 0 16.63-3.37 22.63-9.37l228.21-228.21c12.49-12.5 12.49-32.76 0-45.26zM675.88 864H608v-67.88L804.21 599.9l67.88 67.88L675.88 864z" p-id="1221" fill="#ffffff"></path><path d="M448 864H192V160h383.86l0.11 128.09c0.06 35.23 28.78 63.91 64 63.91H768v80c0 17.67 14.33 32 32 32s32-14.33 32-32V274.87c0-8.58-3.45-16.8-9.56-22.82L673.09 105.18A32.002 32.002 0 0 0 650.66 96H160c-17.67 0-32 14.33-32 32v768c0 17.67 14.33 32 32 32h288c17.67 0 32-14.33 32-32s-14.33-32-32-32z m319.72-576H639.97l-0.1-125.73L767.72 288z" p-id="1222" fill="#ffffff"></path></svg>
                                <span hidden={view}>文章管理</span>
                            </div>
                        }
                    >
                        <Menu.Item key="addArticle">添加文章</Menu.Item>
                        <Menu.Item key="articleList">文章列表</Menu.Item>

                    </SubMenu>

                    <Menu.Item key="9">
                    <div className="icon-style"> 
                        <svg t="1638091822400" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3196" width="20" height="20"><path d="M367.494327 499.897358c0 28.535917-23.164582 51.606355-51.744501 51.606355-28.534893 0-51.699476-23.070438-51.699476-51.606355 0-28.534893 23.164582-51.699476 51.699476-51.699476C344.329744 448.197882 367.494327 471.363488 367.494327 499.897358L367.494327 499.897358zM367.494327 499.897358M959.966103 471.269343c0-215.271902-201.053062-390.428154-448.248024-390.428154-247.200078 0-448.25314 175.157275-448.25314 390.428154 0 127.884622 72.03871 247.666706 192.861496 320.646857l0 123.081223c0 8.764618 4.802376 16.763802 12.477172 20.813025 3.53143 1.977028 7.249101 2.918469 11.254322 2.918469 4.611018 0 9.133008-1.316995 13.08911-3.950985l56.783261-37.480636c1.085728-0.661056 2.121314-1.508353 2.732228-2.077312l64.222697-42.75271c32.021298 6.027274 63.944358 9.138124 94.925976 9.138124C758.913041 861.514325 959.966103 686.446078 959.966103 471.269343L959.966103 471.269343zM291.731806 757.641583C178.44874 693.794439 110.879831 586.721819 110.879831 471.175199c0-189.092659 179.816388-342.969259 400.833131-342.969259 221.022882 0 400.838248 153.875576 400.838248 342.969259 0 189.094706-179.86653 342.970282-400.833131 342.970282-30.887474 0-62.904679-3.393283-95.114265-10.076496-6.120394-1.410116-12.620435-0.093121-17.98563 3.487428l-75.149561 50.096978c-1.036609 0.561795-2.539846 1.883907-2.539846 1.883907l-17.137309 11.298324 0-92.568279C303.790446 769.700223 299.12417 761.878071 291.731806 757.641583L291.731806 757.641583zM291.731806 757.641583M572.078819 485.393016c0 28.535917-23.164582 51.797713-51.79362 51.797713-28.5308 0-51.699476-23.261797-51.699476-51.797713 0-28.5308 23.168676-51.606355 51.699476-51.606355C548.913213 433.787684 572.078819 456.863239 572.078819 485.393016L572.078819 485.393016zM572.078819 485.393016M774.264681 485.393016c0 28.535917-23.168676 51.797713-51.699476 51.797713-28.535917 0-51.704592-23.261797-51.704592-51.797713 0-28.5308 23.168676-51.606355 51.704592-51.606355C751.096005 433.787684 774.264681 456.863239 774.264681 485.393016L774.264681 485.393016zM774.264681 485.393016" p-id="3197" fill="#ffffff"></path></svg>
                        <span hidden={view}>留言管理</span>
                        </div>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <div>
                                <Route path="/index/" exact component={AddArticle} />
                                <Route path="/index/add/" exact component={AddArticle} />
                                <Route path="/index/add/:id" exact component={AddArticle} />
                                <Route path="/index/list/" component={ArticleList} />
                        </div>
                    </div>

                </Content>
                <Footer style={{ textAlign: 'center' }}>Bpan.com</Footer>
            </Layout>
        </Layout>
    )

}

export default AdminIndex
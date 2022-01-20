import React from 'react'
import styles from '../../styles/components/header.module.css'
import {Row,Col, Menu} from 'antd'
import {HomeOutlined,UserOutlined,ReadOutlined} from '@ant-design/icons'
import Link from 'next/dist/client/link'

const Header = () => (
  <div className={styles.header}>
    <Row type="flex" justify="center">
        <Col push="2" xs={12} sm={12} md={12} lg={12} xl={12}>
            <span className={styles.header_logo}>BLOG</span>
            <span className={styles.header_txt}>我的个人博客</span>
        </Col>

        <Col push="1" className={styles.menu_div} xs={12} sm={12} md={12} lg={12} xl={10}>
            <Menu  mode="horizontal">
                <Menu.Item key="My_net_disk">
                    <Link href="/"><span>
                        {/* <HomeOutlined/> */}
                    博客首页</span></Link>
                </Menu.Item>
                <Menu.Item key="Online_resources">
                    <Link href={{ pathname: '/list', query: { id: 2 } }}><span>
                        {/* <HomeOutlined/> */}
                    专业技能</span></Link>
                </Menu.Item>
                <Menu.Item key="video">
                    {/* <Icon type="youtube" /> */}
                   <Link href={{ pathname: '/list', query: { id: 1 } }}><span>
                       {/* <ReadOutlined /> */}
                       生活记录</span></Link>
                </Menu.Item>
                <Menu.Item key="life">
                    {/* <Icon type="smile" /> */}
                    <Link href="/"><span>
                        {/* <UserOutlined /> */}
                        我的</span></Link>
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header
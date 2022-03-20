import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Row, Col, List, Breadcrumb } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined, Table } from '@ant-design/icons'
import Header from './components/header'
import Info from './components/infor'
import Advert from './components/Avert'
import Footer from './components/Footer'
import axios from 'axios'
import Link from 'next/link'
import servicePath from '../config/apiUrl'
import { marked } from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import 'animate.css';

const Home = (list) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }

  });
  const [mylist, setMylist] = useState(
    list.data
  )
  useEffect(() => {
    console.log(list.data)
    setMylist(list.data)
  })


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm_main" type="flex" justify="center">
        <Col className="comm_left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread_div">
              <Breadcrumb>
                <Breadcrumb.Item><Link href="/">首页</Link></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              header={''}
              itemLayout="vertical"
              dataSource={mylist}
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 5,
              }
              }
              renderItem={item => (
                <List.Item>
                  <div className="list_title"><Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                  </div>
                  <div className="list_icon">
                    <span><CalendarOutlined />{item.addTime}</span>
                    <span><FolderOutlined /> {item.typeName}</span>
                    <span><FireOutlined />{item.view_count}</span>
                  </div>
                  <div className="list_context"
                  // dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                  >
                    {item.introduce}
                  </div>
                </List.Item>
              )}
            />
          </div>

        </Col>

        <Col className="comm_box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Info></Info>
          {/* <Advert></Advert> */}
        </Col>
      </Row>
      <Footer></Footer>
    </>
  )
}

Home.getInitialProps = async () => {

  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        resolve(res.data)
        console.log(res)
      }

    )
  })
  return await promise
}

export default Home
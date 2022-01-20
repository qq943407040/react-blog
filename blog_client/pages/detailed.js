import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Header from './components/header'
import Info from './components/infor'
import Advert from './components/Avert'
import Footer from './components/Footer'
import Link from 'next/link'
import styles from '../styles/pages/detailed.module.css'
// import MarkNav from 'markdown-navbar';
import axios from 'axios'
import 'markdown-navbar/dist/navbar.css';
import { marked } from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from './components/tocify.tsx'
import servicePath from '../config/apiUrl'


const Detailed = (props) => {

  // const renderer =new marked.Renderer();
  const tocify = new Tocify()
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };


  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,   //github样式
    pedantic: false,
    sanitize: false, //忽略html,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })
  let html = marked(props.article_content)


  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm_main" type="flex" justify="center">
        <Col className="comm_left"  xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread_div">
              <Breadcrumb>
                <Breadcrumb.Item><Link href="/">首页</Link></Breadcrumb.Item>
                <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item> {props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">
                {props.title}
              </div>

              <div className="list_icon center">
                <span><CalendarOutlined /> {props.addTime}</span>
                <span><FolderOutlined /> {props.typeName}</span>
                <span><FireOutlined />{props.view_count}</span>
              </div>

              <div className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}   >
              </div>

            </div>

          </div>
        </Col>

        <Col className="comm_box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Info></Info>
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm_box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>

            </div>
          </Affix>

        </Col>
      </Row>
      <Footer />

    </>
  )
}
// export const getStaticProps = async (context) => {
//   console.log(context.query.id)
//   let id =context.query.id
//   const res = await axios('http://127.0.0.1:7001/default/getArticleById/'+id)
//   const list = res.data
//   console.log(res.data)
//   return { props: { list } }
// }
Detailed.getInitialProps = async (context) => {

  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {

    axios(servicePath.getArticleById + id).then(
      (res) => {
        console.log(res.data)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}
export default Detailed
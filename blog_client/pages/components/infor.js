import { Avatar, Divider, Tooltip } from 'antd'
import styles from '../../styles/components/infor.module.css'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import img from '../../public/576.jpg'
const Info = () => {
    const togit = () => {
        console.log('sss')
        window.open("https://github.com/qq943407040/react-blog");
    }
    return (
        <div className={styles.author_div}>
            <div> <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
            <div className={styles.author_introduction}>
                走好选择的路，而不是选择好走的路。
                <Divider>联系账号</Divider>
                <Tooltip placement="top" title={'https://github.com/qq943407040/react-blog'}>
                    <Avatar onClick={togit} size={28} icon={<GithubOutlined />} className={styles.account1} />
                </Tooltip>
                <Tooltip placement="top" title={'qq:943407040'}>
                <Avatar size={28} icon={<QqOutlined />} className={styles.account} />
                </Tooltip>
                <Tooltip placement="top" title={'wechat:LXY-MAN'}>
                <Avatar size={28} icon={<WechatOutlined />} className={styles.account} />
                </Tooltip>

            </div>
        </div>
    )

}

export default Info
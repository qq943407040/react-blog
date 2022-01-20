import {Avatar,Divider} from 'antd'
import styles from '../../styles/components/infor.module.css'
import { GithubOutlined,QqOutlined,WechatOutlined  } from '@ant-design/icons'

const Info =()=>{

    return (
        <div className={styles.author_div}>
            <div> <Avatar size={100} src="../../public/576.jpeg"  /></div>
            <div className={styles.author_introduction}>
                走好选择的路，而不是选择好走的路。
                <Divider>联系账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className={styles.account}  />
                <Avatar size={28} icon={<QqOutlined />} className={styles.account} />
                <Avatar size={28} icon={<WechatOutlined />}  className={styles.account}  />

            </div>
        </div>
    )

}

export default Info
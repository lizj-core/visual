import React from 'react'
import styles from './Header.module.scss';
import { Button, Space, Input } from 'antd';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Space>
        <Button>清空</Button>
        <Button type="primary">保存</Button>
        画布大小：<Input style={{width: '70px'}} /> * <Input style={{width: '70px'}} />
      </Space>

    </header>
  )
}

export default Header;

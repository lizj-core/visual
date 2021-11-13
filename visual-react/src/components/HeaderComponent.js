import { Button } from 'antd';
import styles from './HeaderComponent.less';

function HeaderComponent() {
  return (
    <div className={styles.header}>
      <Button>撤销</Button>
      <Button>保存</Button>
    </div>
  )
}

export default HeaderComponent
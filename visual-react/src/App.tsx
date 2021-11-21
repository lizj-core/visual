import React from 'react';
import styles from './App.module.scss';
import { Button } from 'antd'

function App() {
  return (
    <div className={styles.App}>
      <Button type="primary">提交</Button>
    </div>
  );
}

export default App;

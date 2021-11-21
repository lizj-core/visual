import React from 'react';
import Header from './Header';
import styles from './index.module.scss';

const App: React.FC = (props) =>{
  return (
    <div>
      <Header></Header>
      <div className={styles.body}>
        
      </div>
    </div>
  )
}

export default App;
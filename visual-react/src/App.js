import './App.less';
import { Layout } from 'antd';
import HeaderComponent from './components/HeaderComponent';
const { 
  Header,
  Sider,
  Content,
} = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <HeaderComponent />
      </Header>
      <Layout>
        <Sider className="leftSider">1</Sider>
        <Content></Content>
        <Sider className="rightSider">2</Sider>
      </Layout>
    </Layout>
  );
}

export default App;

import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, GithubOutlined } from '@ant-design/icons';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', padding: '0 20px', display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{ color: '#fff', fontWeight: 'bold', fontSize: '20px', flex: 1 }}>Product Manager</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
          <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>Products</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Product Manager ©2024 | Follow us on
        
        <a href="https://github.com/gardassairohit" style={{ marginLeft: '8px', color: '#000' }}>
          <GithubOutlined />
        </a>
      </Footer>
    </Layout>
  </Router>
);

export default App;

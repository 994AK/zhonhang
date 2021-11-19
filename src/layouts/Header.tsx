import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Redirect, Link } from 'umi';
import './Layout.css';

const { SubMenu } = Menu;
const { Header, Content, Sider }: any = Layout;


const HeaderLayout = ({ children, dispatch, history }: any) => {

  useEffect(() => {
      dispatch({
        type: 'login/welcome',
      });
  });

  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <h3 style={{color:"#ffffff"}}>
          {localStorage.getItem('name')}
        </h3>

        <Menu theme='dark' mode='horizontal'>

        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            //当前路由的返回
            defaultSelectedKeys={[history.location.pathname]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}

          >
            <SubMenu key='sub1' icon={<UserOutlined />} title='用户管理'>
              <Menu.Item key='/users'> <Link to='/users'>录入首页</Link></Menu.Item>
              <Menu.Item key='/users/list'> <Link to='/users/list'>查询录入信息</Link></Menu.Item>
              <Menu.Item key='/login'> <Link to='/login'>退出登录</Link></Menu.Item>

            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>

          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 100 + 'vh',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HeaderLayout;

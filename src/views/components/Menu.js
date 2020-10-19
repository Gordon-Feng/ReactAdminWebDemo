import React, { useState } from 'react'
import { Menu } from 'antd'
import { ProfileOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;

const AsideMenu = (props) => {
    const [currentMenuItem, setCurrentMenuItem] = useState('school')

    const changeMenuItem = e => {
        setCurrentMenuItem(e.key)
    }

    return (
        <Menu onClick={changeMenuItem} selectedKeys={[currentMenuItem]} mode="inline">
            <Menu.Item key="school" icon={<ProfileOutlined/>} style={{ margin: 0 }}>
                <Link to='/school-manage'>学校管理</Link>
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<MenuUnfoldOutlined />} title="多级折叠菜单">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    )
}

export default AsideMenu
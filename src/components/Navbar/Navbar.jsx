import React, { useState } from 'react'
import './Navbar.scss'
import { Menu, Dropdown, Drawer } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Logo from '../../assets/images/logo.svg'

const Navbar = () => {

   const [visible, setVisible] = useState(false);
   const showDrawer = () => {
      setVisible(true);
   };
   const onClose = () => {
      setVisible(false);
   };

   const menu = (
      <Menu>
         <Menu.Item>
            <a href="/">
               1st menu item
            </a>
         </Menu.Item>
         <Menu.Item>
            <a href="/">
               2nd menu item
            </a>
         </Menu.Item>
         <Menu.Item>
            <a href="/">
               3rd menu item
            </a>
         </Menu.Item>
      </Menu>
   );

   return (
      <div className="navbar" >
         <div className="navbar-nav">

            <img src={Logo} alt="Logo Blogr" />
            <nav className="teste">
               <ul>
                  <li><Dropdown overlay={menu} >
                     <a href="/" style={{ color: 'white' }} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Product <DownOutlined />
                     </a>
                  </Dropdown></li>
                  <li><Dropdown overlay={menu}>
                     <a href="/" style={{ color: 'white' }} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Company <DownOutlined />
                     </a>
                  </Dropdown></li>
                  <li><Dropdown overlay={menu}>
                     <a href="/" style={{ color: 'white' }} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Connect <DownOutlined />
                     </a>
                  </Dropdown></li>
               </ul>
            </nav>
         </div>
         <div className="navbar-buttons">
            <button>Login</button>
            <button>Sign Up</button>
         </div>
         <span class="material-icons" onClick={showDrawer}>
            menu
         </span>
         <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
         >
            <div className="hamburguer">
               <div className="hamburguer-menu">
                  <p>Product</p>
                  <p>Company</p>
                  <p>Connect</p>
               </div>
               <div className="hamburguer-buttons">
                  <button>Login</button>
                  <button>Sign Up</button>
               </div>
            </div>

         </Drawer>
      </div >
   )
}

export default Navbar

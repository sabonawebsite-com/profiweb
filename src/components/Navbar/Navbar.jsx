import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/sabo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const[menu,setMenu]=useState('home')
  const menuReff=useRef()
  const openMenu=()=>{
    menuReff.current.style.right='0'
  }
  const closeMenu=()=>{
    menuReff.current.style.right='-350px'
  }
  return (
    <div className='navbar'>
     
      <button>Sabo</button>
      {/* <img src={logo}  alt="" /> */}
     
      <ul ref={menuReff} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt=""className='nav-mob-close' />
        <li><AnchorLink className='anchor-link'  href='#home'><p  onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img  src={underline} alt='home'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50}href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img  src={underline} alt='about'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50}href='#services'><p  onClick={()=>setMenu("service")}>Service</p></AnchorLink>{menu==="service"?<img  src={underline} alt='service'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50}href='#mywork'><p  onClick={()=>setMenu("portfolio")}>portfolio</p></AnchorLink>{menu==="portfolio"?<img  src={underline} alt='portifolio'/>:<></>}</li>
        <li><AnchorLink  className='anchor-link' offset={50}href='#contact'><p  onClick={()=>setMenu("contact")}>contact</p></AnchorLink>{menu==="contact"?<img  src={underline} alt='contac'/>:<></>}</li>
      </ul>
      <div className="connect"><AnchorLink  className='anchor-link' offset={50}href='#contact'>Connect with Me</AnchorLink></div>
      <img src={menu_open?menu_open:menu_open} onClick={openMenu} alt="" className='.open' />
    </div>
  )
}

export default Navbar

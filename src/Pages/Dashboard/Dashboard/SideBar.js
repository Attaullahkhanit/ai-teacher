import React from 'react'
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {GiTeacher} from 'react-icons/gi';
import { GiArmorUpgrade } from 'react-icons/gi';
import { FcIdea } from 'react-icons/fc';


function SideBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  return (
    <>
            <Link className='text-decoration-none text-white d-flex align-itemcenter py-4 ms-3 mt-2'>
                <GiTeacher className='ms-1  fs-3'/><span className='px-2 d-none d-sm-inline fs-5'>AI Teacher</span>
            </Link>
            <hr className='text-white'/>
            <div className='d-flex flex-column justify-content-between menu-item'>
                <div>
                    <ul className='nav nav-pills flex-column'>
                        <li className='nav-item text-white  my-1'>
                            <Link to="/createplay" className='nav-link text-whiten dashboardmenulink' aria-current="page">
                            <i className='bi bi-speedometer2 text-white'></i>
                            <span className='ms-2 text-white d-none d-sm-inline  menuitemfont'>CREATE & PLAY</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white  my-1'>
                            <Link to="/downloads" className='nav-link text-white dashboardmenulink' aria-current="page">
                            <i className='bi bi-house'></i>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>DOWNLOADS</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white  my-1'>

                        <div className='ml-2'>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                underline="none"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                style={{textDecoration: 'none', fontSize: '16px', width:'100%', textAlign: 'left', justifyContent: 'left', paddingLeft: '17px'}}
                            >
                                <Link to="/profile" className='text-decoration-none'>
                                    <i className='bi bi-person-circle text-white'></i>
                                    <span className='ms-2 text-white d-none d-sm-inline text-capitalize menuitemfont'>PROFILE</span>
                                </Link>
                            </Button>
                            <Menu
                                id="basic-menu"
                                style={{height: 'auto', width: '100%'}}
                                className=''
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem className="text-secondary" onClick={handleClose}>My account</MenuItem>
                                <MenuItem className="text-secondary" onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                            </div>

                        </li>
                    </ul>
                </div>
                
                
                <div className='upgradbottom'>
                <hr className='text-white'/>
                    <ul className='nav nav-pills flex-column text-right'>
                        <li className='nav-item text-white  my-1'>
                            <Link to="/upgrade" className='nav-link text-whiten dashboardmenulink' aria-current="page">
                            <GiArmorUpgrade className='text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>PRO UPGRADE</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className='nav nav-pills flex-column text-right '>
                        <li className='nav-item text-white  my-1'>
                            <Link to="/toolidea" className='nav-link text-whiten dashboardmenulink' aria-current="page">
                            <FcIdea className='text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>TOOL IDEA</span>
                            </Link>
                        </li>
                    </ul>
                </div>
    {/* content */}
    </div>
                
    </>
  )
}

export default SideBar
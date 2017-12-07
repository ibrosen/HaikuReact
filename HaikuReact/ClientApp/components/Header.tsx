import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Header extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <div >
                <div className='clearfix'></div>
                <div>
                    
                    <div className='header'>
                        <div className='mainDiv'>
                            <NavLink exact to={'/'} className='navCustom' activeClassName='navCustomActive' style={{ textDecoration: 'none' }}>
                                <div className='innerDiv'> Haikus </div>
                            </NavLink> 
                        </div>
                        <div className='subDiv'>
                            <NavLink exact to={'/counter'} className='navCustom' activeClassName='navCustomActive' style={{ textDecoration: 'none' }}>
                                <div className='innerDiv'> Twitter </div>
                            </NavLink>
                        </div>
                        <div className='vl'></div>
                        <div className='subDiv' style={{ color: 'black' }}>
                            <NavLink exact to={'/fetchdata'} className='navCustom' activeClassName='navCustomActive' style={{ textDecoration: 'none'}}>
                                <div className='innerDiv'> Custom </div>
                            </NavLink>
                        </div>
                        <div className='bottomLine'></div>
                    </div>

                </div>
            </div>
        </div>;
    }
}

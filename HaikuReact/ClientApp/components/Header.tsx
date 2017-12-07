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
                            <NavLink to={'/'} activeClassName='active' style={{ textDecoration: 'none' }}>
                                <div className='innerDiv'> Haikus </div>
                            </NavLink> 
                        </div>
                        <div className='subDiv'>
                            <NavLink to={'/counter'} activeClassName='active' style={{ textDecoration: 'none' }}>
                                <div className='innerDiv'> Twitter </div>
                            </NavLink>
                        </div>
                        <div className='vl'></div>
                        <div className='subDiv'>
                            <NavLink to={'/fetchdata'} activeClassName='active' style={{ textDecoration: 'none' }}>
                                <div className='innerDiv'> Custom </div>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>;
    }
}

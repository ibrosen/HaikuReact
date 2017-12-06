import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Header } from './Header';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='row-sm-3'>
                    <Header />
                </div>
                <div className='main'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
}

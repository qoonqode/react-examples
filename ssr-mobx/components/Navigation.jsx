import React, { Component } from 'react';
import  { Menu, Container } from 'semantic-ui-react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class Navigation extends Component {

    isActivePage(num) {
        return num === this.props.store.currentPage
    }

    setActivePage(num) {
        this.props.store.currentPage = num;
    }

    render() {
        return (
            <Menu fixed='top' inverted borderless>
                <Container>
                    <Menu.Item header>
                        MobX Demo
                    </Menu.Item>
                    <Menu.Item active={this.isActivePage(0)}>
                        <Link href="/">
                            <a onClick={() => {this.setActivePage(0)}}>Home</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item active={this.isActivePage(1)}>
                        <Link href="/counter">
                            <a onClick={() => {this.setActivePage(1)}}>Counter</a>
                        </Link>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }

}



export default Navigation;
import App, { Container } from 'next/app';
import React from 'react';
import { initStore } from '../stores/store';
import { Provider } from 'mobx-react';

class MobxApp extends App {

    // use getInitialProps to create a store
    static async getInitialProps(appContext) {
        const mobxStore = initStore();
        appContext.ctx.mobxStore = mobxStore;
        let appProps = await App.getInitialProps(appContext);
        return {
            ...appProps,
            initialMobxState: mobxStore
        }
    }

    constructor(props) {
        super(props);
        const isServer = typeof window === 'undefined';
        this.mobxStore = isServer ? props.initialMobxState : initStore(props.initialMobxState);
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Provider store={this.mobxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default MobxApp;
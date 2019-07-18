import React from 'react';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

import Navigation from './Navigation';

const Layout = (props) => (
    <div>
        <Head>
            <title>MobX Demo</title>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <link rel="stylesheet" href="/static/app.css" />>
        </Head>
        <Navigation />
        <Container className="content">
            {props.children}
        </Container>
    </div>
);

export default Layout;
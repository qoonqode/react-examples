import React from 'react';
import {Header, Icon, Segment} from "semantic-ui-react";

const NoUsername = () => {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Enter a username in the box above and click the button!
            </Header>
        </Segment>
    )
};

export default NoUsername;
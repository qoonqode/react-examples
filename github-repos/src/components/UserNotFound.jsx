import React from 'react'
import { Message, Icon } from 'semantic-ui-react';

const UserNotFound = () => {
    return (
        <Message icon error>
            <Icon name='warning' />
            <Message.Content>
                <Message.Header>Username Not Found</Message.Header>
            The username you supplied was not found, therefore no repositories can be listed!
            </Message.Content>
        </Message>
    );
};

export default UserNotFound;
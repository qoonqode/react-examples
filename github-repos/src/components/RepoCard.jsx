import React from 'react';
import PropTypes from 'prop-types';
import { Card, Header } from 'semantic-ui-react';

const RepoCard = (props) => {
    return (
        <Card fluid
              href={props.html_url}
        >
            <Card.Content header={props.name}/>
            <Card.Content description={props.description}/>
            <Card.Content extra>
                {props.language || 'N/A'}
            </Card.Content>
        </Card>
    );
};

RepoCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string,
    href: PropTypes.string.isRequired
};

export default RepoCard;
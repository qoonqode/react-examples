import React from 'react';
import { Segment, Placeholder } from "semantic-ui-react";

const LoadingContent = () => {
    return (
        <Segment loading>
            <Placeholder>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
            </Placeholder>
        </Segment>
    )
};

export default LoadingContent;
import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Labels = ({ labels }) => {
    return (
        <div>
            {labels.map((label, index) => (
                <Badge bg="secondary" key={`label-${index}`}>
                    {label}
                </Badge>
            ))}
        </div>
    );
};

export default Labels;

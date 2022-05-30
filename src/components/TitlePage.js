import React from 'react';
import Helmet from 'react-helmet';

function TitleComponent ({title}) {
    return (
        <Helmet>
            <title>{"Titus | " + title}</title>
        </Helmet>
    );
};

export default TitleComponent ;
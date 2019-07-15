import React from 'react';
import PropTypes from 'prop-types';

import RepoCard from './RepoCard';

const RepoList = (props) => {
    const repos = props.repos;
    return repos.map((repo) =>
        <RepoCard
            name={repo.name}
            description={repo.description}
            href={repo.html_url}
            language={repo.language}
        />
    );
};

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
};

export default RepoList;

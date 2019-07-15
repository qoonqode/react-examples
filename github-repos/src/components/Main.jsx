import React, { Component } from 'react';
import { Grid, Input, Header, Button, Segment, Icon } from 'semantic-ui-react';
import Octokit from '@octokit/rest';

import NoUsername from './NoUsername';
import LoadingContent from './LoadingContent';
import RepoList from './RepoList';
import UserNotFound from './UserNotFound';

import styles from './main.css';

class App extends Component {

    // Constructor (State!)
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loading: false,
            notFound: false,
            firstLoad: true
        }
        this.handleInputChange.bind(this);
    }

    handleInputChange(event, data) {
        console.log(data);
        if (event.target.value.length > 0) this.setState({ username: event.target.value });
        else this.setState({ loading: false, notFound: false, firstLoad: true });
    }

    fetchRepositories(username) {
        this.setState({ loading: true, notFound: false, firstLoad: false });
        const octokit = new Octokit();
        octokit.repos.listForUser({ username, type: 'owner' })
            .then(({ data }) => {
                let repos = [];
                data.forEach((repo) => {
                    const repoObj = {
                        name: repo.name,
                        html_url: repo.html_url,
                        description: repo.description,
                        language: repo.language
                    };
                    repos.push(repoObj);
                });
                this.setState({ loading: false, repos, notFound: false, firstLoad: false });
            })
            .catch((err) => {
                this.setState({ loading: false, firstLoad: false, notFound: true });
                console.log(err);
            });
    }

    renderBody() {
        if (this.state.loading) return <LoadingContent />;
        if (this.state.notFound) return <UserNotFound />;
        if (this.state.firstLoad) return <NoUsername />;
        if (this.state.repos) return <RepoList repos={this.state.repos} />
    }


    render() {
        return (
            <div className={styles.topmargin}>
                <Grid centered columns={1} divided='vertically'>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Grid>
                                <Header>GitHub Repository Lister!</Header>
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <Input placeholder='GitHub Username...' fluid
                                           onChange={(e) => this.handleInputChange(e)}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Button fluid primary onClick={() => this.fetchRepositories(this.state.username)}>Fetch List!</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            {this.renderBody()}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}

export default App;
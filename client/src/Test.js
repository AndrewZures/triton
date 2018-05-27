import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    {
        post(id: 1) {
            id
            author {
                name
            }
        }
    }
`

const Test = () => (
    <Query query={query}>
        {({ loading, error, data }) => {
            if(loading) return 'loading...';
            if(error) return 'error!';

            return (
                <div>
                    {data.post.id}
                    {data.post.author.name}
                </div>
            );
        }}
    </Query>
)

export default Test;
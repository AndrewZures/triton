import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    {
        howdy {
            hiya {
                hey
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
                    {data.howdy.hiya.hey}
                </div>
            );
        }}
    </Query>
)

export default Test;
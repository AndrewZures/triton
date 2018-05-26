 import { buildSchema } from 'graphql';
 import _ from 'lodash';

 export const schema = buildSchema(`
    type Query {
        hello: String
        howdy: SubQuery
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
    type SubQuery {
        hiya: Hiya
    }
    type Hiya {
        hey: String
    }
 `)

 export const root = {
     hello: () => {
         return 'Hello Andrew'
     },
     howdy: {
         hiya: {
             hey: 'hey',
         }
     },
     rollDice: ({numDice, numSides = 6}) => {
         return _.times(numDice, () => Math.floor(Math.random() * numSides) + 1);
     }
 }
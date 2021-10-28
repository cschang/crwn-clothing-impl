
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient,/* gql */ } from "apollo-boost";
  
import { resolvers, typeDefs } from "./resolvers";
const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  resolvers,
  typeDefs,
});
// initial local data:
// initial local data: 
client.writeData({
  data: {
    cartHidden: false,
    cartItems: [],
    itemCount: 0,
  },
});


export default client;

// client
//   .query({
//     query: gql`
//       {
//         getCollectionsByTitle(title: "hats") {
//           id
//           title
//           items {
//             id
//             name
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => {
//     console.log("result:", result);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });

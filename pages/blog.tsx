import { graphql } from "../src/gql";

const blogListForHome = graphql(`
  query blogListForHome {
    blogCollection(order: date_DESC) {
      items {
        title
      }
    }
  }
`);

const BlogPage = () => {};

export default BlogPage;

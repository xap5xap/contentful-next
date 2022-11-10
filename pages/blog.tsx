import { graphql } from "../src/gql";
import { BlogCollection } from "../src/gql/graphql";
import { client } from "../src/urqlClient";

const blogListForHome = graphql(`
  query blogListForHome {
    blogCollection(order: date_DESC) {
      items {
        title
      }
    }
  }
`);

type Props = {
  blogCollection: BlogCollection;
};

const BlogPage = ({ blogCollection }: Props) => {
  return (
    <div>
      <ul>
        {blogCollection.items.map((el, idx) => (
          <li key={idx}>{el?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query(blogListForHome, {}).toPromise();

  return {
    props: { blogCollection: data?.blogCollection },
  };
};

export default BlogPage;

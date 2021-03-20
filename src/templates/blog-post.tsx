import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { SEO } from "../components/SSO";
import { SingleArticle } from "../components/SingleArticle";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout>
      <SEO title="Single post" />
      <SingleArticle post={post} previous={previous} next={next} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

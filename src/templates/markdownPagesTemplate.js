import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Img from 'gatsby-image';
import { Box, Text } from '@theme-ui/components';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log({ data });
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, featuredImg } = markdownRemark;
  return (
    <Layout>
      <Box sx={styles.mainContainer} className="blog-post-container">
        {featuredImg && (
          <Box sx={styles.imgContainer}>
            <Img style={styles.img} fluid={featuredImg.childImageSharp.fluid} alt={frontmatter.title} />
          </Box>
        )}
        <Box sx={styles.titleContainer}>
          <Text as="h1" sx={styles.title}>
            {frontmatter.title}
          </Text>
        </Box>
        <Box sx={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
      featuredImg {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

const styles = {
  mainContainer: {
    padding: '100px',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgContainer: {
    width: ['95vw', '85vw', '75vw', '70vw', '65vw', '60vw'],
    height: '400px',
    maxWidth: '1000px',
  },
  img: {
    width: ['95vw', '85vw', '75vw', '70vw', '65vw', '60vw'],
    height: '400px',
    maxWidth: '1000px',
  },
  title: {
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: '10px',
    width: '50vw',
    minWidth: '400px',
  },
  content: {
    width: ['95vw', '85vw', '75vw', '70vw', '65vw', '60vw'],
    maxWidth: '1000px',
    borderLeft: '5px solid #444',
    paddingLeft: '20px',
  },
};

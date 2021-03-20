import * as React from 'react';

import PostBackground from '../../assets/images/post-background.jpeg';

import { Anchor, Article, Background, BackIcon, Content, DateIcon, DatePublished, NextIcon, Pagination, Title } from './styles';

type PostType = {
  frontmatter: {
    title: string;
    date: string;
  },
  html: string;
}

type PaginationTypes = {
  fields: { 
    slug;
  },
  frontmatter: {
    title;
  }
}

type PropTypes = {
  post?: PostType;
  previous?: PaginationTypes;
  next?: PaginationTypes;
}

export const SingleArticle = ({ post, previous, next }: PropTypes) => {
  return (
    <Content flexDirection="column">
      <Background url={PostBackground} />
      <Anchor to="/">
        <BackIcon />
        Back to home
      </Anchor>
      <Article flexDirection="column">
        <DatePublished>
          <DateIcon />
          {post.frontmatter.date}
        </DatePublished>
        <Title>{post.frontmatter.title}</Title>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </Article>
      <Pagination justifyContent="space-between">
        {previous && (
          <Anchor to={previous.fields.slug} mr="auto" >
            <BackIcon />
            {previous.frontmatter.title}
          </Anchor>
        )}
        {next && (
          <Anchor to={next.fields.slug} ml="auto">
            {next.frontmatter.title}
            <NextIcon />
          </Anchor>
        )}
      </Pagination>
    </Content>
  );
}


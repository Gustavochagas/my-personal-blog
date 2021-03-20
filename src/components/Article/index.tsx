import * as React from 'react';
import { Container, DateIcon, DatePublished, Link, Title } from './styles';

type PostType = {
  fields: {
    slug: string;
  },
  frontmatter: {
    date: string;
    description: string;
    title: string;
  },
  excerpt: string;
}

type PropTipes = {
  post?: PostType;
}

export const Article = ({ post }: PropTipes) => {
  const title = post.frontmatter.title || post.fields.slug;

  return (
    <Container>
      <Link href={post.fields.slug}>
        <header>
          <DatePublished>
            <DateIcon />
            {post.frontmatter.date}
          </DatePublished>
          <Title>{title}</Title>
        </header>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </Link>
      </Container>
  )
}
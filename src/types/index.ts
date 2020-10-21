export type PostData = {
  body: string;
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    description: string;
  };
  id: string;
};

export type PostData = {
  body: string;
  excerpt?: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    categories: string[];
    date: string;
    description?: string;
    title: string;
  };
  id?: string;
};

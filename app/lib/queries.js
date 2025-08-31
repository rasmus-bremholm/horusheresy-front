export const DOC_NEWS_ENDPOINT_QUERY = `{
  "docPages": *[_type == "docPage"] | order(order asc) {
    _id, title, content, order, category
  },
  "news": *[_type == "newsArticle"] | order(publishedAt desc) {
    _id, title, summary, content, publishedAt
  },
  "endpoints": *[_type == "apiEndpoint"] | order(order asc) {
    _id, title, method, path, description, funfacts, category->{title}
  }
}`;

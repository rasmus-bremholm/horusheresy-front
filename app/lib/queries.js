export const ALL_ENDPOINTS_QUERY = `*[_type == "apiEndpoint"] | order(order asc) {
  _id,
  title,
  method,
  path,
  description,
  funfacts,
  category->{
    title
  }
}`;

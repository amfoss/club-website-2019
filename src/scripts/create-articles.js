const path = require("path")

function createArticles(result, createPage) {
  const ArticleTemplate = path.resolve(`src/templates/articleTemplate.js`)
  const articles = result.data.allMarkdownRemark.edges
  articles.forEach(({ node }) => {
    createPage({
      path: "news/" + node.frontmatter.slug,
      component: ArticleTemplate,
      context: {
        author: node.frontmatter.author,
        slug: node.frontmatter.slug,
        id: node.id,
      },
    })
  })
}

function graphqlForNews(graphql, createPage) {
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              author
              tags
              slug
              date(formatString: "DD MMMM, YYYY")
              cover {
                childImageSharp {
                  resize(width: 150) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    createArticles(result, createPage)
  })
}

exports.graphqlForNews = graphqlForNews

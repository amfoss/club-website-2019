import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ author, description, lang, meta, title, type, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `author`,
          content: author,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords ? keywords : metaDescription
        },
        {
          name: `category`,
          content: type
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author ? author : site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'hosting-dcv',
          content: '6e16d6248fca96228ab0494ed816bb59-501e7dcc94812d01473d63d948b9df96'
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  author: ``,
  lang: `en`,
  meta: [],
  description: ``,
  type: `website`,
  keywords: ``
}

SEO.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  keywords: PropTypes.string,
}

export default SEO

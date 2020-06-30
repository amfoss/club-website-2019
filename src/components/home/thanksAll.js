import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ListCard from '../theme/listCard';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allThankYouYaml {
        edges {
          node {
            id
            Name
            Details
            Link
            Icon {
              childImageSharp {
                resize {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="thank-you" className="m-4">
      <h2 className="text-center m-2">Thank you for your help and support.</h2>
      <div className="row m-0">
        {data.allThankYouYaml.edges.map((edge) => (
          <div
            id="thank-you"
            className="col-sm-12 col-md-4 col-xl-4 p-2"
            key={edge.node.id}
          >
            <ListCard
              key={edge.node.id}
              title={edge.node.Name}
              tagline={edge.node.Details}
              icon={edge.node.Icon.childImageSharp.resize.src}
              link={edge.node.Link}
              isHTML={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

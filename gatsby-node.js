const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/projectLayout.js`)
  return graphql(`
    {
      allContentfulProjects(sort: { fields: title, order: ASC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.error) {
      throw result.error
    }
    const projects = result.data.allContentfulProjects.edges
    projects.forEach((edge, index) => {
      createPage({
        path: `/projects/${edge.node.slug}`,
        component: projectTemplate,
        context: {
          slug: edge.node.slug,
          prev: index === 0 ? null : projects[index - 1].node.slug,
          next:
            index === projects.length - 1
              ? null
              : projects[index + 1].node.slug,
        },
      })
    })
  })
}

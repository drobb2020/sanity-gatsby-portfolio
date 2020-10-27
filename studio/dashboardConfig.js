export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9841d1114aceab5ce5dc17',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-37c4192h',
                  apiId: 'ac4bf7b1-e87e-405b-83e4-5151b87f9af8'
                },
                {
                  buildHookId: '5f9841d15083aabb85e57fef',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-coxwxfkv',
                  apiId: 'bffe8cdf-8d12-4b05-ad55-7eb9ec4ce5f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/drobb2020/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-coxwxfkv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

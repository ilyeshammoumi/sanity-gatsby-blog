export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eb27d3b4dd682aac184fbdc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s6kdmvta',
                  apiId: '244c4a80-c959-40d6-aa1c-e908b9f53d48'
                },
                {
                  buildHookId: '5eb27d3b0b87a2bd40ee47ab',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kp76m59c',
                  apiId: 'bf0585f5-031b-483d-9e96-a4f3e03909bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ilyeshammoumi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kp76m59c.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

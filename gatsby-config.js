module.exports = {
  siteMetadata: {
    title: `Hrithik Pawar`,
    siteUrl: `http://localhost:8000`,
    description: `I am a %TOPICS%.`,
    topics: [
      `Full Stack Developer`,
      `Machine Learning Practitioner`,
      `Data Analyst Trainee`
    ],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'About',
        path: '/page'
      },
    ],
    footerMenu: [
      {
        name: 'About',
        path: '/page'
      },
    ],
    search: true,
    author: {
      name: `Hrithik Pawar`,
      description: `I am a Bachelor's student at Shivaji University, Kolhapur pursuing a B.Tech degree in Computer Science and Technology. I have a passion for converting ideas into reality with the Machine Learning approach. I work with various Web Development frameworks from Python and Javascript family and introduce them with my Machine Learning abilities.`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/nehalist`,
        linkedin: `https://www.linkedin.com/in/hrithik-pawar/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/hrik24-git`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    }
  ]
};

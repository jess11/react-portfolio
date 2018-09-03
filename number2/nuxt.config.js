module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'number2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'number2' }
    ],
    script: [
     { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
   ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' },
    ]
  },
  css: [
    // CSS file in the project
    // '@/assets/css/main.css',
    // SCSS file in the project

    '@/assets/css/main.scss'
  ],
  js: [
    // CSS file in the project
    // '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/js/select.js',
    '@/assets/js/main.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

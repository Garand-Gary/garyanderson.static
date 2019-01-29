import home from './data/home.json'
import me from './data/me.json'
import projects from './data/projects.json'

export default {
  getSiteData: () => ({
    title: 'Gary Anderson\'s Online Home',
  }),
  getRoutes: async () => {
      return [
          {
              path: '/',
              getData: () => ({
                  home,
              }),
          },
          {
              path: '/me',
              getData: () => ({
                  me,
              }),
          },
          {
              path: '/projects',
              getData: () => ({
                  projects,
              }),
          },
    ]
  },
}

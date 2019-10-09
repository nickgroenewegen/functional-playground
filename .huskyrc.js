const tasks = arr => arr.join(' && ')

const config = {
  'hooks': {
    'pre-commit': tasks([
      'npm run lint',
    ]),
    'pre-push': tasks([
      'npm test',
    ]),
    'commit-msg': 'npx commitlint -E HUSKY_GIT_PARAMS'
  },
}

module.exports = config

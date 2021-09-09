module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/changelog',
    '@semantic-release/github'
  ],
  branches: ['main'],
  prepare: [
    '@semantic-release/changelog',
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ]
}

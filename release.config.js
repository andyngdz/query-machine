module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git'
  ],
  branches: ['main'],
  prepare: [
    '@semantic-release/changelog',
    {
      path: '@semantic-release/git',
      assets: [
        'build/**',
        'package.json',
        'package-lock.json',
        'CHANGELOG.md',
        'README.md',
        'LICENSE'
      ],
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ]
}

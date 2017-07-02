module.exports = {
  apps: [
    {
      name: 'peepoo-backend',
      script: './index.js'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-156-126-223.eu-central-1.compute.amazonaws.com',
      key: '~/.ssh/peepoo.pem',
      ref: 'origin/master',
      repo: 'git@github.com:RickyMarou/peepoo.git',
      path: '/home/ubuntu/peepoo',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};

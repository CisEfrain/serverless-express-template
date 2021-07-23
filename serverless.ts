import type { AWS } from '@serverless/typescript'

const environment = {
  AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
  DB_HOST: ''
}

const serverlessConfiguration: AWS = {
  service: 'omni-payments-backend',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    timeout: 30,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment,
    lambdaHashingVersion: '20201221',
    iamManagedPolicies: [
      'arn:aws:iam::aws:policy/IAMFullAccess',
      'arn:aws:iam::aws:policy/AWSLambda_FullAccess'
    ],
    vpc: {
      securityGroupIds: [
        'sg-0b41e667e108a73e6'
      ],
      subnetIds: [
        'subnet-0c15e84c724776f62',
        'subnet-0c2db4b3094990d3a',
        'subnet-016db07be82fcde02'
      ]
    }
  },
  functions: {
    main: {
      handler: './handlers/index.handler',
      events: [
        {
          http: {
            method: 'ANY',
            path: '{proxy+}'
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration

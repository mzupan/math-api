# Welcome to Math API

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Deploy

Run the following commands to deploy

```
cdk bootstrap
cdk deploy
```

## Use

Once deployed you are given a URL and you can then run the following curl command

```
curl -X POST -H "Content-Type: application/json" -d '{"num1": 5, "num2": 10}' <URL_HERE>/add
```

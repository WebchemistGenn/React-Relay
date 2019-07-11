# React Relay

## Graphcool을 이용한 임시 서버 구성

graphcool 전역 설치
```bash
npm install -g graphcool
```

초기설정
```bash
graphcool init


Creating a new Graphcool service in .... ✔

Written files:
├─ types.graphql
├─ src
│  ├─ hello.js
│  └─ hello.graphql
├─ graphcool.yml
└─ package.json

To deploy your Graphcool service:
  graphcool deploy

To start your local Graphcool cluster:
  graphcool local up
  
To add facebook authentication to your service:
  graphcool add-template auth/facebook

You can find further instructions in the graphcool.yml file,
which is the central project configuration.
```

배포
```bash
graphcool deploy


? Please choose the cluster you want to deploy to (Use arrow keys)

  Shared Clusters:
❯ shared-eu-west-1 
  shared-ap-northeast-1 
  shared-us-west-2 
                       
  Custom clusters (local/private):
  local 
```
다음과 깉이 배포시에 share 또는 local에 배포할 수 있습니다. ( local로 배포시에는 Docker가 설치되어 있어야합니다. local로 배포시 다음의 명령어를 먼저 실행 해주시면 됩니다. `graphcool local up` )

쿼리 테스트
```
graphcool playground
```


---
현재 Graphcool을 이용한 Relay endpoint를 이용하고 있는데,  Prisma를 이용하거나 별도 다른 환경으로 구축한 후에 연동이 가능한지 테스트해본다.

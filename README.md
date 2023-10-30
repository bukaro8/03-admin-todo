# Development
Steps to launch the app in development

1.	Start DB in docker
	```
	docker compose up -d
```
2.	Rename .env.template to .env
3.	Replace the env variables.
4.	Execute SEED [to fill local DB](localhost:300/api/seed)

#	Prisma command
```
npx prisma init
npx prisma migrate dev
npx prima generate
```
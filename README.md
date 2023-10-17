# Development
Steps to launch the app in development

1.	Start DB in docker
	```
	docker compose up -d
```
2.	Rename .env.template to .env
3.	Replace the env variables.

#	Prisma command
```
npx prisma init
npx prisma migrate dev

```
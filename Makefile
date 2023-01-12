start:
	docker-compose up --build --force-recreate
bash-back:
	docker exec -it timelogger-back /bin/bash

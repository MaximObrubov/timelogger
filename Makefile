start:
	docker-compose up --build --force-recreate
bash-back:
	docker exec -it timelogger-back /bin/bash
bash-front:
	docker exec -it timelogger-front /bin/bash
bash-db:
	docker exec -it timelogger-db /bin/bash

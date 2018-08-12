install:
	virtualenv venv
	pip install -r requirements.txt
	mkdir log
start-supervisor:
	supervisord -c /home/limejello/dreamstate/supervisord.conf
start:
	sudo supervisorctl start dreamstate
restart:
	sudo supervisorctl restart dreamstate
stop:
	sudo supervisorctl stop dreamstate
log:
	cat nohup.out

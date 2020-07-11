install:
	virtualenv venv
	pip install -r requirements.txt
	mkdir log
	mkdir run
start-supervisor:
	supervisord -c /home/limejello/dreamstate/etc/supervisord.conf
start:
	sudo supervisorctl start dreamstate
restart:
	sudo supervisorctl restart dreamstate
stop:
	sudo supervisorctl stop dreamstate
log-out:
	cat log/dreamstate.out.log
log-err:
	cat log/dreamstate.err.log
log-super:
	cat log/supervisord.log

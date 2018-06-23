install:
	virtualenv venv
	pip install -r requirements.txt

start:
	nohup sudo python app.py &

log:
	cat nohup.out

import logging
import os
from flask import Flask
from flask import json
from flask import render_template
from flask import Response
from flask import send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    options = {
        'page_name': 'about'
    }
    return render_template('content-page.html', **options)

@app.route('/california2018')
def california2018():
    options = {
        'page_name': 'california2018'
    }
    return render_template('content-page.html', **options)

@app.route('/california2018-110')
def california2018_110():
    options = {
        'page_name': 'california2018-110'
    }
    return render_template('content-page.html', **options)

@app.route('/california2019-110')
def california2019_110():
    options = {
        'page_name': 'california2019-110'
    }
    return render_template('content-page.html', **options)

@app.route('/california2020-110')
def california2020_110():
    options = {
        'page_name': 'california2020-110'
    }
    return render_template('content-page.html', **options)

@app.route('/links')
def links():
    options = {
        'page_name': 'links'
    }
    return render_template('content-page.html', **options)

@app.route('/melatonin-dreamland')
def melatonin_dreamland():
    return render_template('melatonin-dreamland.html')

@app.route('/paris110')
def paris110():
    options = {
        'page_name': 'paris110'
    }
    return render_template('content-page.html', **options)

@app.route('/paris35')
def paris35():
    options = {
        'page_name': 'paris35'
    }
    return render_template('content-page.html', **options)

@app.route('/photos2016')
def photos2016():
    options = {
        'page_name': 'photos2016'
    }
    return render_template('content-page.html', **options)

@app.route('/photos2017')
def photos2017():
    options = {
        'page_name': 'photos2017'
    }
    return render_template('content-page.html', **options)

@app.route('/reading-log')
def reading_log():
    options = {
        'page_name': 'reading-log'
    }
    return render_template('content-page.html', **options)

@app.route('/reading-log/ajax')
def books_ajax():
    with open('static/data/reading-log.json') as f:
        data = json.load(f)
        json_data = json.dumps(data)
        resp = Response(json_data, status=200, mimetype='application/json')
        return resp

@app.route('/sketchbook')
def sketchbook():
    options = {
        'page_name': 'sketchbook'
    }
    return render_template('content-page.html', **options)

@app.route('/stuff')
def stuff():
    return render_template('stuff.html')

@app.route('/<path:filename>')
def static_file(filename):
    print(filename)
    app.logger.info(filename)
    if 'loaderio-98852357bd6d56438d9640c5bcc7a3fa' in filename:
        return 'loaderio-98852357bd6d56438d9640c5bcc7a3fa'
    else:
        return send_from_directory('./static/', filename)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 80))
    print "*** running on port %s" % port
    
    app.run(host='0.0.0.0', port=port, debug=False)


if __name__ != '__main__':
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)


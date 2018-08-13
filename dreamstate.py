import os
from flask import Flask
from flask import json
from flask import render_template
from flask import Response
from flask import send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    options = {}
    return render_template('index.html', **options)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/digital')
def digital():
    return render_template('digital.html')

@app.route('/links')
def links():
    return render_template('links.html')

@app.route('/paris35')
def paris35():
    return render_template('paris35.html')

@app.route('/reading-log')
def reading_log():
    return render_template('reading-log.html')

@app.route('/reading-log/ajax')
def books_ajax():
    with open('static/data/reading-log.json') as f:
        data = json.load(f)
        json_data = json.dumps(data)
        resp = Response(json_data, status=200, mimetype='application/json')
        return resp

@app.route('/sketchbook')
def sketchbook():
    return render_template('sketchbook.html')

@app.route('/<path:filename>')
def static_file(filename):
    print(filename)
    if 'loaderio-98852357bd6d56438d9640c5bcc7a3fa' in filename:
        return 'loaderio-98852357bd6d56438d9640c5bcc7a3fa'
    else:
        return send_from_directory('./static/', filename)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 80))
    print "*** running on port %s" % port
    
    app.run(host='0.0.0.0', port=port, debug=False)

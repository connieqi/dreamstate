import os
from flask import Flask,render_template,send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    options = {
    };
    return render_template('index.html', **options)

@app.route('/digital')
def digital():
    options = {
    };
    return render_template('digital.html', **options)

@app.route('/links')
def links():
    options = {
    };
    return render_template('links.html', **options)

@app.route('/reading-log')
def reading_log():
    options = {
    };
    return render_template('reading-log.html', **options)

# this guy handles static files
@app.route('/<path:filename>')
def send_pic(filename):
    print(filename)
    return send_from_directory('./static/', filename)


if __name__ == '__main__':
    # Bind to PORT if defined (environment variable on heroku)
    port = int(os.environ.get('PORT', 3000))
    print "*** running on port %s" % port
    
    app.run(host='0.0.0.0', port=port, debug=True)

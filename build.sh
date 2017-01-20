#!/bin/bash
BASEDIR=$(dirname "$0")
VENV=$HOME/.venv

rm -rf $VENV > /dev/null

sudo apt-get update

sudo apt-get install -y nodejs-legacy npm python3-pip python-virtualenv

cd /vagrant

npm install

pip3 install virtualenv

virtualenv -p python3 --always-copy $VENV

source $VENV/bin/activate

sudo $VENV/bin/pip install -r /vagrant/requirements.txt

start-stop-daemon -Sq -p /var/run/test -x $VENV/bin/python3 -b -- /vagrant/run.py -s 0.0.0.0 -p 8000


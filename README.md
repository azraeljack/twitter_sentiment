# Twitter Sentiment Analysis

## Set the API keys first

Export the following environment variables first, or you can add keys to the run.py script to set them automatically:
* `$ TWITTER_CONSUMER_KEY`
* `$ TWITTER_SECRET_KEY`
* `$ TWITTER_ACCESS_TOKEN`
* `$ TWITTER_ACCESS_TOKEN_SECRET`
* `$ TWITTER_ACCESS_TOKEN_SECRET`
* `$ TEXT_PROCESSING_API_KEY`

## Run in Vagrant

*NOTE: Requires [Vagrant](https://www.vagrantup.com/downloads.html) and 
[VirtualBox](https://www.virtualbox.org/wiki/Downloads).* 

* `$ Clone this repository.`
* `$ vagrant up`
* `$ You can check the web page on http://localhost:8000`

## Deploy Installation

*NOTE: Requires [virtualenv](http://virtualenv.readthedocs.org/en/latest/) and 
[Node.js](http://nodejs.org/).*

*Note: Requires [Twitter API Key](https://dev.twitter.com/resources/signup) and [Text-Processing API Key](https://market.mashape.com/japerk/text-processing/pricing)*



Then do the following installation

* `$ Clone this repository.`
* `$ virtualenv venv -p python3 --no-site-packages`
* `$ source venv/bin/activate`
* `$ cd twitter_sentiment/`
* `$ pip install -r requirements.txt`
* `$ npm install -g bower`

To build the project:

* `$ npm install`
* `$ python manage.py migrate`

To run the project locally:

* `$ python run.py -h HOST_IP -p PORT`

To test the project:

* `$ python manage.py test`





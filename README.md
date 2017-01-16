# Twitter Sentiment Analysis

## Installation

*NOTE: Requires [virtualenv](http://virtualenv.readthedocs.org/en/latest/) and 
[Node.js](http://nodejs.org/).*

*Note: Requires [Twitter API Key](https://dev.twitter.com/resources/signup) and [Text-Processing API Key](https://market.mashape.com/japerk/text-processing/pricing)*

Export the following environment variables first, or you can use the set_env.py script to set them:
* `$ TWITTER_CONSUMER_KEY`
* `$ TWITTER_SECRET_KEY`
* `$ TWITTER_ACCESS_TOKEN`
* `$ TWITTER_ACCESS_TOKEN_SECRET`
* `$ TWITTER_ACCESS_TOKEN_SECRET`
* `$ TEXT-PROCESSING_API_KEY`

Then do the following installation

* `$ Clone this repository.`
* `$ virtualenv venv -p python3 --no-site-packages`
* `$ source venv/bin/activate`
* `$ cd twitter_sentiment/`
* `$ pip install -r requirements.txt`
* `$ npm install -g bower`
* `$ npm install`
* `$ python manage.py migrate`
* `$ python manage.py runserver`



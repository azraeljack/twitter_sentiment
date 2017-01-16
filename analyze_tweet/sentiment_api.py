import requests
import json
import os

from TwitterSearch import *


class SearchTweet(object):

    def __init__(self):
        self.consumer_key = os.environ.get('TWITTER_CONSUMER_KEY')
        self.consumer_secret = os.environ.get('TWITTER_SECRET_KEY')
        self.access_token = os.environ.get('TWITTER_ACCESS_TOKEN')
        self.access_token_secret = os.environ.get('TWITTER_ACCESS_TOKEN_SECRET')

        self.tso = TwitterSearchOrder()

        self.ts = TwitterSearch(
            consumer_key=self.consumer_key,
            consumer_secret=self.consumer_secret,
            access_token=self.access_token,
            access_token_secret=self.access_token_secret
        )

        self.max_tweets = 10

    def search(self, keywords):
        if keywords:
            word_tokens = keywords.split(', ')
            counter = 0

            self.tso.set_keywords(word_tokens)
            self.tso.set_language('en')
            self.tso.set_include_entities(False)

            for tweet in self.ts.search_tweets_iterable(self.tso):
                counter += 1
                if counter < self.max_tweets:
                    yield {
                        'screen_name': tweet['user']['screen_name'],
                        'text': tweet['text']
                    }
                else:
                    break


class SentimentAnalyze(object):

    def __init__(self):
        self.sentiment_api_key = os.environ.get('TEXT-PROCESSING_API_KEY')

        self.headers = {
            "X-Mashape-Key": self.sentiment_api_key,
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        }

        self.data = {
            "language": "english",
            "text": None,
        }

        self.api = 'https://japerk-text-processing.p.mashape.com/sentiment/'

    def analyze_sentiment(self, tweet):
        self.data['text'] = tweet.get('text')
        response = requests.post(url=self.api, headers=self.headers, data=self.data)
        if response.status_code == requests.codes.ok:
            sentiment = json.loads(response.text)
            tweet['sentiment'] = sentiment.get('label')
        else:
            raise requests.RequestException('Sentiment API processing failed')

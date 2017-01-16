from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from analyze_tweet.sentiment_api import SentimentAnalyze, SearchTweet

from requests.exceptions import RequestException


class AnalyzeTweetView(APIView):

    permission_classes = (permissions.AllowAny, )

    def get(self, request, *args, **kwargs):
        keywords = request.query_params.get('keywords')
        search_tweet = SearchTweet()

        sentiment_analyze = SentimentAnalyze()

        response = []

        for tweet in search_tweet.search(keywords):
            try:
                sentiment_analyze.analyze_sentiment(tweet)
                response.append(tweet)
            except RequestException:
                continue

        if response:
            return Response(response, status=status.HTTP_200_OK)
        else:
            return Response({
                'status': 'Service Unavailable',
                'message': 'External APIs not responding properly'
            }, status=status.HTTP_503_SERVICE_UNAVAILABLE)

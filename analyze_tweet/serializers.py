from rest_framework import serializers
from analyze_tweet.models import AnalyzeTweet


class AnalyzeTweetSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnalyzeTweet
        fields = ('screen_name', 'content', 'sentiment', 'link')

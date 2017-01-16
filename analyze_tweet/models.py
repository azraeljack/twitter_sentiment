from django.db import models


class AnalyzeTweet(models.Model):
    screen_name = models.CharField(max_length=40)
    content = models.CharField(max_length=140)
    sentiment = models.CharField(max_length=10)

    def __unicode__(self):
        return self.content

    def get_tweet(self):
        return '{}: {} tweets {}'.format(self.sentiment, self.screen_name, self.content)

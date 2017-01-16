from django.test import TestCase
from analyze_tweet.models import AnalyzeTweet


class AnalyzeTweetModelTest(TestCase):
    def setUp(self):
        AnalyzeTweet.objects.create(screen_name='jack', content='Hooray!', sentiment='Positive')

    def test_content(self):
        jack = AnalyzeTweet.objects.get(screen_name='jack')
        self.assertEqual(jack.get_tweet(), '{}: {} tweets {}'.format('Positive', 'jack', 'Hooray!'))

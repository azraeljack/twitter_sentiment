import os
from subprocess import call

os.environ['TWITTER_CONSUMER_KEY'] = 'your-key'
os.environ['TWITTER_SECRET_KEY'] = 'your-key'
os.environ['TWITTER_ACCESS_TOKEN'] = 'your-key'
os.environ['TWITTER_ACCESS_TOKEN_SECRET'] = 'your-key'
os.environ['TEXT_PROCESSING_API_KEY'] = 'your-key'

call(["python", "manage.py", "runserver"])

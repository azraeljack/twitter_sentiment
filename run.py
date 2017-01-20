import os
import argparse
from subprocess import call


def main():

    base_dir = os.path.dirname(os.path.realpath(__file__))

    parser = argparse.ArgumentParser()

    parser.add_argument('--host', '-s', type=str, default="localhost", help="Specify host address")
    parser.add_argument('--port', '-p', type=str, default="8000", help="Specify server port")

    args = parser.parse_args()

    os.environ['TWITTER_CONSUMER_KEY'] = 'your-key'
    os.environ['TWITTER_SECRET_KEY'] = 'your-key'
    os.environ['TWITTER_ACCESS_TOKEN'] = 'your-key'
    os.environ['TWITTER_ACCESS_TOKEN_SECRET'] = 'your-key'
    os.environ['TEXT_PROCESSING_API_KEY'] = 'your-key'

    call(["python3", os.path.join(base_dir, 'manage.py'), "runserver", "{}:{}".format(args.host, args.port)])

if __name__ == '__main__':
    main()

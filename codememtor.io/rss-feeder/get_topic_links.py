from pathlib import Path

import requests
from bs4 import BeautifulSoup as bs


def get_response(url: str):
    res = requests.get(url)

    if res.status_code != 200:
        raise ValueError("Wrong StatusCode")

    return res


class Cache:
    FILENAME = "index.html"

    @classmethod
    def create_cache(cls, url: str):
        response = get_response(url)
        soup = bs(response.text, "lxml")

        with open(cls.FILENAME, "w") as f:
            f.write(soup.prettify())

        return soup

    @classmethod
    def load_cache(cls):
        with open(cls.FILENAME, "r") as f:
            return bs(f.read(), "lxml")


def get_rss_topic_urls():
    topics_url = "https://news.yahoo.co.jp/rss"

    if not Path("./index.html").exists():
        print(">>> Create cache :^)")
        soup = Cache.create_cache(topics_url)
    else:
        print(">>> Load Cache D:")
        soup = Cache.load_cache()

    # extraction topics
    topics = soup.find_all("li", class_="sc-dLtPhm")

    topic_urls = []

    for topic in topics:
        topic_urls.append(topic.find("a")["href"])

    return topic_urls


if __name__ == "__main__":
    get_rss_topic_urls()

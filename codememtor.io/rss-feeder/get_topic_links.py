from pathlib import Path

import requests
from bs4 import BeautifulSoup as bs


def get_response(url: str):
    res = requests.get(url)

    if res.status_code != 200:
        raise ValueError("Wrong StatusCode")

    return res


def soupnize(html: str) -> bs:
    return bs(html, "lxml")


def get_rss_topic_urls():
    filename = "index.html"

    if not Path("./index.html").exists():
        print(">>> Create cache :^)")
        topics_url = "https://news.yahoo.co.jp/rss"
        response = get_response(topics_url)
        soup = soupnize(response.text)

        with open(filename, "w") as f:
            f.write(soup.prettify())
    else:
        print(">>> Load Cache")
        with open(filename, "r") as f:
            soup = soupnize(f.read())

    # extraction topics
    topics = soup.find_all("li", class_="sc-dLtPhm")

    topic_urls = []

    for topic in topics:
        topic_urls.append(topic.find("a")["href"])

    return topic_urls


if __name__ == "__main__":
    get_rss_topic_urls()

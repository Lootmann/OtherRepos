from typing import List, Union

import bs4

from cache import Cache
from scraper import get_response, get_soup

# type hint
Element = Union[bs4.element.Tag, bs4.element.NavigableString, None]

URL = "https://www.washingtonpost.com/politics/2023/02/20/fetterman-depression-mental-health/"
FILENAME = "index.html"


def main():
    if Cache.has_cache(filename=FILENAME):
        print(">>> Cache Found")
        html = Cache.get_cache(filename=FILENAME)
    else:
        print(">>> Cache Not Found")
        html = get_response(URL)
        Cache.create_cache(filename=FILENAME, txt=html)

    soup = get_soup(html)

    main_content: Element = soup.find(id="main-content")

    if main_content is None:
        return

    print("*** Title ***")
    print(main_content.text.strip())

    print("*** head line ***")
    author_name = soup.find("a", attrs={"data-qa": "author-name"})
    print(author_name.text)

    posted_date = soup.find("span", attrs={"data-testid": "display-date"})
    print(posted_date.text)

    articles = soup.find_all(class_="article-body")
    for article in articles:
        p_tag: Element = article.p
        if p_tag:
            print(p_tag.text.strip())


if __name__ == "__main__":
    main()

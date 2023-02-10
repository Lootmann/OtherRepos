from get_rss import get_rss
from get_topic_links import get_rss_topic_urls


def prettify(d: dict) -> None:
    """
    rss: {
        "channel" : {
            "title"
            "item" : [
                {item},
                {item},
                {item},
            ]
        }
    }
    """
    print("TITLE : {}".format(d["rss"]["channel"]["title"]))

    # simple validation
    if "channel " in d["rss"]:
        if "title" in d["rss"]["channel"]:
            for item in d["rss"]["channel"]["item"]:
                print()
                print(item["title"])
                print(item["pubDate"])


def main():
    rss_urls = get_rss_topic_urls()

    for url in rss_urls:
        prettify(get_rss(url))


if __name__ == "__main__":
    main()

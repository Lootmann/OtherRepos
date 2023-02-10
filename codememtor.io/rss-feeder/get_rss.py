import time

import requests
import xmltodict


def get_respones(url: str):
    response = requests.get(url)

    if response.status_code != 200:
        raise ValueError("wha!")

    return response


def get_rss(url: str) -> dict:
    time.sleep(1)

    full_link = f"https://news.yahoo.co.jp/{url}"
    print(f">>> RSS FROM {full_link}")

    response = get_respones(full_link)
    return xmltodict.parse(response.text)

import requests
from bs4 import BeautifulSoup as bs


def get_response(url: str):
    res = requests.get(url)
    res.raise_for_status()
    return res.text


def get_soup(html: str) -> bs:
    return bs(html, "lxml")

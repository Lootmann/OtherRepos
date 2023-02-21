import os
from typing import Dict, List

import requests
from dotenv import load_dotenv
from pydantic import BaseModel

load_dotenv()


class Quote(BaseModel):
    author: str
    category: str
    quote: str

    def __repr__(self) -> str:
        return f"<Quote ({self.author}) ({self.category}) {self.quote}>"


def get_random_quote() -> Quote:
    api_url = "https://api.api-ninjas.com/v1/quotes"

    response = requests.get(api_url, headers={"X-Api-Key": os.environ["API_KEY"]})
    response.raise_for_status()

    response_json: List[Dict[str, str]] = response.json()
    return Quote(**response_json[0])

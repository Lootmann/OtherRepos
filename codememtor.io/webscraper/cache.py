from pathlib import Path


class Cache:
    @classmethod
    def has_cache(cls, filename: str) -> bool:
        return Path(filename).exists()

    @classmethod
    def get_cache(cls, filename: str) -> str:
        return Path(filename).read_text()

    @classmethod
    def create_cache(cls, filename: str, txt: str) -> None:
        Path(filename).write_text(txt)

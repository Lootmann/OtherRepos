from django.db import models

from words.models import Word


class Example(models.Model):
    sentence = models.TextField()
    translation = models.TextField()
    word = models.ForeignKey(Word, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"spell: {self.sentence[:50]}, translation: {self.translation[:50]}"

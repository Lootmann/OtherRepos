from django.db import models


class Word(models.Model):
    spell = models.CharField(max_length=50)
    meaning = models.TextField()

    def __str__(self) -> str:
        return f"spell: {self.spell}"


class Example(models.Model):
    sentence = models.TextField()
    translation = models.TextField()

    def __str__(self) -> str:
        return f"spell: {self.sentence[:50]}, translation: {self.translation[:50]}"

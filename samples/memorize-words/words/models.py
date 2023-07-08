from django.db import models


class Word(models.Model):
    spell = models.CharField(max_length=50)
    meaning = models.TextField()

    def __str__(self) -> str:
        return f"spell: {self.spell}"

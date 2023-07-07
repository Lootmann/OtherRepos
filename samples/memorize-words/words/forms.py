from django import forms

from words.models import Word


class WordForm(forms.ModelForm):
    class Meta:
        model = Word
        fields = ["spell", "meaning"]

from django import forms

from words.models import Example


class ExampleForm(forms.ModelForm):
    class Meta:
        model = Example
        fields = ["sentence", "translation", "word"]

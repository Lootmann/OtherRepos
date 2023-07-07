from django import forms


class WordForm(forms.Form):
    spell = forms.CharField(label="Spell", max_length=50)
    meaning = forms.TextInput()

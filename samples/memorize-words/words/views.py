from django.http import HttpRequest
from django.shortcuts import render
from django.views import generic

from words.forms import WordForm
from words.models import Word


class WordIndexView(generic.View):
    form_class = WordForm
    template_name = "words/index.html"

    def get(self, request: HttpRequest, *args, **kwargs):
        form = self.form_class()
        return render(request, self.template_name, {"form": form})

    def post(self, request: HttpRequest, *args, **kwargs):
        form = self.form_class()

        if form.is_valid():
            return render(request, self.template_name, {"form": form})

        return render(request, self.template_name, {"form": form})


class WordListView(generic.ListView):
    model = Word
    template_name = "words/word_list.html"
    context_object_name = "words"

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
        f = self.form_class(request.POST)

        if f.is_valid():
            word = f.save(commit=False)
            word.save()
            return render(request, self.template_name, {"form": self.form_class()})

        return render(request, self.template_name, {"form": f})


class WordListView(generic.ListView):
    model = Word
    template_name = "words/word_list.html"
    context_object_name = "words"

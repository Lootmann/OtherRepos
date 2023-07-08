from django.http import HttpRequest
from django.shortcuts import render
from django.views import generic

from examples.forms import ExampleForm


class ExampleIndexView(generic.View):
    form_class = ExampleForm
    template_name = "examples/index.html"

    def get(self, request: HttpRequest, *args, **kwargs):
        form = self.form_class()
        return render(request, self.template_name, {"form": form})

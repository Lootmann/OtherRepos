from django.http import HttpRequest
from django.shortcuts import render
from django.views import generic

from examples.forms import ExampleForm
from examples.models import Example


class ExampleIndexView(generic.View):
    form_class = ExampleForm
    template_name = "examples/index.html"

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


class ExampleListView(generic.ListView):
    model = Example
    template_name = "examples/example_list.html"
    context_object_name = "examples"

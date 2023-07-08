from django.http import HttpRequest
from django.shortcuts import render
from django.views import generic


class ExampleIndexView(generic.View):
    # form_class = "..."
    template_name = "examples/index.html"

    def get(self, request: HttpRequest, *args, **kwargs):
        return render(request, self.template_name, {})

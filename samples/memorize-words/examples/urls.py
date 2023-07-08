from django.urls import path

from examples.views import ExampleIndexView

app_name = "examples"

urlpatterns = [
    path("", ExampleIndexView.as_view(), name="index"),
]

from django.urls import path

from examples.views import ExampleIndexView, ExampleListView

app_name = "examples"

urlpatterns = [
    path("", ExampleIndexView.as_view(), name="index"),
    path("list/", ExampleListView.as_view(), name="list"),
]

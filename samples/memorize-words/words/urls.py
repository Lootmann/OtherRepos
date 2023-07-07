from django.urls import path

from words.views import WordIndexView, WordListView

app_name = "words"

urlpatterns = [
    path("", WordIndexView.as_view(), name="index"),
    path("list/", WordListView.as_view(), name="list"),
]

from django.contrib import admin

from words.models import Word


@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    pass

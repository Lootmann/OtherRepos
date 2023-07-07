from django.contrib import admin

from words.models import Example, Word


@admin.register(Example)
class ExampleAdmin(admin.ModelAdmin):
    pass

@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    pass
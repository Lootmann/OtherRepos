from django.contrib import admin

from examples.models import Example


@admin.register(Example)
class ExampleAdmin(admin.ModelAdmin):
    pass

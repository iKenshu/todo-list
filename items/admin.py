from django.contrib import admin

from .models import Item


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'pub_date')
    list_editable = ('description',)
    prepopulated_fields = {'slug': ('name',)}

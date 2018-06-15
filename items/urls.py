from django.urls import path

app_name = 'items'

from .views import (ItemListView,
                    ItemDetailView,
                    ItemCreateView,
                    ItemDeleteView,
                    ItemListViewReact)

app_name = 'items'
urlpatterns = [
    path('',
         view=ItemListViewReact.as_view(),
         name='list_react'),
]

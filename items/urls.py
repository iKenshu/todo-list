from django.urls import path

from .views import ItemListViewReact

app_name = 'items'
urlpatterns = [
    path('',
         view=ItemListViewReact.as_view(),
         name='list_react'),
]

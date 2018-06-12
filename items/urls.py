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
         view=ItemListView.as_view(),
         name='list'),
    path('react/',
         view=ItemListViewReact.as_view(),
         name='list_react'),
    path('add/',
         view=ItemCreateView.as_view(),
         name='add'),
    path('<slug:slug>/',
         view=ItemDetailView.as_view(),
         name='detail'),
    path('<int:pk>/delete',
         view=ItemDeleteView.as_view(),
         name='delete'),

]

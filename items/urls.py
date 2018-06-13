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
    path('other/',
         view=ItemListView.as_view(),
         name='list'),

    path('other/add/',
         view=ItemCreateView.as_view(),
         name='add'),
    path('other/<slug:slug>/',
         view=ItemDetailView.as_view(),
         name='detail'),
    path('other/<int:pk>/delete',
         view=ItemDeleteView.as_view(),
         name='delete'),

]

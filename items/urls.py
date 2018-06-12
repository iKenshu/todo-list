from django.urls import path

from .views import (ItemListView,
                    ItemDetailView,
                    ItemCreateView,
                    ItemDeleteView)

app_name = 'items'
urlpatterns = [
    path('',
         view=ItemListView.as_view(),
         name='list'),
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

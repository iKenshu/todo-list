from django.urls import path

from .views import ItemListView, ItemDetailView

app_name = 'items'
urlpatterns = [
    path('', ItemListView.as_view(), name='list'),
    # path('add/', ItemCreateView.as_view(), name='add'),
    path('<slug:slug>/', ItemDetailView.as_view(), name='detail')
]

from django.urls import path

from .views import ItemAPIList, ItemAPICreate

app_name = 'api'

urlpatterns = [
    path('items/', ItemAPIList.as_view(), name='list'),
    path('items/new', ItemAPICreate.as_view(), name='create')
]
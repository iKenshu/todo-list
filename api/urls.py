from django.urls import path

from .views import ItemAPIList

app_name = 'api'

urlpatterns = [
    path('items/', ItemAPIList.as_view(), name='list')
]
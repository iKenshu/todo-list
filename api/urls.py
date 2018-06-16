from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token

from .views import (ItemAPIList,
                    ItemAPICreate,
                    current_user,
                    UserListView,
                    ItemAPIDelete,)

app_name = 'api'

urlpatterns = [
    path('items/', ItemAPIList.as_view(), name='list'),
    path('items/new', ItemAPICreate.as_view(), name='create'),
    path('items/delete/<int:pk>/', ItemAPIDelete.as_view(), name='delete'),
    path('token/', obtain_jwt_token),
    path('current-user/', current_user),
    path('users/', UserListView.as_view())

]

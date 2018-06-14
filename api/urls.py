from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token

from .views import ItemAPIList, ItemAPICreate, current_user, UserListView

app_name = 'api'

urlpatterns = [
    path('items/', ItemAPIList.as_view(), name='list'),
    path('items/new', ItemAPICreate.as_view(), name='create'),
    path('rest-auth/', include('rest_auth.urls')),
    path('token/', obtain_jwt_token),
    path('current-user/', current_user),
    path('users/', UserListView.as_view())

]

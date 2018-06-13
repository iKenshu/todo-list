from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('items.urls', namespace='items')),
    path('api/', include('api.urls', namespace='api')),
    path('rest-auth/', include('rest_auth.urls')),


] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

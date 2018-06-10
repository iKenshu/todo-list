from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('items.urls', namespace='items')),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

from django.shortcuts import render, get_object_or_404
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from items.models import Item

from .serializers import ItemSerializer
from .pagination import StandardResultsPagination


class ItemAPIList(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    pagination_class = StandardResultsPagination
    permission_class = (IsAuthenticated)


class ItemAPICreate(CreateAPIView):
    serializer_class = ItemSerializer
    permission_class = (IsAuthenticated)

from django.shortcuts import render, get_object_or_404
from rest_framework.generics import ListAPIView, CreateAPIView

from items.models import Item
from .serializers import ItemSerializer


class ItemAPIList(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemAPICreate(CreateAPIView):
    serializer_class = ItemSerializer

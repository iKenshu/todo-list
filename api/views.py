from django.shortcuts import render, get_object_or_404
from rest_framework.generics import ListAPIView

from items.models import Item
from .serializers import ItemListSerializer


class ItemAPIList(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemListSerializer

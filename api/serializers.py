from rest_framework import serializers

from items.models import Item


class ItemListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = (
            'name',
            'description',
            'slug',
            'pub_date',
        )

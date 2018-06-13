from rest_framework import serializers
from items.models import Item

from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)


class ItemSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Item
        fields = (
            'user',
            'name',
            'description',
            'pub_date',
        )

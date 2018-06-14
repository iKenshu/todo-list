from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect

from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.generics import ListAPIView, CreateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from items.models import Item

from .serializers import ItemSerializer, UserSerializer, UserSerializerWithToken
from .pagination import StandardResultsPagination


@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserListView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class ItemAPIList(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    pagination_class = StandardResultsPagination
    permission_classes = (IsAuthenticated,)


class ItemAPICreate(CreateAPIView):
    serializer_class = ItemSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kargs):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=HTTP_400_BAD_REQUEST)
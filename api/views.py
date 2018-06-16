from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.generics import ListAPIView, CreateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.mixins import DestroyModelMixin

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
    serializer_class = ItemSerializer
    pagination_class = StandardResultsPagination
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        items = Item.objects.filter(user=self.request.user)
        return items


class ItemAPICreate(CreateAPIView):
    serializer_class = ItemSerializer
    permission_classes = (IsAuthenticated,)


class ItemAPIDelete(DestroyModelMixin, GenericAPIView):
    serializer_class = ItemSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Item.objects.all()

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
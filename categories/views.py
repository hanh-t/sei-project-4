from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Category
from .serializers.common import CategorySerializer

class CategoryListView(APIView):
    def get(self, _request):
        categories = Category.objects.all() 
        serialized_categories = CategorySerializer(categories, many=True) 
        return Response(serialized_categories.data, status=status.HTTP_200_OK)

class CategoryDetailView(APIView):
    def get_category(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise NotFound(detail="🚨 Cannot find that category")


    def get(self, _request, pk):
        category = self.get_category(pk=pk)
        serialized_category = CategorySerializer(category)
        return Response(serialized_category.data, status=status.HTTP_200_OK)
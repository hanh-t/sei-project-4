from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Category
from .serializers.common import CategorySerializer
from .serializers.populated import PopulatedCategorySerializer

class CategoryListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
    def get(self, _request):
        categories = Category.objects.all() 
        serialized_categories = PopulatedCategorySerializer(categories, many=True) 
        return Response(serialized_categories.data, status=status.HTTP_200_OK)

class CategoryDetailView(APIView):
    def get_category(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise NotFound(detail="🚨 Cannot find that category")


    def get(self, _request, pk):
        category = self.get_category(pk=pk)
        serialized_category = PopulatedCategorySerializer(category)
        return Response(serialized_category.data, status=status.HTTP_200_OK)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

from .models import Resource 
from .serializers.common import ResourceSerializer

class ResourceListView(APIView):
    def get(self, _request):
        resources = Resource.objects.all()
        serialized_resources = ResourceSerializer(resources, many=True) 
        return Response(serialized_resources.data, status=status.HTTP_200_OK)

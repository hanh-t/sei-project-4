from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.exceptions import NotFound

from .models import Resource 
from .serializers.common import ResourceSerializer

class ResourceListView(APIView):
    def get(self, _request):
        resources = Resource.objects.all()
        serialized_resources = ResourceSerializer(resources, many=True) 
        return Response(serialized_resources.data, status=status.HTTP_200_OK)

class ResourceDetailView(APIView):
    def get_resource(self, pk):
        try:
            return Resource.objects.get(pk=pk)
        except Resource.DoesNotExist:
            raise NotFound(detail="🚨 Cannot find that resource")

    def get(self, _request, pk):
        resource = self.get_resource(pk=pk)
        serialized_resource = ResourceSerializer(resource)
        return Response(serialized_resource.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        resource_to_delete = self.get_resource(pk=pk)
        resource_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        resource_to_edit = self.get_resource(pk=pk)
        updated_resource = ResourceSerializer(resource_to_edit, data=request.data)
        if updated_resource.is_valid():
            updated_resource.save()
            return Response(updated_resource.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_resource.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
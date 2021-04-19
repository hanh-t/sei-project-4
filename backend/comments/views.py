from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated
from rest_framework import status 
from rest_framework.exceptions import NotFound, PermissionDenied

from .serializers.common import CommentSerializer
from .models import Comment 

class CommentListView(APIView):
    # permission_classes = (IsAuthenticated,)

    def post(self, request):
        request.data["owner"] = request.user.id 
        comment_to_create = CommentSerializer(data=request.data) 
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class CommentDetailView(APIView):
    def get_comment(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound(detail="🚨 Cannot find that comment")

    def get(self, _request, pk):
        comment = self.get_comment(pk=pk) 
        serialized_comment = CommentSerializer(comment) 
        return Response(serialized_comment.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        comment_to_edit = self.get_comment(pk=pk)
        updated_comment = CommentSerializer(comment_to_edit, data=request.data)
        if updated_comment.is_valid():
            updated_comment.save()
            return Response(updated_comment.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_comment.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        try:
            comment_to_delete = Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound()
        if comment_to_delete.owner != request.user:
            raise PermissionDenied()    
        comment_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
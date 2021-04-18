from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated

from .models import Habit
from .serializers.common import HabitSerializer

class HabitListView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, _request):
        habits = Habit.objects.all()	 
        serialized_habits = HabitSerializer(habits, many=True) 
        return Response(serialized_habits.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data["owner"] = request.user.id
        habit_to_add = HabitSerializer(data=request.data)
        if habit_to_add.is_valid():
            habit_to_add.save()
            return Response(habit_to_add.data, status=status.HTTP_201_CREATED)
        return Response(habit_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class HabitDetailView(APIView):
    permission_classes = (IsAuthenticated,)

    def get_habit(self, pk):
        try:
            return Habit.objects.get(pk=pk)
        except Habit.DoesNotExist:
            raise NotFound(detail="🚨 Cannot find that habit")
    
    def get(self, _request, pk):
        habit = self.get_habit(pk=pk) 
        serialized_habit = HabitSerializer(habit) 
        return Response(serialized_habit.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        habit_to_delete = self.get_habit(pk=pk)
        if habit_to_delete.owner != request.user:
            raise PermissionDenied()
        habit_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        habit_to_edit = self.get_habit(pk=pk)
        updated_habit = HabitSerializer(habit_to_edit, data=request.data)
        if updated_habit.is_valid():
            updated_habit.save()
            return Response(updated_habit.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_habit.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

from .models import Habit
from .serializers.common import HabitSerializer

class HabitListView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, _request):
        habits = Habit.objects.all()	 
        serialized_habits = HabitSerializer(habits, many=True) 
        return Response(serialized_habits.data, status=status.HTTP_200_OK)

class HabitDetailView(APIView):
    def get_habit(self, pk):
        try:
            return Habit.objects.get(pk=pk)
        except Habit.DoesNotExist:
            raise NotFound(detail="🚨 Cannot find that habit")

    def delete(self, _request, pk):
        habit_to_delete = self.get_habit(pk=pk)
        habit_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
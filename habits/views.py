from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import Habit
from .serializers.common import HabitSerializer

class HabitListView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, _request):
        habits = Habit.objects.all()	 
        serialized_habits = HabitSerializer(habits, many=True) 
        return Response(serialized_habits.data, status=status.HTTP_200_OK)

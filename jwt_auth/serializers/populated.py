from habits.serializers.populated import PopulatedHabitSerializer
from .serializers.common import UserSerializer


class PopulatedUserSerializer(UserSerializer):

    habits = PopulatedHabitSerializer(many=True)
    
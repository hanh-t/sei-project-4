from  jwt_auth.serializers.common import UserSerializer
from .common import HabitSerializer
from categories.serializers.common import CategorySerializer

class PopulatedHabitSerializer(HabitSerializer):
    owner = UserSerializer()
    category = CategorySerializer()

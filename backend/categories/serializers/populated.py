from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import CategorySerializer


class PopulatedCategorySerializer(CategorySerializer):

    comments = PopulatedCommentSerializer(many=True)
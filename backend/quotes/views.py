from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Quote
from .serializers.common import QuoteSerializer

class QuoteListView(APIView):

    def get(self, _request):
        quotes = Quote.objects.all()
        serialized_quotes = QuoteSerializer(quotes, many=True)
        return Response(serialized_quotes.data, status=status.HTTP_200_OK)

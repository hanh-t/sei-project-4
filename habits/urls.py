from django.urls import path
from .views import HabitListView, HabitDetailView

urlpatterns = [
	path('', HabitListView.as_view()),
    path('<int:pk>/', HabitDetailView.as_view())
]

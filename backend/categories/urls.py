from django.urls import path 
from .views import CategoryListView, CategoryDetailView
# from habits.views import HabitListView

urlpatterns = [
    path('', CategoryListView.as_view()),
    path('<int:pk>/', CategoryDetailView.as_view())
    # path('<int:pk>/habits/', HabitListView.as_view())
]

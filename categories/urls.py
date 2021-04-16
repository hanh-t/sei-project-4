from django.urls import path 
from .views import CategoryListView, CategoryDetailView
# from ..comments.views import CommentListView

urlpatterns = [
    path('', CategoryListView.as_view()),
    path('<int:pk>/', CategoryDetailView.as_view())
    # path('<int:pk>/comments/', CommentListView.as_view())
]

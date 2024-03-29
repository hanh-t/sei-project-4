from django.urls import path
from .views import ResourceListView, ResourceDetailView

urlpatterns = [
	path('', ResourceListView.as_view()),
    path('<int:pk>/', ResourceDetailView.as_view()),
    path('<int:pk>/cart/', ResourceDetailView.as_view()),
    path('<int:pk>/orders/', ResourceDetailView.as_view())
    
]

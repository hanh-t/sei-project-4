from django.urls import path
from .views import RegisterView, LoginView, UserDetailView
# UserPartialUpdateView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/<int:pk>/', UserDetailView.as_view()),
    path('profile/<int:pk>/edit/', UserDetailView.as_view())
    # path('profile/<int:pk>/update-points', UserPartialUpdateView.as_view()),
    # path('profile/<int:pk>/orders/', UserPartialUpdateView.as_view())
]

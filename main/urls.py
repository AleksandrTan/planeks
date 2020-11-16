from django.urls import path
from django.contrib.auth import views as auth_views
from main.views import MainView

urlpatterns = [
  path('login/', auth_views.LoginView.as_view(), name='loginadmin'),
  path('logout/', auth_views.LogoutView.as_view(), name='logoutadmin'),
  path('', MainView.as_view(), name='home'),
]

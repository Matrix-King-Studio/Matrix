from django.urls import path
from Project.views import ProjectList

urlpatterns = [
    path('projectList/', ProjectList.as_view()),
]

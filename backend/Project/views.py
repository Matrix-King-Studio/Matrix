from rest_framework import generics
from rest_framework.permissions import AllowAny
from Project.models import Project
from Project.serializers import ProjectListSerializer


class ProjectList(generics.ListAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectListSerializer
	permission_classes = (AllowAny,)

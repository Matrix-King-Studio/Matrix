from rest_framework import serializers
from Project.models import Project


class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        exclude = ['publishDate']

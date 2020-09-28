from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Project(models.Model):
	title = models.CharField(verbose_name='项目名称', max_length=64)
	url = models.URLField(verbose_name='上线URL', max_length=200, null=True, blank=True)
	repositories = models.URLField(verbose_name='仓库URL', max_length=200, null=True, blank=True)
	describe = models.TextField(verbose_name='项目描述')
	publishDate = models.DateTimeField(verbose_name='发布日期', default=timezone.now())
	onlineData = models.DateField(verbose_name='上线日期', default=timezone.now())

	def __str__(self):
		return self.title


class ProjectImages(models.Model):
	project = models.ForeignKey(to=Project, on_delete=models.CASCADE)
	image = models.ImageField(verbose_name='项目图片', upload_to="project/", blank=True, null=True)

	def __str__(self):
		return self.project.title


class TechnologyStack(models.Model):
	project = models.ForeignKey(to=Project, on_delete=models.CASCADE)
	title = models.CharField(verbose_name='标签', max_length=64)

	def __str__(self):
		return self.project.title

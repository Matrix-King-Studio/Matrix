from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
	title = models.CharField(verbose_name='项目名称', max_length=64)
	url = models.URLField(verbose_name='上线URL', max_length=200)
	repositories = models.URLField(verbose_name='仓库URL', max_length=200)
	introduction = models.CharField(verbose_name='项目介绍', max_length=70)
	describe = models.TextField(verbose_name='项目详细描述')

	def __str__(self):
		return self.title

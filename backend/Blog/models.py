from django.db import models
from django.contrib.auth.models import User


class Blog(models.Model):
	title = models.CharField(verbose_name='个人博客标题', max_length=64)

	user = models.OneToOneField(User, null=True, blank=True, on_delete=models.SET_NULL)

	def __str__(self):
		return self.title


class Category(models.Model):
	title = models.CharField(verbose_name='分类标题', max_length=64)

	blog = models.ForeignKey(verbose_name='所属博客', to='Blog', on_delete=models.CASCADE)

	def __str__(self):
		return self.title


class Tag(models.Model):
	title = models.CharField(verbose_name='标签名称', max_length=64)

	def __str__(self):
		return self.title


class Article(models.Model):
	title = models.CharField(max_length=100, verbose_name='文章标题')
	abstract = models.CharField(max_length=255, verbose_name='文章描述')
	content = models.TextField()
	createTime = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)

	commentCount = models.IntegerField(default=0)
	upCount = models.IntegerField(default=0)
	downCount = models.IntegerField(default=0)
	viewCount = models.IntegerField(default=0)

	blog = models.ForeignKey(to=Blog, null=True, on_delete=models.CASCADE)
	category = models.ForeignKey(to=Category, null=True, on_delete=models.CASCADE)
	tags = models.ManyToManyField(to=Tag)

	def __str__(self):
		return self.title


class ArticleUpDown(models.Model):
	blog = models.ForeignKey(to=Blog, null=True, on_delete=models.CASCADE)
	article = models.ForeignKey(to=Article, null=True, on_delete=models.CASCADE)
	flag = models.BooleanField(default=True)

	class Meta:
		unique_together = [
			('article', 'blog'),
		]

	def __str__(self):
		return self.blog.title + "_" + self.article.title + "_" + "1" if self.flag else "0"


class Comment(models.Model):
	blog = models.ForeignKey(verbose_name='评论者', to=Blog, null=True, on_delete=models.CASCADE)
	article = models.ForeignKey(verbose_name='评论文章', to='Article', on_delete=models.CASCADE)
	content = models.CharField(verbose_name='评论内容', max_length=255)
	createTime = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)
	parentComment = models.ForeignKey('self', null=True, on_delete=models.CASCADE)

	def __str__(self):
		return self.blog.title + "_" + self.article.title + "_" + self.content

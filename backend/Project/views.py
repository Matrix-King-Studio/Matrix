from rest_framework import generics
from rest_framework.permissions import AllowAny
from Blog.models import Article
from Blog.serializers import ArticleListSerializer, ArticleDetailSerializer


class ArticleList(generics.ListAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleListSerializer
	permission_classes = (AllowAny,)


class ArticleDetail(generics.RetrieveAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleDetailSerializer
	permission_classes = (AllowAny,)

	def get(self, request, *args, **kwargs):
		# 每次获取文章详情，该文章的浏览次数增加1
		article = Article.objects.get(pk=kwargs.get('pk'))
		article.viewCount = article.viewCount + 1
		article.save()
		return self.retrieve(request, *args, **kwargs)

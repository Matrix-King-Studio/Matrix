from django.urls import path
from Blog.views import ArticleList, ArticleDetail

urlpatterns = [
    path('project/', ArticleList.as_view()),
]

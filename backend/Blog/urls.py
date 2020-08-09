#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time     : 2020/8/9 14:46
# @File     : urls.py
# ----------------------------------------------
# ☆ ☆ ☆ ☆ ☆ ☆ ☆ 
# >>> Author    : Alex 007
# >>> QQ        : 2426671397
# >>> WeChat    : Alex-Paddle
# >>> Mail      : alex18812649207@gmail.com
# >>> Github    : https://github.com/koking0
# >>> Blog      : https://alex007.blog.csdn.net/
# ☆ ☆ ☆ ☆ ☆ ☆ ☆
from django.urls import path
from Blog.views import ArticleList, ArticleDetail

urlpatterns = [
    path('article/', ArticleList.as_view()),
    path('detail/<int:pk>', ArticleDetail.as_view()),
]

#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time     : 2020/8/9 14:35
# @File     : serializers.py
# ----------------------------------------------
# ☆ ☆ ☆ ☆ ☆ ☆ ☆ 
# >>> Author    : Alex 007
# >>> QQ        : 2426671397
# >>> WeChat    : Alex-Paddle
# >>> Mail      : alex18812649207@gmail.com
# >>> Github    : https://github.com/koking0
# >>> Blog      : https://alex007.blog.csdn.net/
# ☆ ☆ ☆ ☆ ☆ ☆ ☆
from rest_framework import serializers
from Blog.models import Article


class ArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        exclude = ['content', 'createTime']


class ArticleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['title', 'content', 'createTime', 'commentCount', 'upCount', 'downCount', 'viewCount']

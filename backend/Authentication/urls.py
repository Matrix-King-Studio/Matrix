#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time     : 2020/8/6 23:04
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
from django.urls import path, include

urlpatterns = [
	path(r'rest-auth/', include('rest_auth.urls')),
	path(r'rest-auth/registration/', include('rest_auth.registration.urls')),
]

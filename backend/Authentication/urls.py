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
from rest_framework import status
from django.urls import path, include
from rest_framework.response import Response
from rest_auth.registration.views import RegisterView


# 继承 RegisterView
class MatrixRegisterView(RegisterView):
    # 重写 create 方法
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)

            return Response(self.get_response_data(user),
                            status=status.HTTP_201_CREATED,
                            headers=headers)
        # 验证失败时，返回错误信息
        else:
            return Response(serializer.errors, status=status.HTTP_200_OK)


urlpatterns = [
    path(r'rest-auth/', include('rest_auth.urls')),
    path(r'rest-auth/registration/', MatrixRegisterView.as_view(), name='rest_register'),
]

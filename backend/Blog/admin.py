from django.contrib import admin
from Blog import models


admin.site.register(models.Tag)
admin.site.register(models.Blog)
admin.site.register(models.Comment)
admin.site.register(models.Article)
admin.site.register(models.Category)
admin.site.register(models.ArticleUpDown)

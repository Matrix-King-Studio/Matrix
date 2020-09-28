from django.contrib import admin
from Project import models


class ProjectImagesInline(admin.StackedInline):
	model = models.ProjectImages
	extra = 5


class ProjectTechnologyStackInline(admin.StackedInline):
	model = models.TechnologyStack
	extra = 5


class ProjectAdmin(admin.ModelAdmin):
	fieldsets = [
		('Information', {'fields': ['title', 'describe', 'publishDate', 'onlineData']}),
		('Link', {'fields': ['url', 'repositories'], 'classes': ['collapse']}),
	]
	inlines = [ProjectImagesInline, ProjectTechnologyStackInline]


admin.site.register(models.Project, ProjectAdmin)

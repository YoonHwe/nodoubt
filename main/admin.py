from django.contrib import admin
from .models import Data, Feedback, Request, Like
# Register your models here.
class dataAdmin(admin.ModelAdmin):
    search_fields = ['company']

admin.site.register(Data, dataAdmin)
admin.site.register(Request)
admin.site.register(Feedback)
admin.site.register(Like)


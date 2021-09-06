from django.contrib import admin
from .models import Data, Feedback, Request, Like
# Register your models here.
admin.site.register(Data)
admin.site.register(Request)
admin.site.register(Feedback)
admin.site.register(Like)
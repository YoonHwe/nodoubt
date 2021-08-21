from django.contrib import admin
from .models import Data, Feedback, Request
# Register your models here.
admin.site.register(Data)
admin.site.register(Request)
admin.site.register(Feedback)
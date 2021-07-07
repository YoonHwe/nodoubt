from django.urls import path
from main import views
from .views import *

app_name = "main"
urlpatterns = [
    path('',views.showmain,name="showmain"),
    path('introduce/',views.introduce, name="introduce"),
    path('<str:id>',views.detail, name="detail"),
    path('new/',views.new, name="new"),
    path('create/',views.create, name="create"),
]
    
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
    path('edit/<str:id>',views.edit, name="edit"),
    path('update/<str:id>',views.update, name="update"),
    path('delete/<str:id>',views.delete, name="delete"),
    path('request_create/',views.request_create, name="request_create"),
]
    
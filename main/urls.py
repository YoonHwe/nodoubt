from django.urls import path
from main import views
from .views import *

app_name = "main"
urlpatterns = [
    path('',views.showmain,name="showmain"),
    path('introduce/',views.introduce, name="introduce"),
    path('<str:id>',views.detail, name="detail"),
    path('create/',views.create, name="create"),
    path('update/<str:id>',views.update, name="update"),
    path('delete/<str:id>',views.delete, name="delete"),
    path('request_create/',views.request_create, name="request_create"),
    path('letter/',views.letter, name="letter"),
    path('feedback/',views.feedback, name="feedback"),
    path('board/',views.board, name="board"),
    path('board_new/',views.board_new, name="board_new"),
    path('board_detail/<str:id>',views.board_detail, name="board_detail"),
    path('board_edit/<str:id>',views.board_edit, name="board_edit"),
    path('board_update/<str:id>',views.board_update, name="board_update"),
    path('board_create/',views.board_create, name="board_create"),
    path('board_delete/<str:id>',views.board_delete, name="board_delete"),
    path('<str:board_id>/create_board_comment', create_board_comment, name="create_board_comment"),
    path('<str:board_comment_id>/edit_board_comment',edit_board_comment,name='edit_board_comment'),
    path('<str:board_comment_id>/update_board_comment',update_board_comment,name='update_board_comment'),
    path('<str:board_comment_id>/delete_board_comment',delete_board_comment,name='delete_board_comment'),
    path('feedback_create/',views.feedback_create, name="feedback_create"),
    path('like_toggle/<int:post_id>/', views.like_toggle, name="like_toggle"),
    path('career/',views.career, name="career"),
    path('sample/',views.sample, name="sample"),
    path('board_like_toggle/<int:post_id>/', views.board_like_toggle, name="board_like_toggle"),
    path('board_notice/',views.board_notice, name="board_notice"),
    path('disallowed_useragent/',views.disallowed_useragent, name="disallowed_useragent"),
]
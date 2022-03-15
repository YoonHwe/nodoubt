from csv import writer
from xml.etree.ElementTree import Comment
from django.shortcuts import render, redirect, get_object_or_404
from .models import Data, Request, Feedback, Like, Board, Comment_board, Board_Like
from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.http import HttpResponse
import json

# Create your views here.
def showmain(request):
    datas = Data.objects.all()
    return render(request, 'main/index.html', {'datas': datas})

def introduce(request):
    return render(request, 'main/introduce.html')

def detail(request, id):
    data = get_object_or_404(Data, pk = id)
    return render(request, 'main/detail.html', {'data': data})

def create(request):
    new_data = Data()
    new_data.company = request.POST['company']
    new_data.job = request.POST['job']
    new_data.employed_year = request.POST['employed_year']
    new_data.pub_date = timezone.now() 
    new_data.body = request.POST['body']
    new_data.image = request.FILES.get('image')
    new_data.save()
    return redirect('main:detail', new_data.id)
    
def update(request, id):
    update_data = Data.objects.get(id = id)
    update_data.company = request.POST['company']
    update_data.job = request.POST['job']
    update_data.employed_year = request.POST['employed_year']
    update_data.pub_date = timezone.now() 
    update_data.body = request.POST['body']
    update_data.image = request.FILES.get('image')
    update_data.save()
    return redirect('main:detail', update_data.id)

def delete(request, id):
    delete_data = Data.objects.get(id = id)
    delete_data.delete()
    return redirect ('main:showmain')

def request_create(request):
    new_request = Request()
    new_request.employ_type = request.POST['employ_type']
    new_request.company_name = request.POST['company_name']
    new_request.school_major = request.POST['school_major']
    new_request.name = request.POST['name']
    new_request.email = request.POST['email']
    new_request.phone_num = request.POST['phone_num']
    new_request.pub_date = timezone.now()
    new_request.writer = request.user
    new_request.save()
    return redirect('main:showmain') 

def letter(request):
    return render(request, 'main/letter.html')

def board(request):
    boards = Board.objects.all().order_by('-created_at')
    return render(request, 'main/board.html', {'boards': boards})

def board_new(request):
    return render(request, 'main/board_new.html')

def board_create(request):
    new_board = Board()
    new_board.title = request.POST['title']
    new_board.writer = request.user
    new_board.pub_date = timezone.now() 
    new_board.body = request.POST['body']
    new_board.image = request.FILES.get('image')
    new_board.save()
    return redirect('main:board_detail', new_board.id)

def board_edit(request, id):
    board_edit = Board.objects.get(id = id)
    return render(request, 'main/board_edit.html', {'board': board_edit})

def board_update(request, id):
    board_update = Board.objects.get(id = id)
    board_update.title = request.POST['title']
    board_update.writer = request.user
    board_update.pub_date = timezone.now() 
    board_update.body = request.POST['body']
    board_update.image = request.FILES.get('image')
    board_update.save()
    return redirect('main:board_detail', board_update.id)

def board_detail(request, id):
    board = get_object_or_404(Board, pk = id)
    all_comments = board.board_comments.all().order_by('created_at')
    return render(request, 'main/board_detail.html', {'board': board, 'comments': all_comments})

def board_delete(request, id):
    board_delete = Board.objects.get(id = id)
    board_delete.delete()
    return redirect ('main:board')

def create_board_comment(request, board_id):
    if request.method == "POST":
        board = get_object_or_404(Board, pk=board_id)
        current_user = request.user
        comment_content = request.POST.get('content')
        Comment_board.objects.create(content=comment_content, writer=current_user, board=board)
    return redirect('main:board_detail', board_id)

def edit_board_comment(request, board_comment_id):
    edit_board_comment = Comment_board.objects.get(id = board_comment_id)
    return render(request, 'main/board_comment_edit.html', {'board_comment': edit_board_comment})

def update_board_comment(request, board_comment_id):
    update_board_comment = get_object_or_404(Comment_board, pk = board_comment_id)
    update_board_comment_writer = request.user
    update_board_comment.content = request.POST['content']
    update_board_comment.save()
    return redirect('main:board_detail', update_board_comment.board.id)

def delete_board_comment(request, board_comment_id):
    delete_board_comment = get_object_or_404(Comment_board, pk = board_comment_id)
    delete_board_comment.delete()
    return redirect('main:board_detail', delete_board_comment.board.id)

def feedback(request):
    return render(request, 'main/feedback.html')

def feedback_create(request):
    new_feedback = Feedback()
    new_feedback.title = request.POST['title']
    new_feedback.writer = request.user
    new_feedback.content = request.POST['content']
    new_feedback.image = request.FILES.get('image')
    new_feedback.email = request.POST['email']
    new_feedback.save()
    return redirect('main:showmain') 

def career(request):
    return render(request, 'main/career.html')

def sample(request):
    return render(request, 'sample/sample.html')

def board_notice(request):
    return render(request, 'main/board_notice.html')

def disallowed_useragent(request):
    return render(request, 'error/403.html')

@login_required
@require_POST

def like_toggle(request, post_id):
    post = get_object_or_404(Data, pk=post_id)
    post_like, post_like_created = Like.objects.get_or_create(user=request.user, post=post)

    if not post_like_created:
        post_like.delete()
        result = "like_cancel"
    else:
        result = "like"
    
    context = {
        "like_count":post.like_count,
        "result":result
    }

    return HttpResponse(json.dumps(context), content_type="application/json")

def board_like_toggle(request, post_id):
    post = get_object_or_404(Board, pk=post_id)
    post_like, post_like_created = Board_Like.objects.get_or_create(user=request.user, post=post)

    if not post_like_created:
        post_like.delete()
        result = "like_cancel"
    else:
        result = "like"
    
    context = {
        "like_count": post.board_like_count,
        "result": result
    }

    return HttpResponse(json.dumps(context), content_type="application/json")

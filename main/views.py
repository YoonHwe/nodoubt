from django.shortcuts import render, redirect, get_object_or_404
from .models import Data, Request, Feedback
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

def new(request):
    return render(request, 'main/new.html')

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

def edit(request, id):
    edit_data = Data.objects.get(id = id)
    return render(request, 'main/edit.html', {'data': edit_data})

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
    new_request.job_type = request.POST['job_type']
    new_request.name = request.POST['name']
    new_request.school_number = request.POST['school_number']
    new_request.email = request.POST['email']
    new_request.pub_date = timezone.now()
    new_request.writer = request.user
    new_request.save()
    return redirect('main:showmain') 

def sample(request):
    return render(request, 'main/sample.html')

def letter(request):
    return render(request, 'main/letter.html')

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


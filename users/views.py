from django.shortcuts import render
from main.models import Request
from django.contrib.auth.models import User
# Create your views here.

def mypage(request):
    user = request.user
    requests = Request.objects.filter(writer=user)
    return render(request, 'users/mypage.html',{'requests':requests})


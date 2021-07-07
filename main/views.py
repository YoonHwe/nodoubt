from django.shortcuts import render, redirect, get_object_or_404
from .models import Data
from django.utils import timezone

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
    new_data.image = request.FILES['image']
    new_data.save()
    return redirect('main:detail', new_data.id)
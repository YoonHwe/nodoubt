from django.shortcuts import render

# Create your views here.
def showmain(request):
    return render(request, 'main/index.html')

def introduce(request):
    return render(request, 'main/introduce.html')
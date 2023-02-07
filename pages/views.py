from django.shortcuts import render
#from django.http import HttpResponse
# Create your views here.


def about(request):
    return render(request, 'pages/about.html')
    
def index(request):
    return render(request, 'pages/index.html')



    
'''
def signin(request):
    return render(request,'accounts/sign.html' )
'''

'''
def home(request):
    return render(request, 'pages/home.html')

def ourfirstpage(request):
    return render(request, 'pages/ourfirstpage.html')

def login(request):
    return render(request,'pages/loginpage.html' )

def insert(request):
    return render(request, 'pages/insertEmployee.html')

def search(request):
    return render(request, 'pages/search.html')

def search_data(request):
    return render(request, 'pages/search-data.html')

def edit(request):
    return render(request, 'pages/edit-data.html')

def vacation(request):
    return render(request, 'pages/vacation.html')

def show_vacation(request):
    return render(request, 'pages/show-vacations.html')

'''
#---------------------------------




'''
def homePage(request):
    return render(request, 'pages/home.html')


def about(request):
    return render(request, 'pages/about.html')

def index(request):
    return HttpResponse('Welcome joe')

def index(request):
    return render(request,'pages/index.html')
'''
'''
def index(request):
    return HttpResponse('Welcome joe')
'''

'''
def index(request):
    return render(request,'pages/Html/home.html',{'name':'Youssef'})
'''

'''
def index(request):
    x ={'name':'youssef sabry azuz', 'age':254644545454545}
    return render(request,'pages/index.html',x)
'''



from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('',views.index,name='index'),#here for home page
    #path('home',views.about,name='home'), #here for first page
    path('about',views.about,name='about'),
    #path('signin',views.login,name='signin'), #here for login page
    


]

'''
    path('',views.home,name='home'),
    path('ourfirstpage',views.ourfirstpage,name='ourfirstpage'),
    path('login',views.login,name='login'),
    path('insert',views.insert,name='insert'),
    path('search',views.search,name='search'),
    path('search_data',views.search_data,name='search_data'),
    path('edit',views.edit,name='edit'),
    path('vacation',views.vacation,name='vacation'),
    path('show_vacation',views.show_vacation,name='show_vacation'),
    path('',views.home,name='home'),
    '''
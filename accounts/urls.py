from django.urls import path, re_path 
from . import views

urlpatterns = [
    path('signin',views.signin, name='signin'),
    path('addemployee',views.addemployee, name='addemployee'),
    path('search',views.search,name='search'),
    path('vacations',views.vacations,name='vacations'),
    path('show-vacations',views.show_vacations,name='show-vacations'),
    path('editdata/<int:Emp_Id>/',views.editdata,name='editdata'),
    path('delete/<int:Emp_Id>/',views.delete,name='delete'),
    #path('deleteVac/<int:Id>', views.deleteVac, name='delete')

]


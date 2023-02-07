from django import views
from django.shortcuts import render , redirect
from.models import*
from .forms import addform, udpatForm
#from .filters import orderfilt

# Create your views here.

#Views of Account

def signin(request):
    return render(request,'accounts/signin.html')

def addemployee(request):
    form=addform()
    emp=Employee.objects.all()
    if request.method=='POST':
        form=addform(request.POST)
        if form.is_valid():
            form.save()
            
    
    context={'form':form  , 'emp': emp}
    return render(request, 'accounts/addemployee.html', context)

def search(request):
    emp=Employee.objects.all()
    
    
    contexxt={  'emp': emp } 
    
    return render(request, 'accounts/search.html',contexxt)
def vacations(request):
    E={'emp' : Employee.objects.all()}
    if request.method=="POST":
        
    
        name = request.POST.get('name')
        id = request.POST.get('id')
        fdate = request.POST.get('fromDate')
        tdate = request.POST.get('toDate')
        reason = request.POST.get('reason')
        data = Vacation(Name=name, Vacation_from=fdate, Vacation_to=tdate, Reason=reason, Id=Employee.objects.get(Emp_Id=id))
        
        data.save() 
    return render(request, 'accounts/vacations.html', E)
def show_vacations(request):
    v = {'vac' : Vacation.objects.all()}
    return render(request,'accounts/show-vacations.html', v)

def editdata(request , Emp_Id ):
    
    Employees=Employee.objects.get(id=Emp_Id)
    form=udpatForm(instance=Employees)
    if request.method=='POST':
        form=udpatForm(request.POST , instance= Employees)
        if form.is_valid():
            form.save()
            return redirect('/')
    
    
    conteext={
        'form':form , 'Employee':Employees,
    }

    return render(request, 'accounts/editdata.html', conteext)

def delete(request, Emp_Id):
    Employees=Employee.objects.get(id=Emp_Id)
    if request.method=='POST':
        Employees.delete()
        return redirect('/')
    context={ 'Employee':Employees, }
    return render(request,'accounts/delete.html',context)

#def deleteVac(request, id):
    #v = Vacation.objects.get(Id=id)
    #v.delete()
    #return redirect(request,'accounts/show-vacations.html')


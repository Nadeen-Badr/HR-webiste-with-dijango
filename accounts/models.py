from tkinter import CASCADE
from django.db import models

# Create your models here.
class Employee(models.Model):
    Emp_Id=models.IntegerField()
    Name=models.CharField(max_length=150)
    
    
    Email=models.EmailField()
    
    address=models.CharField(max_length=250)
    Phone_number=models.IntegerField(null=True, blank=True)
    Gender=models.CharField(max_length=10)
    Martial_status=models.CharField(max_length=15)
    Vacation_Days=models.IntegerField(null=True, blank=True)
    Vacation_Days_approved=models.IntegerField(null=True, blank=True)
    Salary=models.IntegerField(null=True, blank=True)
    Birthday=models.DateField(max_length=15)

class Vacation(models.Model):
    Name=models.CharField(max_length=150,null=True)
    #Id=models.IntegerField()
    Id=models.ForeignKey(Employee,on_delete=models.CASCADE,null='True')
    
    Vacation_from=models.DateField(null=True)
    Vacation_to=models.DateField(null=True)
    Reason=models.CharField(max_length=400,null=True)
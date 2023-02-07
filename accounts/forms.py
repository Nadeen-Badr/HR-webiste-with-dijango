from dataclasses import fields
from pyexpat import model
from django import forms
from .models import Employee
class udpatForm(forms.ModelForm):
    class Meta:
        model=Employee
        fields="__all__"
        exclude=['Gender','Emp_Id']

class addform(forms.ModelForm):
    
    class Meta:
        model = Employee 
        fields = '__all__'

"""
URL configuration for foodbecend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from food import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.food_list, name='food_list'),
    path('login/', views.admin_login, name='admin_login'),
    path('logout/', views.admin_logout, name='admin_logout'),
    path('api/foods/', views.food_api, name='food_api'),
    path('api/order/', views.order_api, name='order_api'),
    path('orders/', views.order_list, name='order_list'),
    path('add/', views.add_food, name='add_food'),
    path('edit/<int:id>/', views.edit_food, name='edit_food'),
    path('delete/<int:id>/', views.delete_food, name='delete_food'),
    path('order/status/<int:id>/<str:status>/', views.update_order_status, name='update_order_status'),
]
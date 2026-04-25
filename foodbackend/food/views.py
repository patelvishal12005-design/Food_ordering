from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
import json
from .models import Food
from .mongo_models import Order

# Login View
def admin_login(request):
    if request.method == "POST":
        u = request.POST.get('username')
        p = request.POST.get('password')
        user = authenticate(username=u, password=p)
        if user is not None:
            login(request, user)
            return redirect('food_list')
        else:
            messages.error(request, "Invalid username or password")
    return render(request, 'login.html')

def admin_logout(request):
    logout(request)
    return redirect('admin_login')

# API for foods
def food_api(request):
    foods = list(Food.objects.values('id', 'name', 'price', 'description', 'image'))
    return JsonResponse(foods, safe=False)

# API for orders (MongoDB)
@csrf_exempt
def order_api(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            order = Order(
                customer_name=data.get('name'),
                customer_email=data.get('email'),
                customer_phone=data.get('phone'),
                customer_address=data.get('address'),
                items=data.get('items'),
                total_amount=float(data.get('total'))
            )
            order.save()
            return JsonResponse({"message": "Order placed successfully!", "order_id": str(order.id)}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)

# Show all orders from MongoDB
@login_required(login_url='admin_login')
def order_list(request):
    orders = Order.objects.all().order_by('-created_at')
    return render(request, 'order_list.html', {'orders': orders})

# Show all foods
@login_required(login_url='admin_login')
def food_list(request):
    foods = Food.objects.all()
    return render(request, 'food_list.html', {'foods': foods})

# Add food
@login_required(login_url='admin_login')
def add_food(request):
    if request.method == "POST":
        name = request.POST.get('name')
        price = request.POST.get('price')
        description = request.POST.get('description')
        image = request.POST.get('image')

        Food.objects.create(
            name=name,
            price=price,
            description=description,
            image=image
        )
        return redirect('food_list')

    return render(request, 'add_food.html')

# Edit food
@login_required(login_url='admin_login')
def edit_food(request, id):
    food = get_object_or_404(Food, id=id)
    if request.method == "POST":
        food.name = request.POST.get('name')
        food.price = request.POST.get('price')
        food.description = request.POST.get('description')
        food.image = request.POST.get('image')
        food.save()
        return redirect('food_list')
    return render(request, 'edit_food.html', {'food': food})

# Delete food
@login_required(login_url='admin_login')
def delete_food(request, id):
    food = get_object_or_404(Food, id=id)
    food.delete()
    return redirect('food_list')
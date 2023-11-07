<?php

use App\Http\Controllers\EcommerceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// get all users
Route::get('getDataUsers', [EcommerceController::class, 'getUsers']);

// Add Employee
Route::post('signUp', [EcommerceController::class, 'signUp']);

// get specific users
Route::get('users/{email}/{password}', [EcommerceController::class, 'getUsersByEmailAndPassword']);
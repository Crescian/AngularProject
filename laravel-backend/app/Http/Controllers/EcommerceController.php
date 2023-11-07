<?php

namespace App\Http\Controllers;

use App\Models\ecommerce;
use Illuminate\Http\Request;

class EcommerceController extends Controller
{
    public function getUsers(){
        return response()->json(ecommerce::all(), 200);
    }
    
    public function signUp(Request $request){
        $ecommerce = ecommerce::create($request->All());
        return response($ecommerce, 201);
    }
    public function getUsersByEmailAndPassword($email, $password) {
        $user = ecommerce::where('email', $email)->Where('password', $password)->first();
        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }
}

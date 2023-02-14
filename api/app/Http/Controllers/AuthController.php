<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // validation
        $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required'],
        ]);

        // authenticate the users is username and password was correct and create the token

        $user = User::with(['permissions'])->whereUsername($request->username)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'permissions' => $user->permissions
            ]);
        }

        return response()->json(
            [
                'message' => 'Invalid username or password',
            ],
            401
        );
    }

    // create new user
    public function register(Request $request)
    {
        // validation
        $request->validate([
            'name' => ['required', 'string'],
            'username' => ['required', 'string', 'unique:users'],
            'email' => ['string', 'email', 'unique:users'],
            'password' => ['required', 'min:5'],
            'phone' => ['required', 'string', 'unique:users'],
        ]);

        // create new user
        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // create token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    // Logout
    public function logout(Request $request)
    {
        // Revoke the token that was used to authenticate the current request...
        $request
            ->user()
            ->currentAccessToken()
            ->delete();

        return response()->json([
            'message' => 'Logged out',
        ]);
    }

    public function currentUser(Request $request)
    {
        return User::with($request->with ?? [])->find(auth()->id());
    }
}

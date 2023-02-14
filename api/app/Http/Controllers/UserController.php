<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = User::with($request->with ?? []);

        if ($request->has('q') && $request->q) {
            $query
                ->where('name', 'like', "%{$request->q}%")
                ->orWhere('username', 'like', "%{$request->q}%")
                ->orWhere('email', 'like', "%{$request->q}%")
                ->orWhere('address', 'like', "%{$request->q}%")
                ->orWhere('city', 'like', "%{$request->q}%")
                ->orWhere('phone', 'like', "%{$request->q}%");
        }

        return $query->paginate(
            $request->per_page ?? 15,
            $request->columns ?? ['*'],
            $request->page_name ?? 'page',
            $request->page ?? 1
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validation
        $request->validate([
            'name' => ['required', 'string'],
            'username' => ['required', 'string', 'unique:users'],
            'email' => ['string', 'email', 'unique:users'],
            'password' => ['min:5'],
            'phone' => ['required', 'string', 'unique:users'],
        ]);

        // create new user
        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password ?? 'password'),
        ]);

        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, User $user)
    {
        return User::with($request->with ?? [])->find($user->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        // validation
        $request->validate([
            'name' => ['string'],
            'username' => ['string', 'unique:users,username,'],
            'email' => ['email', 'unique:users,email,'],
            'password' => ['min:5'],
            'phone' => ['string', 'unique:users,phone,'],
        ]);

        // update user with pass if exist in the request
        $user->update($request->all());

        return $user->refresh();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}

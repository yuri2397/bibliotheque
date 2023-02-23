<?php

use App\Http\Controllers\AreaController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Spatie\Permission\Models\Permission;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\DocumentCopyController;
use App\Models\Area;
use App\Models\Shelf;

// AuthController

Route::prefix('auth')
    ->middleware('auth:sanctum')
    ->group(function () {
        //login
        Route::post('/login', [
            AuthController::class,
            'login',
        ])->withoutMiddleware('auth:sanctum');

        Route::get('current-user', [AuthController::class, 'currentUser']);

        Route::post('/register', [
            AuthController::class,
            'register',
        ])->withoutMiddleware('auth:sanctum');
        Route::post('/logout', [AuthController::class, 'logout']);
    });

// UserController

Route::prefix('users')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::get('/{user}', [UserController::class, 'show']);
        Route::post('/', [UserController::class, 'store']);
        Route::put('/{user}', [UserController::class, 'update']);
        Route::delete('/{user}', [UserController::class, 'destroy']);
    });

// DocumentController

Route::prefix('documents')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [DocumentController::class, 'index']);
        Route::get('/{id}', [DocumentController::class, 'show']);
        Route::post('/', [DocumentController::class, 'store']);
        Route::put('/{id}', [DocumentController::class, 'update']);
        Route::delete('/{id}', [DocumentController::class, 'destroy']);
    });

// DocumentCopyController

Route::prefix('document-copies')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [DocumentCopyController::class, 'index']);
        Route::get('/{id}', [DocumentCopyController::class, 'show']);
        Route::post('/', [DocumentCopyController::class, 'store']);
        Route::put('/{id}', [DocumentCopyController::class, 'update']);
        Route::delete('/{id}', [DocumentCopyController::class, 'destroy']);
    });



Route::prefix('authors')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [AuthorController::class, 'index']);
        Route::get('/{id}', [AuthorController::class, 'show']);
        Route::post('/', [AuthorController::class, 'store']);
        Route::put('/{id}', [AuthorController::class, 'update']);
        Route::delete('/{id}', [AuthorController::class, 'destroy']);
    });

Route::prefix('areas')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [AreaController::class, 'index']);
        Route::get('/{id}', [AreaController::class, 'show']);
        Route::post('/', [AreaController::class, 'store']);
        Route::put('/{id}', [AreaController::class, 'update']);
        Route::delete('/{id}', [AreaController::class, 'destroy']);
    });



Route::any('/test', function (Request $request) {
    //     $rest = [];
    //    foreach ($request->data as $value) {
    //         $a = new Area();
    //         $a->name = $value['name'];
    //         $a->slug = $value['slug'];
    //         $a->save();
    //         $rest[] = $a;
    //    }

    //    return $rest;

    // foreach (Area::all() as $value) {
    //     for ($i = 0; $i < 5; $i++) {
    //         $shelf = new Shelf();
    //         $shelf->level = $i + 1;
    //         $shelf->area_id = $value->id;
    //         $shelf->save();
    //     }
    // }
});

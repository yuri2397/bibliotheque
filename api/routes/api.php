<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\DocumentCopyController;

// AuthController

Route::prefix('auth')
    ->middleware('auth:sanctum')
    ->group(function () {
        //login
        Route::post('/login', [
            AuthController::class,
            'login',
        ])->withoutMiddleware('auth:sanctum');

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
        Route::get('/{id}', [UserController::class, 'show']);
        Route::put('/{id}', [UserController::class, 'update']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
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

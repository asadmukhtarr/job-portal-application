<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\pagesController; // import controller ..
use App\Http\Controllers\afterlogin\jobsController;
use App\Http\Controllers\afterlogin\pagesController as afterloginController;

// before login ..
Route::get('/',[pagesController::class,'welcome'])->name('welcome');
Route::get('/about',[pagesController::class,'about'])->name('about');
Route::get('/contact',[pagesController::class,'contact'])->name('contact');
Route::get('/services',[pagesController::class,'services'])->name('services');
Route::get('/companies',[pagesController::class,'companies'])->name('companies');
Route::get('/available-jobs',[pagesController::class,'jobs'])->name('jobs');
Route::get('/job',[pagesController::class,'show'])->name('show');


Auth::routes(); // authentication routes ..
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); // after login home page ..

Route::get('/dashboard',[afterloginController::class,'dashboard'])->name('user.dashboard');
Route::get('/profile',[afterloginController::class,'profile'])->name('user.profile');
Route::get('/settings', [afterloginController::class,'settings'])->name('user.settings');
Route::get('/your-applied-jobs',[afterloginController::class,'yaj'])->name('user.yaj');
Route::resource('/jobs',jobsController::class);


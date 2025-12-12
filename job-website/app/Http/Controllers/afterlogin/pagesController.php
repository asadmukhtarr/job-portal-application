<?php

namespace App\Http\Controllers\afterlogin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class pagesController extends Controller
{
    // method for dashboard ..
    public function dashboard(){
        return view("afterlogin.dashboard");
    }
    // method for profile ..
    public function profile(){
        return view("afterlogin.profile");
    }
    // settings ...
    public function settings(){
        return view("afterlogin.settings");
    }
    // your applied jobs 
    public function yaj(){
        return view("afterlogin.yaj");
    }
}

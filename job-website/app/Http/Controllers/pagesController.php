<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class pagesController extends Controller
{
    //
    public function welcome(){
        return view('welcome');
    }
    // about 
    public function about(){
        return view('about');
    }
    // contact ..
    public function contact(){
        return view('contact');
    }
    // services
    public function services(){
        return view('services');
    }
    // companies 
    public function companies(){
        return view('companies');
    }
    // jobs view method ..
    public function jobs(){
        return view('jobs.jobs');
    }
    public function show(){
        return view('jobs.single');
    }
}

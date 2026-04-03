<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\vacancy;

Route::get('/vacancies', function () {
    try {
        $data = [
            'message' => 'Vacancies fetched successfully',
            'status' => 'success',
            'vacancies' => vacancy::all(),
            'code' => 200
        ];
        return response()->json($data, 200);
    } catch(Exception $e){
        return response()->json([
            'message' => 'Failed to fetch vacancies',
            'status' => 'error',
            'code' => 500,
            'error' => $e->getMessage()
        ], 500);
    }
});


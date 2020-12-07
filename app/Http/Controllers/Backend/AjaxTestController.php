<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AjaxTestController extends Controller
{
    public function test() 
    {
        $name = "farhad";
        return response()->view('backend.inc.table.abc', compact('name'));
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Area;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Area::with($request->with ?? []);

        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        if($request->has('per_page')){
            return $query->paginate(
                $request->per_page ?? 10,
                $request->columns ?? ['*'],
                $request->page_name ?? 'page',
                $request->page ?? 1
            );
        }

        return $query->get();
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
            'name' => 'required',
        ]);

        $request->merge(['slug' => Area::generateSlug($request->name)]);
        $area = Area::create($request->all());

        return $area;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Area  $area
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
         $area = Area::with($request->with ?? [])->find($id);

         return $area;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Area  $area
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Area $area)
    {
        // validation
        $request->validate([
            'name' => 'required',
        ]);

        $request->merge(['slug' => Area::generateSlug($request->name)]);
        $area->update($request->all());

        return $area;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Area  $area
     * @return \Illuminate\Http\Response
     */
    public function destroy(Area $area)
    {
        $area->delete();
        return response()->json(null, 204);
    }
}

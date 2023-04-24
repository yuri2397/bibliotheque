<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\DocumentCopy;
use Illuminate\Http\Request;

class DocumentCopyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Document::with($request->with ?? []);

        if($request->has('search_key')){
            $query->where('title', 'LIKE', '%' . $request->search_key . '%')
            ->orWhere('reference', 'LIKE', '%' . $request->search_key . '%');

            $query->whereHas('author', function ($q) use ($request) {
                $q->where('name', 'LIKE', '%' . $request->search_key . '%' );
            });
        }
        
        return $query->paginate(25, ['*'], 'page', 1);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DocumentCopy  $documentCopy
     * @return \Illuminate\Http\Response
     */
    public function show(DocumentCopy $documentCopy)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DocumentCopy  $documentCopy
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DocumentCopy $documentCopy)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DocumentCopy  $documentCopy
     * @return \Illuminate\Http\Response
     */
    public function destroy(DocumentCopy $documentCopy)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Document::with($request->with ?? []);

        if ($request->has('q')) {
            $query->where('title', 'like', '%' . $request->q . '%');
            $query->orWhereHas('authors', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->q . '%');
            });

            // $query->orWhereHas('slugs', function ($q) use ($request) {
            //     $q->where('slug', 'like', '%' . $request->q . '%');
            // });
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
            'title' => 'required',
            'summary' => 'required',
            'author_id' => 'required',
        ]);

        $request->merge(['reference' => Document::generateReference()]);
        $document = Document::create($request->all());

        return $document;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {   
        return Document::with($request->with ?? [])->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Document $document)
    {
        // validation

        $document->update($request->all());

        return $document->refresh();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function destroy(Document $document)
    {
        //
    }
}

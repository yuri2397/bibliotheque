<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\DocumentCopy;
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
            
            $query->orWhereHas('author', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->q . '%');
            });

            $query->orWhereHas('slugs', function ($q) use ($request) {
                $q->where('slug', 'like', '%' . $request->q . '%');
            });
        }

        if($request->has('area_id')){
            $query->where('area_id', $request->area_id);
        }

        if($request->has('per_page')){
            return $query->paginate(
                $request->per_page ?? 15,
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
            'title' => 'required',
            'reference' => 'required',
            'summary' => 'required',
            'author_id' => 'required',
            'area_id' => ['required', 'exists:areas,id'],
            'shelf_id' => ['required', 'exists:shelf,id'],
            'copies' => ['numeric']
        ]);

        // $request->merge(['reference' => Document::generateReference()]);
        $document = Document::create(
            $request->only(['title', 'summary', 'author_id', 'reference', 'area_id', 'shelf_id'])
        );

        if($request->file('image')){
            $document->addMedia($request->file('image'))->toMediaCollection('images');
        }

        if($request->has('copies') ){
            for ($i=0; $i < (int)$request->copies; $i++) { 
                $cp = new DocumentCopy();
                $cp->document_id = $document->id;
                $cp->sub_reference = $document->reference . '/' . ($i + 1);
                $cp->save();
            }
        }

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
        
    }
}

<?php

namespace App\Models;


use App\Shared\UUID;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Document extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory, UUID;

    protected $with = ['media'];

    // generate the reference field
    public static function generateReference()
    {
        $reference = 'DOC-' . strtoupper(substr(uniqid(), 0, 4));
        $document = Document::where('reference', $reference)->first();
        if ($document) {
            return self::generateReference();
        }
        return $reference;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['title', 'summary', 'reference', 'author_id'];

    public function document_copies()
    {
        return $this->hasMany(DocumentCopy::class);
    }

    // get the authors of the document
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    // get the slugs of the document

    public function slugs()
    {
        return $this->belongsToMany(Slug::class, 'document_has_slugs');
    }

    // get all available copies of the document
    public function available_copies()
    {
        return $this->hasMany(DocumentCopy::class)->where(
            'status',
            'available'
        );
    }

    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    public function shelf()
    {
        return $this->belongsTo(Shelf::class);
    }

    // get all borrowed copies of the document

    public function borrowed_copies()
    {
        return $this->hasMany(DocumentCopy::class)->where('status', 'borrowed');
    }
}

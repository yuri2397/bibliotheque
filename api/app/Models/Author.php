<?php

namespace App\Models;

use App\Shared\UUID;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Author extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory, UUID;

    protected $with = ['media'];

    protected $fillable = ['name', 'bio', 'resume'];

    // documents plushed by the author
    public function documents()
    {
        return $this->hasMany(Document::class);
    }
}

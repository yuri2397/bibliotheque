<?php

namespace App\Models;


use App\Shared\UUID;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Area extends Model
{
    use HasFactory, UUID;

    protected $appends = ['count_shelf', 'count_document'];
    protected $fillable = ['name', 'slug','shelf'];

    public static function generateSlug($name)
    {
        $slug = str_replace(' ', '-', strtolower($name));
        $area = Area::where('slug', $slug)->first();
        if ($area) {
            return self::generateSlug($name . ' ' . uniqid());
        }
        return $slug;
    }

    public function shelf()
    {
        return $this->hasMany(Shelf::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function getCountShelfAttribute()
    {
        return $this->shelf()->count();
    }

    public function getCountDocumentAttribute()
    {
        return $this->documents()->count();
    }

}

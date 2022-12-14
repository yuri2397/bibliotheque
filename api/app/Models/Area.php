<?php

namespace App\Models;

use App\Shared\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    use HasFactory, UUID;

    protected $fillable = ['name', 'slug'];

    public static function generateSlug($name)
    {
        $slug = str_replace(' ', '-', strtolower($name));
        $area = Area::where('slug', $slug)->first();
        if ($area) {
            return self::generateSlug($name . ' ' . uniqid());
        }
        return $slug;
    }
}

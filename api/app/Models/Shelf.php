<?php

namespace App\Models;

use App\Shared\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shelf extends Model
{
    use HasFactory, UUID;

    protected $table = "shelf";

    public function documents()
    {
        return $this->hasMany(Document::class);
    }
}

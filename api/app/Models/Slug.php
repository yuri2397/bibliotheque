<?php

namespace App\Models;


use App\Shared\UUID;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Slug extends Model
{
    use HasFactory, UUID;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['slug', 'sluggable', 'is_active'];
}

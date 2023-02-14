<?php

namespace App\Models;

use App\Trait\UUID;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShelfHasSlug extends Model
{
    use HasFactory, UUID;
}

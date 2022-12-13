<?php

namespace App\Models;

use App\Shared\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory, UUID;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['document_copy_id', 'user_id', 'status'];

    public function document_copy()
    {
        return $this->belongsTo(DocumentCopy::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // all reservations a document copy
    public function scopeDocumentCopy($query, $document_copy_id)
    {
        return $query->where('document_copy_id', $document_copy_id);
    }
    // all reservations a user
    public function scopeUser($query, $user_id)
    {
        return $query->where('user_id', $user_id);
    }
}

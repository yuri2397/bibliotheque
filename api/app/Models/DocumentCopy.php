<?php

namespace App\Models;

use App\Shared\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentCopy extends Model
{
    use HasFactory, UUID;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['document_id', 'sub_reference', 'status'];

    public function document()
    {
        return $this->belongsTo(Document::class);
    }

    public function check_out()
    {
        $this->status = 'checked_out';
        $this->save();
    }

    public function check_in()
    {
        $this->status = 'available';
        $this->save();
    }

    public function lost()
    {
        $this->status = 'lost';
        $this->save();
    }

    public function is_available()
    {
        return $this->status === 'available';
    }

    public function is_checked_out()
    {
        return $this->status === 'checked_out';
    }

    public function is_lost()
    {
        return $this->status === 'lost';
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

    public function is_reserved()
    {
        return $this->reservations()
            ->where('status', 'pending')
            ->orWhere('status', 'reserved')
            ->count() > 0;
    }

    public function is_reserved_by($user_id)
    {
        return $this->reservations()
            ->where('status', 'pending')
            ->orWhere('status', 'reserved')
            ->where('user_id', $user_id)
            ->count() > 0;
    }

    public function is_reserved_by_another($user_id)
    {
        return $this->reservations()
            ->where('status', 'pending')
            ->orWhere('status', 'reserved')
            ->where('user_id', '!=', $user_id)
            ->count() > 0;
    }

    // all users how are reserving this document copy
    public function users()
    {
        return $this->belongsToMany(User::class, 'reservations');
    }
}

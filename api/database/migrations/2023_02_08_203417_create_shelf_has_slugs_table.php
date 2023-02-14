<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shelf_has_slugs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table
                ->foreignUuid('slug_id')
                ->references('id')
                ->on('slugs')
                ->onDelete('cascade');

            $table
                ->foreignUuid('shelf_id')
                ->references('id')
                ->on('shelf')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shelf_has_slugs');
    }
};

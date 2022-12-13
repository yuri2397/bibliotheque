<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('document_has_slugs', function (Blueprint $table) {
            $table->uuid('document_id');
            $table->uuid('slug_id');
            $table
                ->foreign('document_id')
                ->references('id')
                ->on('documents')
                ->onDelete('cascade');
            $table
                ->foreign('slug_id')
                ->references('id')
                ->on('slugs')
                ->onDelete('cascade');
            $table->unique(['document_id', 'slug_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('document_has_slugs');
    }
};

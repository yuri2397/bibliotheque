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
        Schema::create('document_has_authors', function (Blueprint $table) {
            $table->uuid('document_id');
            $table->uuid('author_id');
            $table
                ->foreign('document_id')
                ->references('id')
                ->on('documents')
                ->onDelete('cascade');
            $table
                ->foreign('author_id')
                ->references('id')
                ->on('authors')
                ->onDelete('cascade');
            $table->unique(['document_id', 'author_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('document_has_authors');
    }
};

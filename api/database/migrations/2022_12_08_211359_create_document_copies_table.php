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
        Schema::create('document_copies', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table
                ->foreignUuid('document_id')
                ->references('id')
                ->on('documents');
            $table->string('sub_reference')->unique();
            $table
                ->enum('status', [
                    'available',
                    'checked_out',
                    'lost',
                    'borrowed',
                ])
                ->default('available');
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
        Schema::dropIfExists('document_copies');
    }
};

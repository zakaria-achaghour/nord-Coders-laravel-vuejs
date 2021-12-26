<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CustomerControllertest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function itListsCustomers()
    {
        $response = $this->get('/api/customers');

        $response->assertOk();
    }
}

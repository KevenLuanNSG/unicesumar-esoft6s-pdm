package com.unicesumar.esoft.intentsimples

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_segunda.*

class SegundaActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_segunda)

        val bundle: Bundle? = intent.extras

        val id = bundle?.get("id")
        val nome = bundle?.get("nome")

        Toast.makeText(applicationContext, "ID: " + id.toString() + " NOME:" + nome,
            Toast.LENGTH_LONG).show()

        button.setOnClickListener() {
            intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }
    }
}
package com.unicesumar.esoft.helloworld


import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    var helloTextView: TextView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_main)

        helloTextView = findViewById<TextView>(R.id.helloTextView)
        helloTextView!!.text = "Olá ESOFT6S 2020"

        helloTextView!!.setOnClickListener {
            Toast.makeText(applicationContext,
                    "Bem vindo ao Android com Kotlin",
                    Toast.LENGTH_LONG).show()
        }
    }
}
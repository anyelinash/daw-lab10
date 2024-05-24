import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  isFormValid: boolean = false;

  constructor() {}

  onSubmit() {
    if (confirm('¿Estás seguro de que deseas enviar el formulario?')) {
      if (this.email.includes('@')) {
        const newWindow = window.open('', '_blank');

        if (newWindow) {
          newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Datos del Formulario</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
          
              body {
                font-family: 'Poppins', sans-serif; 
              }
              .container {
                margin: 50px auto;
                width: 400px;
                text-align: center;
              }
          
              .card {
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                margin-bottom: 20px;
              }
          
              .card-body {
                padding: 40px;
              }
          
              h2 {
                color: #007bff; 
                font-size: 28px; 
                margin-bottom: 20px;
                font-weight: bold;
              }
          
              p {
                margin-bottom: 20px;
                font-size: 18px;
              }
          
              strong {
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="card">
                <div class="card-body">
                  <h2>Datos del Formulario</h2>
                  <p><strong>Nombre:</strong> ${this.nombre}</p>
                  <p><strong>Email:</strong> ${this.email}</p>
                </div>
              </div>
            </div>
          </body>
          </html>
          `);
          newWindow.document.close();
        }
        
        console.log('Formulario enviado');
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Email: ${this.email}`);

        // Limpiar el formulario después de enviarlo
        this.nombre = '';
        this.email = '';
        this.isFormValid = false;
      } else {
        alert('El correo electrónico debe contener "@"');
      }
    }
  }

  onInputChange() {
    this.isFormValid = this.nombre.trim() !== '' && this.email.trim() !== '';
  }
}

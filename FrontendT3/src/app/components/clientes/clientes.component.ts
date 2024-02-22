import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clientes = [
    {id:0, nombre:'', apellidos:''}
  ]

  constructor(private clienteService:ClientesServiceService, private route:ActivatedRoute) {

    this.getAllClientes()

  }

  getAllClientes() {

    this.clienteService.getClientes().subscribe({

      next: res => {

        console.log(res)

        this.clientes = res

      },

      error: err => console.log(err)

    })

  }

}

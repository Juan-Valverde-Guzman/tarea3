import { Component } from '@angular/core';
import { clienteDTO } from 'src/app/model/clienteDTO';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clienteDTO: clienteDTO = {
    id:0, nombre:'', apellidos:'', facturaImporte:[]
  }

  nombreBusqueda: string = ''

  constructor(private clienteService:ClientesServiceService) {

    

  }

  buscarPorNombre() {

    this.clienteService.getClienteNombre(this.nombreBusqueda).subscribe({

      next: res => {

        console.log(res)

        this.clienteDTO = res

      },

      error: err => console.log(err)

    })

  }

  

}

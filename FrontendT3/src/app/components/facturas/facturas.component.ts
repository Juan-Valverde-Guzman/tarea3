import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { clienteDTO } from 'src/app/model/clienteDTO';
import { factura } from 'src/app/model/factura';
import { ClientesServiceService } from 'src/app/services/clientes-service.service';
import { FacturasServiceService } from 'src/app/services/facturas-service.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {

  form:FormGroup

  clientesDTO = [
    {id:0, nombre:'', apellidos:'', facturaImporte:[]}
  ]

  constructor(private clienteService:ClientesServiceService, private formBuilder:FormBuilder, private facturaService:FacturasServiceService) {

    this.getAllClientes()

    this.form = this.formBuilder.group({

      "importe": 0,

      "clienteSeleccionadoId": 0

    })

  }

  getAllClientes() {

    this.clienteService.getClientes().subscribe({

      next: res => {

        console.log(res)

        this.clientesDTO = res

      },

      error: err => console.log(err)

    })

  }

  guardar() {

    let factura: factura = {
      importe: this.form.get('importe')?.value,
      cliente: {
        id: this.form.get('clienteSeleccionadoId')?.value
      }
    }

    console.log(this.form.get('clienteSeleccionadoId')?.value)

    console.log(factura)

    this.facturaService.postFactura(factura).subscribe({

      next: res => {

        console.log(res)

      },

      error: err => console.log(err)

    })

  }

}

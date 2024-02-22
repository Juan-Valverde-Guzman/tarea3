import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cliente } from 'src/app/model/cliente';
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

  factura: factura = {

    importe:'',

    cliente: {id:0, nombre:'', apellidos:''}
    
  }

  clientes = [
    {id:0, nombre:'', apellidos:''}
  ]

  clienteSeleccionado: cliente | undefined;

  constructor(private clienteService:ClientesServiceService, private formBuilder:FormBuilder, private facturaService:FacturasServiceService) {

    this.getAllClientes()

    this.form = this.formBuilder.group({

      "importe": ''

    })

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

  guardar() {

    this.factura.importe = this.form.get('importe')?.value

    this.factura.cliente = this.clienteSeleccionado

  }

}

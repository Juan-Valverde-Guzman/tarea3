package com.example.backendT3.converter;

import com.example.backendT3.dto.ClienteFacturasDTO;
import com.example.backendT3.model.Cliente;
import com.example.backendT3.model.Factura;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ClienteFacturasDTOConverter {

    public ClienteFacturasDTO convertirEntityClienteFacturasDTO(Cliente cliente){

        ClienteFacturasDTO clienteFacturasDTO = new ClienteFacturasDTO();

        clienteFacturasDTO.setId(cliente.getId());

        clienteFacturasDTO.setNombre(cliente.getNombre());

        clienteFacturasDTO.setApellidos(cliente.getPrimerApellido() + " " + cliente.getSegundoApellido());

        List<Factura> facturas = cliente.getFacturas();

        List<Long> facturasClientes = new ArrayList<>();

        facturas.forEach( factura -> {
            facturasClientes.add(factura.getImporte());
        });

        clienteFacturasDTO.setFacturaImporte(facturasClientes);

        return clienteFacturasDTO;
    }
}

package com.example.backendT3.service;

import com.example.backendT3.converter.ClienteFacturasDTOConverter;
import com.example.backendT3.dto.ClienteFacturasDTO;
import com.example.backendT3.model.Cliente;
import com.example.backendT3.model.Factura;
import com.example.backendT3.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ClienteFacturasDTOConverter clienteFacturasDTOConverter;

    public ClienteFacturasDTO searchCliente(String nombre) {

        Cliente cliente = clienteRepository.findByNombre(nombre);

        return clienteFacturasDTOConverter.convertirEntityClienteFacturasDTO(cliente);
    }

    public List<ClienteFacturasDTO> listOfClientes() {

        List<Cliente> clientes = clienteRepository.findAll();

        List<ClienteFacturasDTO> clienteFacturasDTOS = new ArrayList<>();

        clientes.forEach( cliente -> {
            clienteFacturasDTOS.add(clienteFacturasDTOConverter.convertirEntityClienteFacturasDTO(cliente));
        });

        return clienteFacturasDTOS;
    }

}

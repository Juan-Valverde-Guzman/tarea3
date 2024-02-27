package com.example.backendT3.controllers;

import com.example.backendT3.dto.ClienteFacturasDTO;
import com.example.backendT3.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<ClienteFacturasDTO> listDTO() { return clienteService.listOfClientes(); }


    @GetMapping({"/{nombre}"})
    public ClienteFacturasDTO listDTO(@PathVariable String nombre) { return clienteService.searchCliente(nombre); }
}

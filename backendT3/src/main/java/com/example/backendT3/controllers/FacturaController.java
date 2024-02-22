package com.example.backendT3.controllers;

import com.example.backendT3.dto.ClienteFacturasDTO;
import com.example.backendT3.model.Factura;
import com.example.backendT3.service.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/factura")
public class FacturaController {

    @Autowired
    private FacturaService facturaService;

    @PostMapping
    public Factura save(@RequestBody Factura factura) { return facturaService.saveFactura(factura); }

}

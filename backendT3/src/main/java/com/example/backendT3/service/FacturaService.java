package com.example.backendT3.service;

import com.example.backendT3.converter.ClienteFacturasDTOConverter;
import com.example.backendT3.dto.ClienteFacturasDTO;
import com.example.backendT3.model.Cliente;
import com.example.backendT3.model.Factura;
import com.example.backendT3.repository.ClienteRepository;
import com.example.backendT3.repository.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FacturaService {

    @Autowired
    private FacturaRepository facturaRepository;

    public Factura saveFactura(Factura factura) { return facturaRepository.save(factura); }

}

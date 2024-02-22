package com.example.backendT3.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClienteFacturasDTO {

    private String nombre;

    private String apellidos;

    private List<Long> facturaImporte;
}

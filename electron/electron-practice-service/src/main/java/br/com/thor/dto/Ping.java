package br.com.thor.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Ping {

    private Double value;

    public Ping() {
    }

    public Ping(Double value) {
        this.value = value;
    }
}

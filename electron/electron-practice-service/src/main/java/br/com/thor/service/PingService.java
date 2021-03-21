package br.com.thor.service;

import br.com.thor.dto.Ping;
import org.springframework.stereotype.Service;

@Service
public class PingService {

    public Ping getPing() {
        return new Ping(100d);
    }
}

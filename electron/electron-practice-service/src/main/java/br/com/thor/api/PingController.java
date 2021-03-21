package br.com.thor.api;

import br.com.thor.dto.Ping;
import br.com.thor.service.PingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PingController {

    @Autowired
    private PingService pingService;

    @GetMapping("/ping")
    public Ping getPing() {
        return pingService.getPing();
    }
}

package br.com.thor.service;

import br.com.thor.dto.Ping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PingService {

    private static Logger logger = LoggerFactory.getLogger(PingService.class);

    public ResponseEntity<Ping> getPing() {
        logger.info("Getting ping from server...");

        return ResponseEntity.ok(new Ping(100d));
    }
}

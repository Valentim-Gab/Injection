package Java_Api_Injection.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

  @Bean
  public CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();

    config.setAllowCredentials(true);
    config.addAllowedOriginPattern("*"); // Permite todas as origens
    config.addAllowedHeader("*"); // Permite todos os headers
    config.addAllowedMethod("*"); // Permite todos os métodos (GET, POST, PUT, DELETE, etc)
    source.registerCorsConfiguration("/**", config);

    return new CorsFilter(source);
  }
}

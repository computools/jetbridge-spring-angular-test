package com.computools.teammanagementapi.configuration;

import com.computools.teammanagementapi.interceptors.TimeZoneInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

@EnableWebMvc
@Configuration
public class WebConfiguger implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String baseApiPath = "/api/v1/";

        registry
                .addResourceHandler("/**/*.css", "/**/*.html", "/**/*.js", "/**/*.jsx", "/**/*.png", "/**/*.ttf", "/**/*.woff", "/**/*.woff2")
                .setCachePeriod(0)
                .addResourceLocations("classpath:/static/dist/test-app/");

        registry.addResourceHandler("/", "/**")
                .setCachePeriod(0)
                .addResourceLocations("classpath:/static/dist/test-app/index.html")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
            @Override
            protected Resource getResource(String resourcePath, Resource location) throws IOException {
                if (resourcePath.startsWith(baseApiPath) || resourcePath.startsWith(baseApiPath.substring(1))) {
                    return null;
                }

                return location.exists() && location.isReadable() ? location : null;
            }
        });
    }



    @Bean
    TimeZoneInterceptor getTimeZoneInterceptor() {
        return new TimeZoneInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(getTimeZoneInterceptor())
                .addPathPatterns("/api/v1/**");
    }
}

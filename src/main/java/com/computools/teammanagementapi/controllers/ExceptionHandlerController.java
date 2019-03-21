package com.computools.teammanagementapi.controllers;

import com.computools.teammanagementapi.exceptions.ErrorViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class ExceptionHandlerController implements ErrorController {

    private static final String PATH = "/api/v1/error";

    @Autowired
    private ErrorAttributes errorAttributes;

    @RequestMapping(value = "/error")
    ErrorViewModel error(HttpServletRequest request,
                         WebRequest webRequest,
                         HttpServletResponse response
    ) {
        return new ErrorViewModel(response.getStatus(), getErrorAttributes(request, webRequest,false));
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }

    private Map<String, Object> getErrorAttributes(HttpServletRequest request,
                                                   WebRequest webRequest,
                                                   boolean includeStackTrace
    ) {
        RequestAttributes requestAttributes = new ServletRequestAttributes(request);
        return errorAttributes.getErrorAttributes(webRequest,includeStackTrace);
    }
}
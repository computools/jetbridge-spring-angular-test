package com.computools.teammanagementapi.exceptions;

import lombok.Data;

import java.util.Map;

@Data
public class ErrorViewModel {

    private Integer status;
    private String error;
    private String message;

    public ErrorViewModel(int status, Map<String, Object> errorAttributes) {
        this.status = status;
        this.error = (String) errorAttributes.get("error");
        this.message = (String) errorAttributes.get("message");
    }
}

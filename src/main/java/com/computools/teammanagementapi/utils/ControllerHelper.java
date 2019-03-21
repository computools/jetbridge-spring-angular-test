package com.computools.teammanagementapi.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ControllerHelper {

    public static ResponseEntity sendResponseEntityWithoutResponseBody(boolean operationStatus,
                                                                 HttpStatus successStatus,
                                                                 HttpStatus failureStatus
    ) {
        if(operationStatus) {
            return new ResponseEntity(successStatus);
        } else {
            return new ResponseEntity(failureStatus);
        }
    }
}

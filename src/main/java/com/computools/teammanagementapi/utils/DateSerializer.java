package com.computools.teammanagementapi.utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.sql.Time;
import java.time.Instant;
import java.time.ZonedDateTime;
import java.util.TimeZone;

public class DateSerializer extends StdSerializer<Time> {

    public DateSerializer(Class<Time> t) {
        super(t);
    }

    public DateSerializer() {
        this(null);
    }

    public void serialize(Time value,
                          JsonGenerator jgen,
                          SerializerProvider provider
    ) throws IOException, JsonProcessingException {
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        if (requestAttributes instanceof ServletRequestAttributes) {
            HttpServletRequest request = ((ServletRequestAttributes)requestAttributes).getRequest();
            TimeZone timeZone = (TimeZone) request.getSession().getAttribute("timeZone");
            if(timeZone != null) {
                Instant i = Instant.ofEpochSecond(value.getTime() / 1000);
                ZonedDateTime z = ZonedDateTime.ofInstant(i, timeZone.toZoneId());
                jgen.writeString(z.toLocalTime().toString());
                return;
            }
        }
        jgen.writeString(value.toLocalTime().toString());
    }
}

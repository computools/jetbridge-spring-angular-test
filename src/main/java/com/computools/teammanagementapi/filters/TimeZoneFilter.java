package com.computools.teammanagementapi.filters;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.TimeZone;

public class TimeZoneFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request,
                        ServletResponse response,
                        FilterChain chain
    ) throws IOException, ServletException {
        String timeZoneString = ((HttpServletRequest) request).getHeader("Timezone");
        TimeZone timeZone = null;
        if(timeZoneString != null) {
            timeZone = TimeZone.getTimeZone(timeZoneString);
        }
        ((HttpServletRequest) request).getSession().setAttribute("timeZone", timeZone);
        chain.doFilter(request, response);
    }
}

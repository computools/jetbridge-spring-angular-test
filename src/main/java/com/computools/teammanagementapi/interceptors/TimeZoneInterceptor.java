package com.computools.teammanagementapi.interceptors;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.TimeZone;

public class TimeZoneInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler
    ) throws Exception {
        String timeZoneString = ((HttpServletRequest) request).getHeader("Timezone");
        TimeZone timeZone = null;
        if(timeZoneString != null) {
            timeZone = TimeZone.getTimeZone(timeZoneString);
        }
        ((HttpServletRequest) request).getSession().setAttribute("timeZone", timeZone);
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request,
                           HttpServletResponse response,
                           Object handler,
                           ModelAndView modelAndView
    ) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request,
                                HttpServletResponse response,
                                Object handler,
                                Exception ex
    ) throws Exception {

    }
}
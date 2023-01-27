package com.miniproject.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Web Mapping Controller
 */
@Controller
public class WebController {

    /**
     * Vue Project
     *
     * @return
     */
    @RequestMapping(value = {"/", "/web/**"})  // 루트 (index.html을 위해) 혹은 web 접근시에 Vue 프로젝트의 view 호출
    public String viewMapping() {
        return "forward:/index.html";
    }
}
package com.example.basicui.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	
	@Value("${basicapi.url}")
	private String BASICAPI_URL;
	
	@Value("${basicapi.login.create}")
	private String BASICAPI_LOGIN_CREATE;
	
	@Value("${basicapi.login.checkAccess}")
	private String BASICAPI_LOGIN_CHECKACCESS;

	@GetMapping("/greeting")
	public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
		model.addAttribute("name", name);
		return "main/greeting";
	}
	
	@GetMapping("/login")
	public String login(Model model) {
		model.addAttribute("BASICAPI_LOGIN_CHECKACCESS", BASICAPI_URL + BASICAPI_LOGIN_CHECKACCESS);
		model.addAttribute("BASICAPI_LOGIN_CREATE", BASICAPI_URL + BASICAPI_LOGIN_CREATE);
		return "main/login";
	}

}

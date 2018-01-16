package tr.com.j32bit.rename.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import tr.com.j32bit.rename.dto.ReturnDTO;

@Controller
@RequestMapping("/userlogin")
public class ViewUserController {

	@RequestMapping(value = "/**", method = RequestMethod.GET)
	public String indexPage() {
		return "/";
	}

	// @PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.GET, value = "/status")
	public @ResponseBody ReturnDTO getActiveDeviceCount() {
		return new ReturnDTO(true, "Success");
	}
}

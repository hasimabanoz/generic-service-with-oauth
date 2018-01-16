package tr.com.j32bit.rename.cxf.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import tr.com.j32bit.rename.dto.ReturnDTO;
import tr.com.j32bit.rename.dto.UserDto;
import tr.com.j32bit.rename.entity.User;
import tr.com.j32bit.rename.service.UserService;

//http://www.vogella.com/tutorials/REST/article.html
@Component
@Path("/user")
public class UserCxfService {
	private static final Logger logger = LogManager.getLogger(UserCxfService.class);

	@Autowired
	UserService userService;

	@GET
	@Path("/status")
	@Produces(MediaType.APPLICATION_JSON)
	public ReturnDTO checkStatus() {
		logger.trace("getUserStatus method begins. ");
		ReturnDTO returnDTO = new ReturnDTO();
		returnDTO.setMessage("200");
		returnDTO.setStatus(true);
		return returnDTO;
	}

	@GET
	@PreAuthorize("hasAuthority('ADMIN')")
	@Path("/{token}")
	@Produces(MediaType.APPLICATION_JSON)
	public ReturnDTO checkAuth(@PathParam("token") String id) {
		ReturnDTO returnDTO = new ReturnDTO();
		returnDTO.setMessage("Token is valid.");
		returnDTO.setStatus(true);
		return returnDTO;
	}

	@GET
	@PreAuthorize("hasAuthority('ADMIN')")
	@Produces(MediaType.APPLICATION_JSON)
	public UserDto getUser() {
		logger.trace("getUser method begins. ");
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String name = auth.getName(); // get logged in username
		User user = userService.findUserByUsername(name);
		UserDto userDto = new UserDto();
		BeanUtils.copyProperties(user, userDto);
		logger.trace("getUser method completed: " + userDto.getFirstname() + " " + userDto.getSurname());
		return userDto;
	}

}
package tr.com.j32bit.rename.service;

import java.util.List;
import java.util.UUID;

import tr.com.j32bit.rename.entity.User;



public interface UserService {

	public User findUserByUsername(String userName);

	public List<User> findAllUsers();

	public User saveUser(User user);

	public boolean deleteById(UUID id);
	
	public void reset();

}

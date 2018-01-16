/****/
package tr.com.j32bit.rename.security;

import java.util.HashSet;
import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import tr.com.j32bit.rename.entity.User;
import tr.com.j32bit.rename.repository.UserRepository;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

	private static final Logger logger = LogManager.getLogger(UserDetailServiceImpl.class);

	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		logger.debug("UserDetailServiceImpl: loadUserByUsername method started.");
		logger.debug("UserDetailServiceImpl: loadUserByUsername method param:username is " + username);
		User user = userRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User " + username + " not found in database.");
		}
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
		grantedAuthorities.add(new SimpleGrantedAuthority("ADMIN"));

		logger.debug("UserDetailServiceImpl: loadUserByUsername method completed.");
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				grantedAuthorities);
	}

}

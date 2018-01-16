/**
 * 
 */
package tr.com.j32bit.rename.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import tr.com.j32bit.rename.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {

	public User findByUsername(String username);
	
	public Long deleteById(UUID id);
	
}

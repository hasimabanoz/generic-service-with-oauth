package tr.com.j32bit.rename.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tr.com.j32bit.rename.entity.User;
import tr.com.j32bit.rename.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	private static final Logger logger = LogManager.getLogger(UserServiceImpl.class);

	@Autowired
	UserRepository userRepository;

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<User> findAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public User findUserByUsername(String userName) {
		return userRepository.findByUsername(userName);
	}

	@Override
	public boolean deleteById(UUID id) {
		Long deletedCount = userRepository.deleteById(id);
		logger.trace(id);
		logger.trace(deletedCount);
		if (deletedCount > 0) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public void reset() {
		String sql = "";
		try {
			// s = new
			// String(Files.readAllBytes(Paths.get("src/main/resources/insert.sql")));
			sql = new String(Files.readAllBytes(Paths.get("pm.sql")));
			em.createNativeQuery(sql).getResultList();
		} catch (IOException e) {
			logger.error(e, e);
		} catch (Exception e) {
			// TODO postgres result set bulunamadı hatası göz ardı edilir.
		}

	}

}

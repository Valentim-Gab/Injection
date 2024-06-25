package Java_Api_Injection.service;

import java.util.List;

import org.springframework.stereotype.Service;

import Java_Api_Injection.constant.InjectionConstant;
import Java_Api_Injection.dao.UserDao;
import Java_Api_Injection.model.User;

@Service
public class UserService {
  private final boolean SQL_INJECTION_ACTIVE = InjectionConstant.SQL_INJECTION_ACTIVE;
  UserDao userDao = new UserDao();

  public List<User> getAll() {
    return userDao.getAll();
  }

  public User get(int id) {
    return SQL_INJECTION_ACTIVE ? userDao.get(id) : userDao.getSecure(id);
  }

  public List<User> search(String input) {
    return SQL_INJECTION_ACTIVE ? userDao.search(input) : userDao.searchSecure(input);
  }

  public User login(User user) {
    return SQL_INJECTION_ACTIVE ? userDao.login(user) : userDao.loginSecure(user);
  }
}

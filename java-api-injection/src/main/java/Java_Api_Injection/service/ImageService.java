package Java_Api_Injection.service;

import java.util.List;

import org.springframework.stereotype.Service;

import Java_Api_Injection.constant.InjectionConstant;
import Java_Api_Injection.dao.ImageDao;
import Java_Api_Injection.model.Image;

@Service
public class ImageService {
  private final boolean SQL_INJECTION_ACTIVE = InjectionConstant.SQL_INJECTION_ACTIVE;
  ImageDao imageDao = new ImageDao();

  public List<Image> getAll() {
    return imageDao.getAll();
  }

  public List<Image> getAllByUser(int userId) {
    return imageDao.getAllByUser(userId);
  }

  public Image get(int id) {
    return SQL_INJECTION_ACTIVE ? imageDao.get(id) : imageDao.getSecure(id);
  }

  public List<Image> search(int userId, String input) {
    return SQL_INJECTION_ACTIVE ? imageDao.search(userId, input) : imageDao.searchSecure(userId, input);
  }
}

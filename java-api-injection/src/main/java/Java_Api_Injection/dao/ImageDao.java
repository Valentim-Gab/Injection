package Java_Api_Injection.dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import Java_Api_Injection.model.Image;

public class ImageDao {
  private String sql;
  private ResultSet resultSet;
  private PreparedStatement preparedStatement;
  private UserDao userDao = new UserDao();

  public List<Image> getAll() {
    List<Image> listImage = new ArrayList<>();

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM image WHERE priv = false";
      preparedStatement = connection.prepareStatement(this.sql);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        Image image = new Image();
        image.setId_image(resultSet.getInt("id_image"));
        image.setTitle(resultSet.getString("title"));
        image.setUrl_image(resultSet.getString("url_image"));
        image.setPriv(resultSet.getBoolean("priv"));
        image.setUser(userDao.get(resultSet.getInt("id_user")));

        listImage.add(image);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return listImage;
  }

  public List<Image> getAllByUser(int userId) {
    List<Image> listImage = new ArrayList<>();

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM image WHERE priv = false AND id_user = ?";
      preparedStatement = connection.prepareStatement(this.sql);
      preparedStatement.setInt(1, userId);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        Image image = new Image();
        image.setId_image(resultSet.getInt("id_image"));
        image.setTitle(resultSet.getString("title"));
        image.setUrl_image(resultSet.getString("url_image"));
        image.setPriv(resultSet.getBoolean("priv"));
        image.setUser(userDao.get(resultSet.getInt("id_user")));

        listImage.add(image);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return listImage;
  }

  public Image get(int id) {
    Image image = null;

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM image WHERE priv = false AND id_image = " + id;
      preparedStatement = connection.prepareStatement(this.sql);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        image = new Image();
        image.setId_image(resultSet.getInt("id_image"));
        image.setTitle(resultSet.getString("title"));
        image.setUrl_image(resultSet.getString("url_image"));
        image.setPriv(resultSet.getBoolean("priv"));
        image.setUser(userDao.get(resultSet.getInt("id_user")));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return image;
  }

  public List<Image> search(int userId, String input) {
    List<Image> listImage = new ArrayList<>();

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT title, url_image, id_user FROM image WHERE priv = false AND id_user = " + userId
          + " AND title LIKE '%" + input
          + "%'";
      preparedStatement = connection.prepareStatement(this.sql);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        Image image = new Image();
        image.setTitle(resultSet.getString("title"));
        image.setUrl_image(resultSet.getString("url_image"));
        image.setUser(userDao.get(resultSet.getInt("id_user")));

        listImage.add(image);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return listImage;
  }

  public Image getSecure(int id) {
    Image image = null;

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM image WHERE priv = false AND id_image = ?";
      preparedStatement.setInt(1, id);
      preparedStatement = connection.prepareStatement(this.sql);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        image = new Image();
        image.setId_image(resultSet.getInt("id_image"));
        image.setTitle(resultSet.getString("title"));
        image.setUrl_image(resultSet.getString("url_image"));
        image.setPriv(resultSet.getBoolean("priv"));
        image.setUser(userDao.get(resultSet.getInt("id_user")));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return image;
  }

  public List<Image> searchSecure(int userId, String input) {
    List<Image> listImage = new ArrayList<>();

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT title, url_image, id_user FROM image WHERE priv = false AND id_user = ? title LIKE ?";
      preparedStatement = connection.prepareStatement(this.sql);
      preparedStatement.setInt(1, userId);
      preparedStatement.setString(2, '%' + input + '%');
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        Image image = new Image();
        image.setTitle(resultSet.getString("title"));
        image.setUrl_image(resultSet.getString("url_image"));
        image.setUser(userDao.get(resultSet.getInt("id_user")));

        listImage.add(image);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return listImage;
  }

}

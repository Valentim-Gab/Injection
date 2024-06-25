package Java_Api_Injection.dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import Java_Api_Injection.model.User;

public class UserDao {
  private String sql;
  private ResultSet resultSet;
  private PreparedStatement preparedStatement;

  public List<User> getAll() {
    List<User> listUser = new ArrayList<>();

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM users WHERE active = true and priv = false";
      preparedStatement = connection.prepareStatement(this.sql);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        User user = new User();
        user.setId(resultSet.getInt("id"));
        user.setName(resultSet.getString("name"));
        user.setDescription(resultSet.getString("description"));
        user.setEmail(resultSet.getString("email"));
        user.setRole(resultSet.getString("role"));
        user.setActive(resultSet.getBoolean("active"));
        user.setPriv(resultSet.getBoolean("priv"));

        listUser.add(user);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return listUser;
  }

  public User get(int id) {
    User user = null;

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM USERS WHERE active = true AND priv = false AND id = " + id;
      preparedStatement = connection.prepareStatement(this.sql);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        user = new User();
        user.setId(resultSet.getInt("id"));
        user.setName(resultSet.getString("name"));
        user.setDescription(resultSet.getString("description"));
        user.setEmail(resultSet.getString("email"));
        user.setRole(resultSet.getString("role"));
        user.setActive(resultSet.getBoolean("active"));
        user.setPriv(resultSet.getBoolean("priv"));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return user;
  }

  public List<User> search(String input) {
    List<User> listUser = new ArrayList<>();

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT name, description FROM users WHERE active = true AND priv = false AND name LIKE '%" + input
          + "%'";
      preparedStatement = connection.prepareStatement(this.sql);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        User user = new User();
        user.setName(resultSet.getString("name"));
        user.setDescription(resultSet.getString("description"));

        listUser.add(user);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return listUser;
  }

  public User getSecure(int id) {
    User user = null;

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM USERS WHERE active = true AND priv = false AND id = ?";
      preparedStatement = connection.prepareStatement(this.sql);
      preparedStatement.setInt(1, id);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        user = new User();
        user.setId(resultSet.getInt("id"));
        user.setName(resultSet.getString("name"));
        user.setDescription(resultSet.getString("description"));
        user.setEmail(resultSet.getString("email"));
        user.setRole(resultSet.getString("role"));
        user.setActive(resultSet.getBoolean("active"));
        user.setPriv(resultSet.getBoolean("priv"));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return user;
  }

  public List<User> searchSecure(String input) {
    List<User> listUser = new ArrayList<>();

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT name, description FROM users WHERE active = true AND priv = false AND name LIKE ?";
      preparedStatement = connection.prepareStatement(this.sql);
      preparedStatement.setString(1, '%' + input + '%');
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        User user = new User();
        user.setName(resultSet.getString("name"));
        user.setDescription(resultSet.getString("description"));

        listUser.add(user);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return listUser;
  }

  public User login(User userLogin) {
    User user = null;

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM users WHERE email = '" + userLogin.getEmail().toLowerCase() + "' AND password = '"
          + userLogin.getPassword() + "';";
      preparedStatement = connection.prepareStatement(this.sql);
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        user = new User();
        user.setId(resultSet.getInt("id"));
        user.setName(resultSet.getString("name"));
        user.setDescription(resultSet.getString("description"));
        user.setEmail(resultSet.getString("email"));
        user.setRole(resultSet.getString("role"));
        user.setActive(resultSet.getBoolean("active"));
        user.setPriv(resultSet.getBoolean("priv"));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return user;
  }

  public User loginSecure(User userLogin) {
    User user = null;

    try (Connection connection = new ConectaDBPostgres().getConexao()) {
      this.sql = "SELECT * FROM users WHERE email = ? AND password = ?;";
      preparedStatement = connection.prepareStatement(this.sql);
      preparedStatement.setString(1, userLogin.getEmail().toLowerCase());
      preparedStatement.setString(2, userLogin.getPassword());
      resultSet = preparedStatement.executeQuery();

      while (resultSet.next()) {
        user = new User();
        user.setId(resultSet.getInt("id"));
        user.setName(resultSet.getString("name"));
        user.setDescription(resultSet.getString("description"));
        user.setEmail(resultSet.getString("email"));
        user.setRole(resultSet.getString("role"));
        user.setActive(resultSet.getBoolean("active"));
        user.setPriv(resultSet.getBoolean("priv"));
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }

    return user;
  }
}

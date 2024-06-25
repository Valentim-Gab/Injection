package Java_Api_Injection.controller;

import org.springframework.web.bind.annotation.*;

import Java_Api_Injection.model.User;
import Java_Api_Injection.service.UserService;

import java.util.List;

@RestController()
@RequestMapping("user")
public class UserController {
  UserService userService = new UserService();

  @GetMapping()
  public List<User> getAll() {
    return userService.getAll();
  }

  @GetMapping("{id}")
  public User get(@PathVariable int id) {
    return userService.get(id);
  }

  @GetMapping("search/{input}")
  public List<User> search(@PathVariable String input) {
    return userService.search(input);
  }

  @PostMapping("login")
  public User login(@RequestBody User user) {
    return userService.login(user);
  }
}

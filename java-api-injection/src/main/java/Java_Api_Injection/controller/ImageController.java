package Java_Api_Injection.controller;

import org.springframework.web.bind.annotation.*;

import Java_Api_Injection.model.Image;
import Java_Api_Injection.service.ImageService;

import java.util.List;

@RestController()
@RequestMapping("image")
public class ImageController {
  ImageService imageService = new ImageService();

  @GetMapping()
  public List<Image> getAll() {
    return imageService.getAll();
  }

  @GetMapping("user/{userId}")
  public List<Image> getAllByUser(@PathVariable int userId) {

    System.out.println(userId);
    return imageService.getAllByUser(userId);
  }

  @GetMapping("{id}")
  public Image get(@PathVariable int id) {
    return imageService.get(id);
  }

  @GetMapping("search/{userId}")
  public List<Image> search(@PathVariable int userId, @RequestParam String input) {
    System.out.println(input);

    return imageService.search(userId, input);
  }
}

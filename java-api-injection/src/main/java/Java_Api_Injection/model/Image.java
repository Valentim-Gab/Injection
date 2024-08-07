package Java_Api_Injection.model;

public class Image {
  private int id_image;
  private String title;
  private String url_image;
  private Boolean priv;
  private User user;

  public Image() {

  }

  public int getId_image() {
    return id_image;
  }

  public void setId_image(int idImage) {
    this.id_image = idImage;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getUrl_image() {
    return url_image;
  }

  public void setUrl_image(String urlImage) {
    this.url_image = urlImage;
  }

  public Boolean getPriv() {
    return priv;
  }

  public void setPriv(Boolean priv) {
    this.priv = priv;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }
}

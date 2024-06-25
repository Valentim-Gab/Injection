package Java_Api_Injection.model;

public class Image {
  private int idImage;
  private String title;
  private String urlImage;
  private Boolean priv;
  private User user;

  public Image() {

  }

  public int getIdImage() {
    return idImage;
  }

  public void setIdImage(int idImage) {
    this.idImage = idImage;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getUrlImage() {
    return urlImage;
  }

  public void setUrlImage(String urlImage) {
    this.urlImage = urlImage;
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

import { Member } from "./member";

export interface ImageEntity {
  id_image: 2,
  title: string,
  url_image: string,
  priv: boolean,
  id_user?: number,
  user?: Member
}
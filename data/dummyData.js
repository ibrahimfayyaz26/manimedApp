class Category {
  constructor(id, title, imgUrl, code) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.code = code;
  }
}

export const CATEGORIES = [
  new Category(
    "c1",
    "FLECHBEN",
    "http://manimed.pk/admin/Product_images/WhatsApp%20Image%202021-02-14%20at%206.52.52%20AM%20(3).jpeg",
    "Code# Mt-101"
  ),
  new Category(
    "c2",
    "Nutra Gink",
    "http://manimed.pk/admin/Product_images/WhatsApp%20Image%202021-02-14%20at%206.52.52%20AM%20(2).jpeg",
    "Code# Mt-102"
  ),
  new Category(
    "c3",
    "Enzo Well",
    "http://manimed.pk/admin/Product_images/WhatsApp%20Image%202021-02-14%20at%206.52.52%20AM%20(1).jpeg",
    "Code# Mt-103"
  ),
];

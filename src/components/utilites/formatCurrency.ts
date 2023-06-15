export default function formatCurrency(price: number) {
  if (price) {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  } else return null;
}

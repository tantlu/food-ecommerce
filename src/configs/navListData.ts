import { ROUTES } from "@/routes";
import { NavItemUnit } from "../types/navItemUnit";

export const NAV_LIST_DATA: NavItemUnit[] = [
  {
    label: "QUÀ TẶNG TRÁI CÂY",
    url: "/qua-tang-trai-cay",
    children: [
      {
        label: "Chúc mừng nhân dịp",
        iconURL: "",
        children: [
          {
            label: "Lễ Tình nhân 14/02",
            url: "/",
          },
          {
            label: "Quốc tế Phụ nữ 08/03",
            url: "/",
          },
          {
            label: "Trung Thu",
            url: "/",
          },
          {
            label: "Phụ nữ Việt Nam 20/10",
            url: "/",
          },
          {
            label: "Nhà Giáo Việt Nam 20/11",
            url: "/",
          },
          {
            label: "Tết Nguyên Đán",
            url: "/",
          },
          {
            label: "Rằm Tháng Giêng",
            url: "/",
          },
        ],
      },
      {
        label: "Sinh nhật",
        iconURL: "",
        children: [
          {
            label: "Sinh nhật Ông/ Bà",
            url: "/",
          },
          {
            label: "Sinh nhật Bố/ Mẹ",
            url: "/",
          },
          {
            label: "Sinh nhật Anh ấy/ Cô ấy",
            url: "/",
          },
          {
            label: "Sinh nhật Đối tác/ Đồng nghiệp",
            url: "/",
          },
        ],
      },
      {
        label: "Cảm ơn",
        iconURL: "",
        children: [
          {
            label: "Cảm ơn Ông/ Bà",
            url: "/",
          },
          {
            label: "Cảm ơn Bố/ Mẹ",
            url: "/",
          },
          {
            label: "Cảm ơn Anh ấy/ Cô ấy",
            url: "/",
          },
          {
            label: "Cảm ơn Đối tác/ Đồng nghiệp",
            url: "/",
          },
        ],
      },
      {
        label: "Chúc sức khỏe",
        iconURL: "",
        children: [
          {
            label: "Chúc sức khỏe Ông/ Bà",
            url: "/",
          },
          {
            label: "Chúc sức khỏe Bố/ Mẹ",
            url: "/",
          },
          {
            label: "Chúc sức khỏe Anh ấy/ Cô ấy",
            url: "/",
          },
          {
            label: "Chúc sức khỏe Đối tác/ Đồng nghiệp",
            url: "/",
          },
        ],
      },
      {
        label: "Người thương",
        iconURL: "",
        children: [
          {
            label: "Tặng anh ấy",
            url: "/",
          },
          {
            label: "Tặng cô ấy",
            url: "/",
          },
        ],
      },
      {
        label: "Chúc mừng",
        iconURL: "",
      },
      {
        label: "Chia buồn",
        iconURL: "",
      },
      {
        label: "Đi lễ",
        iconURL: "",
      },
    ],
  },
  {
    label: "SẢN PHẨM",
    url: "/collection",
    children: [
      {
        label: "Cherry",
        iconURL: "",
      },
      {
        iconURL: "",
        label: "Berry",
      },
      {
        iconURL: "",
        label: "Hồng",
      },
      {
        iconURL: "",
        label: "Dưa",
      },
      {
        iconURL: "",
        label: "Nho",
      },
      {
        iconURL: "",
        label: "Táo",
      },
      {
        iconURL: "",
        label: "Lê",
      },
      {
        iconURL: "",
        label: "Kiwi",
      },

      {
        iconURL: "",
        label: "Có múi",
      },

      {
        iconURL: "",
        label: "Gift card",
      },
    ],
  },
  {
    label: "TRÁI CÂY TƯƠI HẰNG NGÀY",
    url: "/trai-cay-tuoi-hang-ngay",
    children: [
      {
        label: "Bộ đôi dinh dưỡng",
        iconURL: "",
      },
      {
        label: "BST Vitamin cho bạn",
        iconURL: "",
      },
      {
        label: "BST Vitamin cho gia đình 3 người",
        iconURL: "",
      },
      {
        label: "BST Vitamin cho gia đình 5 người",
        iconURL: "",
      },
    ],
  },
  {
    label: "GÓC SÁNG TẠO DÀNH RIÊNG CHO BẠN",
    url: "/goc-sang-tao",
  },
  {
    label: "KHÁM PHÁ KLEVER",
    url: "/",
    children: [
      {
        label: "Lịch sử phát tiển",
      },
      {
        label: "Tin tức Klever Food",
      },
      {
        label: "Video Klever Food",
      },
      {
        label: "Tuyển dụng - Ngôi nhà Klever Food",
      },
    ],
  },
];

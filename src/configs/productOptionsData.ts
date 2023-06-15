import { option, productFilterOption } from "@/types/productFilterOption";

export const PRODUCT_OPTION_DATA: option[] = [
  {
    name: "Sản phẩm nổi bật",
    url: "",
    checked: true,
  },
  {
    name: "Giá: tăng dần",
    url: "",
    checked: false,
  },
  {
    name: "Giá: giảm dần",
    url: "",
    checked: false,
  },
  {
    name: "Tên: A - Z",
    url: "",
    checked: false,
  },
  {
    name: "Tên: Z - A",
    url: "",
    checked: false,
  },

  {
    name: "Cũ nhất",
    url: "",
    checked: false,
  },
  {
    name: "Mới nhất",
    url: "",
    checked: false,
  },
  {
    name: "Bán chạy nhất",
    url: "",
    checked: false,
  },
  {
    name: "Tồn kho nhiều nhất",
    url: "",
    checked: false,
  },
];

export const PRODUCT_OPTION_LIST_DATA: productFilterOption[] = [
  {
    label: "Danh mục sản phẩm",
    options: [
      {
        name: "Cherry",
        url: "",
      },
      {
        name: "Berry",
        url: "",
      },
      {
        name: "Hồng",
        url: "",
      },
      {
        name: "Dưa",
        url: "",
      },
      {
        name: "Nho",
        url: "",
      },
      {
        name: "Táo",
        url: "",
      },
      {
        name: "Lê",
        url: "",
      },
      {
        name: "Kiwi",
        url: "",
      },
      {
        name: "Có múi",
        url: "",
      },
      {
        name: "Gift card",
        url: "",
      },
      {
        name: "Trái cây Việt Nam",
        url: "",
      },
    ],
  },
  {
    label: "Xuất xứ",
    options: [
      {
        name: "Mỹ",
        checked: false,
        url: "",
      },
      {
        name: "Pháp",
        checked: false,
        url: "",
      },
      {
        name: "Việt Nam",
        checked: false,
        url: "",
      },
      {
        name: "New Zealand",
        checked: false,
        url: "",
      },
      {
        name: "Úc",
        checked: false,
        url: "",
      },
      {
        name: "Canada",
        checked: false,
        url: "",
      },
      {
        name: "Hàn Quốc",
        checked: false,
        url: "",
      },
      {
        name: "Nhật Bản",
        checked: false,
        url: "",
      },
      {
        name: "Nam Phi",
        checked: false,
        url: "",
      },
      {
        name: "Khác",
        checked: false,
        url: "",
      },
    ],
  },
  {
    label: "Lọc giá",
    options: [
      {
        name: "Dưới 500.000đ",
        checked: false,
        url: "",
        price: {
          max: 500000,
        },
      },
      {
        name: "500.000đ - 1.000.000đ",
        checked: false,
        url: "",
        price: {
          min: 500000,
          max: 1000000,
        },
      },
      {
        name: "1.000.000đ - 2.500.000đ",
        checked: false,
        url: "",
        price: {
          min: 1000000,
          max: 2500000,
        },
      },
      {
        name: "2.500.000đ - 5.000.000",
        checked: false,
        url: "",
        price: {
          min: 2500000,
          max: 5000000,
        },
      },
      {
        name: "Trên 5.000.000đ",
        checked: false,
        url: "",
        price: {
          min: 5000000,
        },
      },
    ],
  },
];

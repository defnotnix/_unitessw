export const maritalStatusMap: any = {
  Single: "独身",
  Married: "結婚",
  Divorced: "離婚",
  Widowed: "未亡人",
  Separated: "別居",
  Partnered: "パートナーシップ",
};

export const genderMap: any = {
  Male: "男性",
  Female: "女性",
  Other: "その他",
};

export const monthMap: any = {
  January: "1月",
  February: "2月",
  March: "3月",
  April: "4月",
  May: "5月",
  June: "6月",
  July: "7月",
  August: "8月",
  September: "9月",
  October: "10月",
  November: "11月",
  December: "12月",
};

export const personalDetails: {
  label: string;
  label_jp: string;
  enKey: string;
  jpKey: string;
  unit?: string;
}[] = [
  {
    label: "Applicant ID",
    label_jp: "生年月日",
    enKey: "code",
    jpKey: "code",
  },
  {
    label: "Date of Birth",
    label_jp: "生年月日",
    enKey: "date_of_birth",
    jpKey: "date_of_birth",
  },

  {
    label: "Nationality",
    label_jp: "国籍",
    enKey: "nationality",
    jpKey: "jp_nationality",
  },
  {
    label: "Blood Type",
    label_jp: "血液型",
    enKey: "blood_type",
    jpKey: "blood_type",
  },
  {
    label: "Religion",
    label_jp: "宗教",
    enKey: "religion",
    jpKey: "jp_religion",
  },

  {
    label: "Current Address",
    label_jp: "現在の住所",
    enKey: "current_address",
    jpKey: "jp_current_address",
  },
  {
    label: "Language Lavel",
    label_jp: "言語レベル",
    enKey: "japanese_level",
    jpKey: "japanese_level",
  },

  {
    label: "Height",
    label_jp: "身長",
    enKey: "height_cm",
    jpKey: "height_cm",
    unit: "cm",
  },
  {
    label: "Weight",
    label_jp: "体重",
    enKey: "weight_kg",
    jpKey: "weight_kg",
    unit: "kg",
  },

  {
    label: "Clothing Size",
    label_jp: "服のサイズ",
    enKey: "clothing_size",
    jpKey: "clothing_size",
  },
  {
    label: "Shoe Size",
    label_jp: "表示サイズ",
    enKey: "shoe_size",
    jpKey: "shoe_size",
  },
];

"use client";

import {
  AspectRatio,
  Divider,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import React, { useEffect } from "react";

import classes from "./cv-cord.module.css";

const personalDetails = [
  {
    label: "Furigana",
    label_jp: "ふりがな",
    enKey: "furigana",
    jpKey: "furigana",
  },
  {
    label: "Full Name",
    label_jp: "氏名",
    enKey: "full_name",
    jpKey: "full_name",
  },
  {
    label: "Date of Birth",
    label_jp: "生年月日",
    enKey: "date_of_birth",
    jpKey: "date_of_birth",
  },
  {
    label: "Gender",
    label_jp: "性別",
    enKey: "gender",
    jpKey: "gender",
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
    label: "Marital Status",
    label_jp: "配偶者の有無",
    enKey: "martial_status",
    jpKey: "martial_status",
  },
  {
    label: "Current Address",
    label_jp: "現在の住所",
    enKey: "current_address",
    jpKey: "jp_current_address",
  },
  {
    label: "Residence Status",
    label_jp: "在留資格",
    enKey: "residence_status",
    jpKey: "jp_residence_status",
  },
  {
    label: "Residence Expiry",
    label_jp: "在留期限",
    enKey: "residence_expiry",
    jpKey: "jp_residence_expiry",
  },
  {
    label: "Height",
    label_jp: "身長",
    enKey: "height_cm",
    jpKey: "height_cm",
  },
  {
    label: "Weight",
    label_jp: "体重",
    enKey: "weight_kg",
    jpKey: "weight_kg",
  },
];

const additionalDetails = [
  {
    label: "Clothing Size",
    label_jp: "服のサイズ",
    enKey: "clothing_size",
    jpKey: "clothing_size",
  },
  {
    label: "Shoe Size",
    label_jp: "靴のサイズ",
    enKey: "shoe_size",
    jpKey: "shoe_size",
  },
  {
    label: "Dominant Hand",
    label_jp: "利き手",
    enKey: "dominant_hand",
    jpKey: "dominant_hand",
  },
  {
    label: "Eyesight (Left)",
    label_jp: "視力（左）",
    enKey: "eyesight_left",
    jpKey: "eyesight_left",
  },
  {
    label: "Eyesight (Right)",
    label_jp: "視力（右）",
    enKey: "eyesight_right",
    jpKey: "eyesight_right",
  },
  {
    label: "Email",
    label_jp: "メールアドレス",
    enKey: "email",
    jpKey: "email",
  },
  {
    label: "Parent Relation",
    label_jp: "続柄",
    enKey: "parent_relation",
    jpKey: "jp_parent_relation",
  },
  {
    label: "Parent Contact",
    label_jp: "保護者の連絡先",
    enKey: "parent_contact",
    jpKey: "parent_contact",
  },
];

export function CVCorp({
  color = "brand",
  data,
  language,
  printSt,
}: {
  color: any;
  data: any;
  language: any;
  printSt: boolean;
}) {
  useEffect(() => {}, [color]);

  const highlightColor = `var(--mantine-color-${color}-1)`;

  return (
    <Paper h={"11.7in"} w={"8.5in"} p="1in">
      <table className={classes.cvtable}>
        <tbody>
          <tr>
            <td
              style={{
                height: ".5in",
              }}
            >
              <b>MT307</b>
            </td>
            <td></td>
            <td colSpan={5}>
              <b>履歴書</b>
            </td>
            <td colSpan={2}>2025年5月27日 現在</td>
            <td colSpan={2} rowSpan={3}>
              <img src="https://r2.erweima.ai/imgcompressed/compressed_37c94e20cb613116de36841ba02309d2.webp" />
            </td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              フリガナ
            </td>
            <td colSpan={8}> サリップ　ヒダヤットゥラ－</td>
          </tr>

          <tr>
            <td
              style={{
                height: ".4in",
                background: highlightColor,
              }}
              className={classes.tdHighlight}
            >
              氏名{" "}
            </td>
            <td colSpan={8}>{`SARIP HIDAYATULLAH`}</td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              生年月日{" "}
            </td>
            <td colSpan={2}>2000年08月06日</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              年齢
            </td>
            <td>24</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              性別
            </td>
            <td>男</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              国籍
            </td>
            <td colSpan={2}>インドネシア</td>
          </tr>

          <tr>
            <td
              style={{
                width: "10%",
                background: highlightColor,
              }}
              className={classes.tdHighlight}
            >
              視力{" "}
            </td>
            <td
              style={{
                width: "9%",
                background: highlightColor,
              }}
              className={classes.tdHighlight}
            >
              左{" "}
            </td>
            <td
              style={{
                width: "9%",
              }}
            >
              正常
            </td>
            <td
              style={{
                width: "9%",
                background: highlightColor,
              }}
              className={classes.tdHighlight}
            >
              右
            </td>
            <td
              style={{
                width: "9%",
              }}
            >
              正常
            </td>
            <td
              style={{
                width: "9%",
                background: highlightColor,
              }}
              className={classes.tdHighlight}
            >
              身長
            </td>
            <td
              style={{
                width: "9%",
              }}
            >
              167
            </td>
            <td
              style={{
                width: "10%",
                background: highlightColor,
              }}
              className={classes.tdHighlight}
            >
              体重
            </td>
            <td colSpan={2}>80</td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              洋服サイズ
            </td>
            <td colSpan={2}>XL</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              靴サイズ
            </td>
            <td>27.5</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              飲酒
            </td>
            <td>飲まない</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              喫煙
            </td>
            <td
              style={{
                width: "11%",
              }}
            >
              吸わない
            </td>
            <td
              style={{
                width: "13%",
                background: highlightColor,
              }}
              className={classes.tdHighlight}
            >
              在留資格
            </td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
              rowSpan={2}
            >
              現在地
            </td>
            <td colSpan={2}>〒45166</td>
            <td colSpan={4}>西ジャワ インドネシア</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              利き手{" "}
            </td>
            <td>右</td>
            <td></td>
          </tr>

          <tr>
            <td colSpan={6}>JAWA BARAT INDONESIA</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              血液型
            </td>
            <td>AB型</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              在留期限
            </td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              日本語レベル：
            </td>
            <td colSpan={3}>JFT A2</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              宗教{" "}
            </td>
            <td colSpan={2}>イスラム</td>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
            >
              既婚状況{" "}
            </td>
            <td>未婚</td>
            <td></td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              colSpan={2}
              style={{
                textAlign: "left",
                background: highlightColor,
              }}
            >
              緊急連絡先
            </td>
            <td colSpan={3}></td>
            <td
              colSpan={3}
              className={classes.tdHighlight}
              style={{
                textAlign: "left",
                background: highlightColor,
              }}
            >
              EMAIL
            </td>
            <td
              colSpan={2}
              className={classes.tdHighlight}
              style={{
                textAlign: "left",
              }}
            >
              連絡先
            </td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              colSpan={2}
              style={{
                textAlign: "left",
                background: highlightColor,
              }}
            >
              名前
            </td>
            <td
              colSpan={3}
              style={{
                textAlign: "left",
              }}
            >
              NUR AZIZAH
            </td>
            <td
              colSpan={3}
              rowSpan={2}
              style={{
                textAlign: "left",
              }}
            ></td>
            <td
              colSpan={2}
              rowSpan={2}
              style={{
                textAlign: "left",
              }}
            ></td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
              colSpan={2}
            >
              続柄
            </td>
            <td colSpan={3}>姉</td>
          </tr>

          {/* Academics */}

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
              colSpan={10}
            >
              学歴
            </td>
          </tr>

          <tr>
            <td>2015</td>
            <td>7</td>
            <td
              colSpan={7}
              style={{
                textAlign: "left",
              }}
            >
              【インドネシア】ススカン第 1国立職業高等学校
            </td>
            <td>入学</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td
              colSpan={8}
              style={{
                borderRight: "none!important",
                textAlign: "right",
                paddingRight: ".9in",
              }}
            >
              以上
            </td>
          </tr>

          {/* Work */}

          <tr className={classes.hidden}>
            <td>-</td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
              colSpan={10}
            >
              学歴
            </td>
          </tr>

          <tr>
            <td>2015</td>
            <td>7</td>
            <td
              colSpan={7}
              style={{
                textAlign: "left",
              }}
            >
              【インドネシア】ススカン第 1国立職業高等学校
            </td>
            <td>入学</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td
              colSpan={8}
              style={{
                borderRight: "none!important",
                textAlign: "right",
                paddingRight: ".9in",
              }}
            >
              以上
            </td>
          </tr>

          {/* Work */}

          <tr className={classes.hidden}>
            <td>-</td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
              colSpan={10}
            >
              学歴
            </td>
          </tr>

          <tr>
            <td>2015</td>
            <td>7</td>
            <td
              colSpan={8}
              style={{
                textAlign: "left",
              }}
            >
              【インドネシア】ススカン第 1国立職業高等学校
            </td>
          </tr>

          <tr className={classes.hidden}>
            <td>-</td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
              colSpan={10}
            >
              学歴
            </td>
          </tr>

          <tr>
            <td
              colSpan={10}
              style={{
                textAlign: "left",
                padding: ".1in 4px",
              }}
            >
              <p>
                私は責任感が強く、さまざまな仕事に柔軟に対応できる性格です。大学卒業後は銀行でカスタマーサービスとして勤務し、お客様への丁寧な対応や対人スキルを身に
                つけました。その後、日本に来てからはスシローのキッチンでアルバイトを経験し、初めての現場でも積極的に学ぶ姿勢を大切にしながら、日本語の環境にもスムーズに
                適応することができました。
                <br />
                <br />
                私の姉は日本で介護の仕事をしており、彼女から仕事内容や大変さ、やりがいについて多くの話を聞きました。その話を通じて、私も人の役に立つ仕事に魅力を感じ、
                介護の仕事に興味を持つようになりました。現在は介護について勉強しており、将来的には介護福祉士の資格を取得したいと考えています。高齢者の方々が安心して
                暮らせるよう、心のこもった支援ができる介護職員を目指しています。
              </p>
            </td>
          </tr>

          <tr className={classes.hidden}>
            <td>-</td>
          </tr>

          <tr>
            <td
              className={classes.tdHighlight}
              style={{ background: highlightColor }}
              colSpan={10}
            >
              学歴
            </td>
          </tr>
          <tr>
            <td colSpan={10}></td>
          </tr>
        </tbody>
      </table>
    </Paper>
  );
}

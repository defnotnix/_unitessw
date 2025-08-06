"use client";

import {
  AspectRatio,
  Box,
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
import { Watermark } from "./watermar";
//@ts-ignore
import imgSSW from "./brand/sswunite_light.png";

export function CVCorp({
  color = "brand",
  data,
  language,
  printSt,
  logo,
  date,
}: {
  color: any;
  data: any;
  language: any;
  printSt: boolean;
  logo?: any;
  date: Date;
}) {
  useEffect(() => {}, [color]);

  const highlightColor = `var(--mantine-color-${color}-1)`;

  function calculateAge(dateOfBirth: any) {
    const dob = new Date(dateOfBirth); // Accepts formats like 'YYYY-MM-DD'
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  return (
    <Paper h={"11.7in"} w={"8.5in"} pos="relative">
      <Watermark logo={logo} />
      <Box p=".8in">
        <table className={classes.cvtable}>
          <tbody>
            <tr>
              <td
                style={{
                  height: ".5in",
                }}
              >
                <b>{data?.code}</b>
              </td>
              <td>
                <img
                  src={
                    logo == "mb"
                      ? "https://manabiyanepal.com.np/_next/static/media/manabiya_logo.a8d02286.png"
                      : imgSSW.src
                  }
                  style={{
                    height: ".5in",
                    width: ".5in",
                    objectFit: "contain",
                  }}
                />
              </td>
              <td colSpan={5}>
                <b style={{ fontSize: ".15in" }}>履歴書</b>
              </td>
              <td colSpan={2}>
                {new Date(date).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                現在
              </td>
              <td colSpan={2} rowSpan={3}>
                <img
                  src={data?.image}
                  style={{
                    width: "100%",
                    height: "1.1in",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                フリガナ
              </td>
              <td colSpan={8}>
                {`${data?.jp_last_name} ${data?.jp_first_name} ${data?.jp_middle_name}`}
              </td>
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
              <td
                colSpan={8}
              >{`${data?.first_name} ${data?.middle_name} ${data?.last_name}`}</td>
            </tr>

            <tr>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                生年月日{" "}
              </td>
              <td colSpan={2}>
                {new Date(data?.date_of_birth).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                年齢
              </td>
              <td>{calculateAge(data?.date_of_birth)}</td>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                性別
              </td>
              <td>
                {data.gender == "Male"
                  ? "男"
                  : data.gender == "Female"
                    ? "女"
                    : "先生"}
              </td>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                国籍
              </td>
              <td colSpan={2}>{data?.jp_nationality}</td>
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
                {data?.eyesight_left == "0" ? "正常" : data?.eyesight_left}
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
                {data?.eyesight_left == "0" ? "正常" : data?.eyesight_left}
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
                {data?.height_cm}
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
              <td colSpan={2}>{data?.weight_kg}</td>
            </tr>

            <tr>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                洋服サイズ
              </td>
              <td colSpan={2}>{data?.clothing_size}</td>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                靴サイズ
              </td>

              <td>{data?.shoe_size}</td>

              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                飲酒
              </td>
              <td> {data?.drinks_alcohol ? "飲まない" : "飲ます"}</td>
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
                {data?.smokes ? "吸わない" : "吸う"}
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

              <td colSpan={6}>{data?.jp_current_address}</td>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                利き手{" "}
              </td>
              <td>{data?.dominant_hand == "Right" ? "右" : "左"}</td>
              <td>{data?.residence_status}</td>
            </tr>

            <tr>
              <td colSpan={6}>{data?.current_address}</td>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                血液型
              </td>
              <td>{data?.blood_type}</td>
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
              <td colSpan={3}>{data?.japanese_level}</td>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                宗教{" "}
              </td>
              <td colSpan={2}>{data?.jp_religion}</td>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
              >
                既婚状況{" "}
              </td>
              <td>未婚</td>
              <td>{data?.residence_expiry}</td>
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
              <td
                colSpan={3}
                style={{
                  textAlign: "left",
                }}
              >
                {data?.parent_contact}
              </td>
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
                  background: highlightColor,
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
                {data?.parent_relation}
              </td>
              <td
                colSpan={3}
                rowSpan={2}
                style={{
                  textAlign: "left",
                }}
              >
                {data?.email}
              </td>
              <td
                colSpan={2}
                rowSpan={2}
                style={{
                  textAlign: "left",
                }}
              >
                {data?.contact}
              </td>
            </tr>

            <tr>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor, textAlign: "left" }}
                colSpan={2}
              >
                続柄
              </td>
              <td colSpan={3}>{data?.jp_martial_status}</td>
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

            {data?.education.map((ed: any, index: number) => (
              <tr key={index}>
                <td
                  colSpan={2}
                  style={{
                    textAlign: "left",
                  }}
                >{`${ed.start_month}, ${ed.start_year}`}</td>
                <td
                  colSpan={2}
                  style={{
                    textAlign: "left",
                  }}
                >{`${ed.end_month}, ${ed.end_year}`}</td>
                <td
                  colSpan={4}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {ed?.jp_institution}
                </td>
                <td
                  colSpan={2}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {ed?.jp_major_or_notes}
                </td>
              </tr>
            ))}

            <tr>
              <td
                colSpan={10}
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
                職歴
              </td>
            </tr>

            {data?.work_experience.map((work: any, index: number) => (
              <tr key={index}>
                <td
                  colSpan={2}
                  style={{
                    textAlign: "left",
                  }}
                >{`${work.start_month}, ${work.start_year}`}</td>
                <td
                  colSpan={2}
                  style={{
                    textAlign: "left",
                  }}
                >{`${work.end_month}, ${work.end_year}`}</td>

                <td
                  colSpan={3}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {work?.jp_company}
                </td>
                <td
                  colSpan={2}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {work?.jp_role}
                </td>
                <td
                  style={{
                    textAlign: "left",
                  }}
                >
                  {work?.jp_notes}
                </td>
              </tr>
            ))}

            <tr>
              <td
                colSpan={10}
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
                免許・資格
              </td>
            </tr>

            {data?.license_qualification?.map((license: any, index: number) => (
              <tr key={index}>
                <td>{license?.date_received}</td>
                <td
                  colSpan={9}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {license?.jp_name}
                </td>
              </tr>
            ))}

            <tr className={classes.hidden}>
              <td>-</td>
            </tr>

            <tr>
              <td
                className={classes.tdHighlight}
                style={{ background: highlightColor }}
                colSpan={10}
              >
                自己 PR・志望動機
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
                {data?.jp_motivation_statement}
                <br />
                {data?.jp_personal_traits}
                <br />
                {data?.jp_future_goals}
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
                備考
              </td>
            </tr>
            <tr>
              <td colSpan={10}></td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Paper>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: " #0c5c1f",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "#0c5c1f",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#0c5c1f",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tan",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#0c5c1f",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
      ออมอย่างไรให้ยั่งยืน
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          1
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            ทำบัญชีรายรับ-รายจ่าย

          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            อย่าเพิ่งถอดใจถ้าคุณจะต้องทำรายรับรายจ่ายในแต่ละวันของคุณ เพราะความยุ่งยากที่ต้องมาคอยจดค่าใช้จ่ายลงในสมุดอยู่ตลอดเวลา แต่การทำบัญชีรายรับรายจ่ายนั้นสำคัญต่อการออมอย่างแน่นอน และในปัจจุบันมีแอปพลิเคชันที่ช่วยในการทำรายรับรายจ่ายที่คุณไม่ต้องปวดหัวไปกับการจดบันทึกลงสมุด แถมยังแสดงสถิติและค่าเฉลี่ยการใช้จ่ายของคุณได้อย่างรวดเร็วอีกด้วย
บัญชีรายรับ-รายจ่ายใช้ดูว่าพฤติกรรมการใช้เงินในชีวิตประจำวันของคุณว่าเป็นอย่างไร และผลลัพธ์ของการทำบัญชีนี้จะบอกความสามารถในการออมของคุณ ว่าเงินที่ใช้จ่ายในชีวิตประจำวันนั้นสมเหตุสมผลกับเงินที่แบ่งออมไปหรือไม่ ถ้าทำบัญชีรายรับ-รายจ่ายแล้วพบว่าเงินที่ใช้ในชีวิตประจำวันไม่พอใช้ คุณอาจจะต้องลดปริมาณของเงินที่แบ่งเก็บลง หรืออาจจะต้องปรับค่าใช้จ่ายในชีวิตประจำวันลงเพื่อเงินเก็บในจำนวนที่ต้องการ
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            แบ่งเก็บอย่างน้อย 10 – 20% จากรายได้
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            หลังจากได้เงินเดือนหรือมีรายได้จากช่องทางอื่นเข้ามา สิ่งแรกที่ควรทำคือ การหักเงินไปเก็บ 10 – 20% ของรายได้ในช่วงเดือนนั้นทันที เนื่องจากการรอเก็บจากเงินที่เหลืออยู่ในภายหลังอาจจะไม่เหลือเงินเก็บเลยก็ได้ โดยวิธีการเก็บเงินไม่ควรเก็บไว้กับบัญชีปกติที่คุณใช้อยู่ คุณควรมีบัญชีเงินฝากแยกเก็บโดยเฉพาะ (ซึ่งควรเป็นบัญชีเงินฝากประจำ) จะเป็นการช่วยหักห้ามใจในการใช้เงินในส่วนที่ต้องการเก็บไปจนหมด
เช่น ถ้าคุณมีรายรับต่อเดือน 30,000 บาท ให้หักไปเข้าบัญชีเงินออม 20% ซึ่งอยู่ที่ 6,000 บาท คุณจะเหลือเงิน 24,000 บาทในการใช้สอยในเดือนนั้นๆ
สำหรับการออมเงินฝากเป็นประจำทุกเดือน เดือนละ 6,000 บาทนี้ เมื่อครบ 1 ปีคุณจะไม่ได้รับเพียงแค่ 72,000 บาทเท่านั้น แต่จะมีดอกเบี้ยเงินฝากเพิ่มเข้ามาด้วย ซึ่งจำนวนดอกเบี้ยนั้นจะเป็นไปตามที่ธนาคารกำหนด
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          3
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            ทำงบรายจ่ายประจำเดือน

          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            นอกจากการเก็บออมทั่วไปแล้ว หากจะเก็บออมให้ยั่งยืนได้จริง เราจะต้องควบคุมรายจ่ายด้วย ซึ่งทำได้โดยการตั้งงบประมาณค่าใช้จ่ายที่เราต้องใช้ในแต่ละเดือน
วิธีการตั้งงบประมาณรายจ่ายประจำเดือนนั้น จะต่อยอดจากการทำบัญชีรายรับ-รายจ่าย เพราะบัญชีรายรับ-รายจ่ายจะช่วยให้คุณรู้ว่าในแต่ละเดือนคุณมีรายรับเท่าไรและมีรายจ่ายทางใดบ้าง และแน่นอนว่า ให้คุณตั้งงบประมาณการออมไว้ก่อนรายจ่ายอื่นๆ ตามเป้าหมายหรือเพียง 10 – 20% ก็ได้ จากนั้นเงินที่เหลือจึงค่อยแบ่งเป็นค่าใช้จ่ายต่างๆ
ยกตัวอย่างเช่น รายได้ 20,000 บาท แบ่งเงินออม 20% หรือ 4,000 บาท เหลือ 16,000 บาท จึงค่อยแบ่งเป็นค่าเช่าบ้าน 5,000 บาท ค่าอาหาร 5,000 บาท ค่าเดินทาง 1,500 บาท ค่าโทรศัพท์ 500 บาท และอื่นๆ อีก 4,000 บาท
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          สรุป
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           สำหรับคนที่ออมเงินไม่อยู่หรือใครที่กำลังมองหาวิธีการออมเงินอยู่ มาเริ่มได้ด้วยการสร้างวินัยการออมให้กับตนเอง ด้วยการตั้งเป้าหมายการออมและตั้งใจทำอย่างต่อเนื่อง จะช่วยให้คุณเกิดความเคยชินไปกับการออมเงินด้วยตนเอง และออมให้ยั่งยืนด้วยการแบ่งออมก่อนใช้และควบคุมรายจ่ายด้วยการตั้งงบประมาณรายเดือน คุณก็สามารถบรรลุเป้าหมายการออมได้
          </Typography>
          
        </Box>
       
      </Box>
    </Box>
  );
};

export default Resume;

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
      หัวใจสำคัญของการเจรจาหนี้คือ อย่ารับปากในสิ่งที่ตัวเองทำไม่ได้
      </Typography>
      <Box component="div" className={classes.timeLine}>
      
        <Box component="div" className={classes.timeLineItem}>
       
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           ตัวอย่างเช่น เราเป็นหนี้ต้องส่งเดือนละ 10,000 บาท เราเบี้ยวมาหลายครั้งแล้ว เขาเสนอให้เราจ่ายเดือนละ 7,500 บาท ถ้ายังสูงเกินไป เราไม่ไหว เราก็ควรเจรจาในสิ่งที่เราทำไหว ไม่ใช่รับปากเพื่อให้เรื่องผ่านไป วิธีการแบบนี้ไม่รับผิดชอบและใช้ไม่ได้ อาจบอกว่า 5,000-7,000 บาทไม่ไหวจริงๆ ขอเป็น 3,500 บาท และขอยืดเวลาเป็น 18 เดือน สุดท้ายมันก็จะปรับไปปรับมาจนพอใจกันทั้งสองฝ่าย แต่ถ้ายังหาข้อตกลงกันไม่ได้ เจ้าหนี้อาจโทรมาติดตามหนี้อยู่เรื่อยๆ เราควรรับโทรศัพท์ทุกครั้งและบอกไปตามตรง อย่าเลี่ยง เพราะหนี้เป็นปัญหาที่แก้ได้หากมีสติ วันนี้เรามีภาระคือหนี้ในอดีต แต่ถ้าอยากมีอนาคตด้วยการเดินไปข้างหน้า เราก็ต้องสร้างรายได้ อาจหารายได้จากความสามารถพิเศษส่วนตัว เพราะต้นทุนไม่ได้เยอะมาก
สุดท้ายหากทำตามวิธีที่ข้างต้นแล้วก็ยังตกลงกับเจ้าหนี้ไม่ได้ ทุกอย่างจะไปจบกันที่ศาล ซึ่งไม่ได้น่ากลัวอย่างที่คิด เพราะคดีหนี้ไม่ได้ร้ายแรง ในกระบวนการจะมีการเจรจากันอีกรอบ ที่สำคัญที่สุดคืออย่าหนี เพราะถ้าหนีแล้วเขายึดทรัพย์เราก็ทำอะไรไม่ได้ ผู้พิพากษาก็พิจารณาตามรูปคดี เราก็แพ้อยู่แล้วร้อยเปอร์เซ็นต์ ดังนั้นเราควรไปเผชิญหน้าและแก้ปัญหา
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           สร้างโอกาสหลังเคลียร์หนี้
          </Typography>
      <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           หลังจากเคลียร์หนี้หมด จะมีใบแจ้งหนี้สรุปยอดสุดท้ายส่งมาให้เรา เราต้องเก็บเอกสารนี้ไว้ เพราะต่อให้เราจ่ายหนี้หมด กว่าที่ข้อมูลจะถูกอัปเดตในระบบคืออีก 3 ปี อย่างกรณีโค้ชเองพอแก้หนี้หมด ผ่านไป 1 ปีก็อยากยื่นกู้ซื้อบ้าน ก็ต้องแนบเอกสารเหล่านี้ไปด้วย แม้ว่าธนาคารจะไม่ได้ขอ เพราะสุดท้ายเขาจะไปตรวจข้อมูลเราที่ เครดิตบูโร เราก็จะได้ใช้เอกสารตรงนี้ยืนยันว่าเคลียร์หนี้หมดแล้ว และนอกจากนั้นโค้ชไม่ได้ยื่นกู้เจ้าเดียว แต่ยื่นถึง 3 เจ้า เพราะรู้ว่าเครดิตบูโรเราไม่ได้สวยงามเท่าไร ปรากฏว่ามีธนาคาร 2 เจ้าให้กู้
 
ถ้าหากยังไม่ครบ 3 ปีที่ข้อมูลเครดิตบูโรจะอัปเดต แต่เราแก้หนี้ได้ก่อน เราก็มีโอกาสที่จะกลับมาใช้ชีวิตการเงินเป็นปกติ และมีความรู้ทางการเงินที่ถูกต้องในที่สุด นอกจากนั้นแล้วคนที่แก้หนี้อย่างถูกวิธี พยายามลดรายจ่าย เพิ่มรายได้ หาทางเพิ่มทรัพย์สิน และสามารถทำตามวิธีนี้ได้จะส่งผลดังนี้
          </Typography>
        </Box>
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
ชีวิตเจริญเติบโตขึ้นในด้านความคิด
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >

เพราะเปลี่ยนจากติดลบเป็นศูนย์ และขึ้นมาเป็นบวก
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
           มีภูมิปัญญาทางการเงินที่สูงขึ้น
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
              เพราะคนเราจะเก่งเรื่องอะไรก็แล้วแต่ มาจากการที่เราผ่านปัญหาเรื่องนั้นและกัดฟันสู้จนผ่านมาได้ ทำให้เรามีความสามารถขึ้นอีกระดับ เหมือนการเล่นเกมผ่านหลายด่าน ลุยไปเรื่อยๆ จนเจอบอส พอเราผ่านด่านที่ 1 ไปสู่ด่านที่ 2 เราก็จะไม่เสียเวลากับด่านที่ 1 มากแล้ว เราเก่งขึ้น รู้ว่าตรงไหนมีกับดัก และเมื่อเราเก่งมากขึ้นเราก็จะไม่กลับไปผิดพลาดเรื่องเดิมๆ อีก
 
การเงินเป็นสิ่งที่พลิกผันเสมอ เมื่อติดลบได้วันหนึ่งเราก็กลับมาบวกได้ สิ่งสำคัญคือเราต้องเชื่อมั่นในตัวเอง และเรียนรู้ที่จะจัดการปัญหาด้วยตัวเองโดยไม่รอที่จะให้ใครมาช่วย ขอเป็นกำลังใจให้สู้ปัญหาทางการเงินด้วยภูมิปัญญาทางการเงิน และเราจะมีชีวิตที่มีความสุขที่สุด
          </Typography>
        </Box>
   
      </Box>
    </Box>
  );
};

export default Resume;

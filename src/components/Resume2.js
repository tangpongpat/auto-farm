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
            วิธีการออมเงิน(ฉบับคนออมเงินไม่อยู่)

          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เป็นสมการการเงินที่ตรงไปตรงมา เพราะถ้าเราจ่ายเกินที่หาได้ ชีวิตการเงินก็ต้องแย่ เมื่อใช้จ่ายเกินรายรับ คำถามคือ เราเอาส่วนเกินจากไหนมากินมาใช้ คำตอบคือ     เงินในอนาคตหรือหนี้ หากเกิดหนี้ ก็ต้องจ่ายขั้นต่ำ จ่ายดอกเบี้ย เป็นภาระทุกเดือน แทนที่จะเอาดอกเบี้ยที่ต้องจ่ายให้เจ้าหนี้ มาออมหรือลงทุนเพื่อตัวเอง ก็ต้องเอาไปชำระหนี้อยู่ทุกเดือน แม้ว่าหนี้นั้นจะเป็นบ้านหรือรถยนต์ที่คนเรามักจะมองว่า ของมันจำเป็นต้องมี แต่แม้จะจำเป็น เราก็ต้องบริหารให้เป็นด้วย จะทำอะไร “ความจำเป็น” ต้องมาควบคู่กับ “ความพร้อม” ถึงจะเรียกว่าบริหารเงินได้ดี ของบางอย่างจำเป็น แต่ยังไม่ต้องรีบซื้อก็ได้ ถ้าดูแล้วผ่อนไม่ไหว เช่น บ้าน คอนโด หรือรถยนต์
เรื่องความจำเป็นและความพร้อม แต่ละคนก็ไม่เหมือนกัน ไม่สามารถเลียนแบบกันหรือทำตามกัน เราจำเป็นเหมือนเขา แต่เราไม่พร้อมเหมือนเขา แบบนี้ก็ควรอดใจรอ เพราะหากซื้อแล้วผ่อนชำระไม่ไหว จะกลายเป็นสร้างหนี้สินทั้งต้นทั้งดอกเพิ่มภาระให้เราเสียเปล่า ถ้าจำเป็นจริงๆควรเริ่มจากราคาที่เราไหวก่อน ก่อนตัดสินใจซื้อควรคำนึงถึงวันข้างหน้า ว่าถ้าซื้อไปแล้ว การเงินของเราจะเป็นอย่างไร
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
            สร้างวินัยการออมให้กับตนเอง
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           สำหรับคนที่ออมเงินไม่อยู่มักเกิดจากการวางแผนการออมที่ไม่มีเป้าหมายชัดเจนหรือขาดวินัยทางการออม เมื่อแบ่งเก็บไปแล้วก็ยังนำเงินส่วนนั้นออกมาใช้จ่าย การสร้างวินัยการออมเงินจึงเป็นเรื่องที่ควรมีและปฏิบัติตามอย่างเคร่งครัด เพื่อทำให้ยอดเงินออมของคุณบรรลุเป้าหมายที่ตั้งเอาไว้ โดยสามารถทำได้ดังนี้
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
            ตั้งเป้าหมายการออมให้ชัดเจน

          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เริ่มต้นวางแผนการออมเงินของคุณก่อน ว่าเป้าหมายของการออมคืออะไร ซึ่งจะช่วยกำหนดระยะเวลาการออมให้กับคุณได้
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           ออมระยะสั้น
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            (ระยะเวลา 0 – 2 ปี) สำหรับเดินทางไปเที่ยวต่างประเทศ ซื้อของที่ราคาแพง หรือเพื่อเป็นเงินสำรองฉุกเฉิน

          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           ออมระยะกลาง
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            (ระยะเวลา 2 – 10 ปี) สำหรับเป็นเงินต้นในการซื้ออสังหาริมทรัพย์ ดาวน์รถ หรือเพื่อใช้ในการเริ่มต้นธุรกิจ

          </Typography> <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           ออมระยะยาว
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            ระยะเวลามากกว่า 10 ปี) เพื่อเป็นเงินในอนาคตหลังเกษียณ หรือเพื่อการศึกษาของลูกในอนาคต

          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            นอกจากนี้การตั้งเป้าหมายการออมยังช่วยให้คุณได้ทราบถึงยอดเงินที่ต้องแบ่งเก็บในแต่ละเดือน ว่าควรจะแบ่งเก็บในจำนวนเงินเท่าไหร่ ถึงจะทำให้คุณได้ยอดเงินตามแผนการออมที่วางเอาไว้

          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          4
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           ชีวิตไร้เป้าหมาย
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           บางครั้งคนเราก็ไม่เคยตั้งโจทย์ ว่าจะออมไปทำไม สะสมเงินไปเพื่ออะไร และต้องสะสมเท่าไหร่ อย่างไร ชีวิตที่ไม่เคยตั้งคำถาม ไม่เคยตั้งโจทย์ ทำให้เรามองไม่เห็นว่าการมีคำตอบของโจทย์เหล่านี้มีความสำคัญอย่างไร
เงินสำรองฉุกเฉิน เก็บเงินเรียนต่อ เก็บเงินแต่งงาน ซื้อบ้าน ซื้อรถ สิ่งเหล่านี้ปัจจุบันเข้าถึงได้ด้วยหนี้หรือสินเชื่อหมดแล้ว แต่การเข้าถึงเรื่องสำคัญ ๆ ในชีวิต ด้วยหนี้หรือสินเชื่อ ย่อมต่างจากเงินเก็บเงินออม หรือเงินลงทุน อย่างแน่นอน
เมื่อไม่มีเป้าหมายและไม่วางแผน พอถึงเวลาต้องใช้จ่ายกับสิ่งที่ต้องการ เราจึงต้องเข้าไปสู่วงจรหนี้ ซึ่งก็เหมือนการฉุดให้ชีวิตของเราถอยหลังหรือถอยห่างจากความมั่งคั่งออกไปอีก ดังนั้นเราจึงควรที่จะตั้งเป้าหมายที่ชัดเจนสำหรับการออมเงิน
          </Typography>
          
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          5
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           ตั้งใจทำอย่างต่อเนื่อง

          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            การออมเงินในระยะแรกหลายคนมักจะพบปัญหาของการออมไม่อยู่ ด้วยการนำเงินออมออกมาใช้ทีละนิดจนหมดไปในที่สุด เนื่องจากยังขาดวินัยในการเก็บออมที่หนักแน่น ดังนั้น จึงควรเริ่มสร้างวินัยทางการออมที่มีประสิทธิภาพก่อนด้วยการทำอย่างเคร่งครัดและทำอย่างต่อเนื่องเช่น เมื่อคุณตั้งใจจะออมเงินแต่ละเดือนจำนวน 3,000 บาทแล้ว ก็ควรทำเป็นประจำทุกเดือน เพื่อให้เกิดความเคยชินของการออมขึ้น และเหนือสิ่งอื่นใด คุณต้องหักห้ามใจการนำเงินออมออกมาใช้ถ้าไม่มีเหตุจำเป็น
นอกจากนี้ยังมีวิธีที่ช่วยให้คุณออมเงินได้ง่ายๆ นั่นคือ การเปิดบัญชีเงินฝากประจำ เพราะคุณจะไม่สามารถถอนเงินออกมาใช้ก่อนได้ อีกทั้ง ยังมีดอกเบี้ยเงินฝากที่เปรียบเสมือนรางวัลในการออมเงินอย่างมีวินัยให้อีกด้วย และคุณก็อาจตัดเงินจากบัญชีประจำวันมาออมไว้โดยอัตโนมัติในแต่ละเดือนเพื่อให้คุณขยับเข้าใกล้เป้าหมายได้ในทุกๆ เดือน

          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

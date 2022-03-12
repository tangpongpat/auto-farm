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
      เรื่องที่คนส่วนใหญ่มักจะพลาดจนทำให้ไม่มีเงินเก็บสักที คือ การพลาดในเรื่องการบริหารเงิน
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
            การใช้จ่ายเกินตัว
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
            ออมไม่เป็น
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            มีหลายคนที่ตั้งใจจะเก็บออม แต่ยังเก็บกันไม่เป็น เพราะคำสอนแบบเดิม ๆ ก็คือ เงินออม คือ เงินเหลือ พอคิดอย่างนี้ได้เรื่องเลย เพราะจ่ายจนหมดไม่เหลือ เมื่อไม่เหลือ ก็ไม่ได้ออม ที่ถูกต้อง เงินออม คือ เงินที่ถูกจัดสรรไว้สำหรับวัตถุประสงค์ต่าง ๆ ในอนาคต พอใช้คำว่า “จัดสรร” เห็นเลยว่าต้องกันไว้ แบ่งหรือแยกไว้ ไม่ให้ปะปนกับเงินใช้จ่าย ถ้าสามารถทำแบบนี้ก็จะสามารถได้ออมแน่ๆ ทุกครั้งที่มีรายได้เข้ามา โดยวิธีที่ควรทำเพื่อจะสามารถได้ออมจริงๆควรใช้ระบบตัดออมแบบอัตโนมัติ ผูกบัญชีเอาไว้เลย เงินเดือนออกก็ตัดเข้าบัญชีที่แยกไว้ต่างหากสำหรับออม อีกเรื่อง คือ การดูแคลนเงินออม ชอบหมิ่นว่าเงินน้อย รอให้เงินเยอะก่อนเดี๋ยวค่อยออม จริงๆแล้ว การออมไม่ใช่แค่เรื่องของเงิน แต่เป็นเรื่องของการพัฒนานิสัยด้วย ดังนั้นต้องเริ่มเร็ว มากน้อยไม่เกี่ยว และควรทำให้ต่อเนื่อง เดี๋ยวพอเริ่มเก็บเห็นเงินโตขึ้น นิสัยเราจะเริ่มเปลี่ยนทำให้อยากออมมากขึ้นเอง
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
            ไม่วางแผนการเงิน
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เรื่องนี้เป็นอีกเรื่องที่ถือว่าเป็นเรื่องใหญ่ “คนที่ไม่เตรียมการณ์สำหรับอนาคต มักถูกอนาคตเล่นงานเสมอ” ชีวิตคนเรานั้นหลายเรื่องที่ว่าแน่นอน เอาเข้าจริง ไม่แน่นอนเลยสักอย่าง อะไรที่คาดไว้ ไม่เป็นไปตามคาด อะไรที่ไม่ได้คาดไว้ ดันวิ่งเข้ามาในชีวิต บางคนทำงานรายได้ดี ใช้จ่ายเหมาะสม เก็บออมพอสมควร วันดีคืนร้ายเจอเรื่องไม่คาดฝัน เช่นโควิด ชีวิตเปลี่ยนเลยทันที เงินออมหาย กลายเป็นหนี้เลยก็มี ดังนั้นเราควรวางแผนไว้ตั้งแต่เนิ่นๆ เริ่มต้นง่าย ๆ ด้วยการวางแผนการเงินช่วยให้เรามองเห็นรายรับรายจ่ายที่จะเกิดขึ้น เมื่อเห็นอนาคต เราก็วางแผนเพื่อเตรียมการและจัดการได้
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
           ขาดวินัยทางการเงิน
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            ข้อนี้สำคัญที่สุดที่แม้เราจะมี4ข้อข้างต้นแล้ว แต่สิ่งที่สำคัญที่สุดที่คนเรามักจะขาดกันคือการขาดวินัยทางการเงิน หลายๆคนรู้ทุกอย่าง มีเป้าหมาย วางแผนเป็นมีแผนพร้อมแล้ว แต่สุดท้ายไม่ทำ หรือทำไม่ได้ จนทำให้เกิดปัญหาทางการเงินในที่สุด
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

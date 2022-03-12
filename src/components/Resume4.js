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
      10 แนวคิด เพื่อการออมเงินและใช้เงินอย่างมีประสิทธิภาพ
      </Typography>
      <Box component="div" className={classes.timeLine}>
        
        <Box component="div" className={classes.timeLineItem}>
          
         
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           ในยุคเศรษฐกิจตกต่ำเช่นปัจจุบัน การออมเงิน ถือเป็นเรื่องสำคัญที่ไม่ควรมองข้าม ซึ่งพวกเราทุกคนต่างก็รู้ขั้นตอนในการออมเงินกันดีอยู่แล้ว ขาดเพียงเคล็ดลับแห่งความสำเร็จในการออม ดังนั้นในบทความนี้เราจึงได้รวบรวมแนวคิดเพื่อการออมอย่างมีประสิทธิภาพมาฝาก เป็น10แนวคิดที่จะทำให้คุณมีเงินออมเพิ่มและใช้เงินอย่างมี ประสิทธิภาพ
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
            อย่าเดินตามรอยเท้าใคร โดยปราศจากการออม
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เราอาจได้แรงบันดาลใจจากบรรดามหาเศรษฐี และนักธุรกิจที่ประสบความสำเร็จหลายๆคน และเก็บมาเป็นแบบอย่างเพื่อเดินตามรอยพวกเขาเหล่านั้น อย่าลืม ว่ากว่าพวกเขาทุกคนจะมีวันนี้ พวกเขาต้องผ่านอะไรกันมาบ้างและมีความเสี่ยงอีกมากมายที่เราไม่มีโอกาสได้ทราบ แต่พื้นฐานแห่งความสำเร็จของพวกเขาเริ่มต้นมาจากการออมนั่นเอง หากคุณอยากประสบความสำเร็จเช่นพวกเขาเหล่านั้น ก็อย่าลืมเคล็ดลับความสำเร็จนี้ด้วย
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
            อย่าเสี่ยงลงทุน ถ้าไม่พร้อมเรื่องเงินออม
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            หากคุณมีความคิดที่อยากจะลงทุนทำธุรกิจอะไรสักอย่าง คุณอาจจะเริ่มต้นด้วยการกู้เงินกับสถาบันการเงินต่างๆ โดยที่เงินในบัญชีของคุณมีน้อยกว่าครึ่งหนึ่งของการลงทุนในครั้งนี้ เพราะโอกาสในการสร้างธุรกิจล้วนมีความเสี่ยงและอาจประสบปัญหาต่างๆได้สารพัด อย่างน้อยๆ คุณควรจะมีเงินออมสักก้อนหนึ่งเพื่อเก็บไว้ประคับประคองตนเองในยามฉุกเฉิน และต่อให้ได้รับผลกำไรจากธุรกิจนั้นๆแล้ว คุณก็ควรออมต่อไป เพื่ออนาคตทางการเงินที่ดีของคุณเอง
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
            วางแผนทางการเงิน และทำให้ได้
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           การออมจะประสบความสำเร็จไม่ได้เลย หากขาดซึ่งการวางแผน นักธุรกิจผู้ประสบความสำเร็จในด้านการเงินส่วนใหญ่นั้น มักมีเป้าหมายที่ชัดเจน และการออมที่มีวินัยอย่างสม่ำเสมอ หากคุณอยากมีความสำเร็จเช่นพวกเขา คุณต้องไม่ขาดวินัย และวางแผนการใช้เงินให้ดี ตั้งเป้าหมายไว้แล้วทำให้ได้ เพียงเท่านี้ การออมเงินของคุณก็จะประสบความสำเร็จได้อย่างงดงามในอนาคต
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
           ควบคุมตัวเองให้ได้
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เมื่อมีวินัยทางการเงินที่ดีแล้ว อีกข้อหนึ่งที่ควรมีก็คือ ความอดทนและการยับยั้งชั่งใจนั่นเอง คุณจะประสบความสำเร็จในการออมไม่ได้เลย ถ้าขาดการควบคุมตนเองอย่างเข้มงวดนี้ เพราะนักธุรกิจหลายๆคนที่ประสบความสำเร็จ ล้วนมีวิธีการควบคุมตนเองอย่างเข้มงวด และหักห้ามใจ ไม่ให้ใช้จ่ายอย่างพร่ำเพรื่อนั่นเอง
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
           ตั้งเป้าหมายให้ชัดเจน
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            คนเราจะประสบความสำเร็จในเรื่องใดๆไม่ได้ หากขาดซึ่งเป้าหมาย การออมก็เช่นกัน คุณควรตั้งเป้าหมายตัวเองให้ชัดเจนก่อน เช่น จะเก็บเงินให้ได้ 1 แสนบาทภายในระยะเวลา 1 ปี เป็นต้น เพราะการตั้งเป้าหมาย จะนำมาซึ่งการวางแผนสร้างวินัยที่ดีต่อไปนั่นเอง
          </Typography>
          
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          6
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           ใช้ความฝันเป็นแรงบันดาลใจ
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            ความฝันถือเป็นส่วนหนึ่งในการช่วยผลักดันเป้าหมายไปสู่ความสำเร็จ เพราะหนทางในการบรรลุเป้าหมายนั้น ค่อนข้างมีอุปสรรคและการทดสอบที่มากมาย อาจทำให้คุณท้อถอยได้ทุกเวลา แต่ถ้าหากคุณมีความฝันที่ตั้งไว้สูงๆแล้วล่ะก็ ความฝันจะคอยเป็นกำลังใจ และแรงผลักดันที่ดี หนุนส่งให้คุณก้าวสู่เป้าหมายได้อย่างรวดเร็วและราบรื่น
          </Typography>
          
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          7
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           อย่าประมาทในการใช้จ่าย
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เมื่อคุณพร้อมในทุกด้านแล้ว อีกข้อหนึ่งที่ควรระวังเป็นอย่างยิ่งก็คือ การไม่ประมาทในการใช้จ่ายนั่นเอง เพราะทันทีที่คุณเก็บเงินก้อนแรกได้สำเร็จแล้ว สิ่งแรกที่คุณอาจเผลอทำก็คือ ใช้จ่ายเงินก้อนนั้นโดยลืมนึกถึงช่วงเวลาฉุกเฉิน อย่าลืมว่าการออมนั้นคือนิสัยที่คุณควรมีติดตัวไปตลอดชีวิต ไม่ใช่ออมเพื่อเป้าหมายแล้วหยุดไป หรือใช้เงินออมให้หมดในพริบตา เพราะหากคุณประมาท คุณอาจไม่มีเงินเก็บไว้ใช้จ่ายในช่วงบั้นปลายชีวิตก็เป็นได้
          </Typography>
          
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          8
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           อย่าลืมหาวิธีเพิ่มค่าให้เงินออม
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เมื่อคุณออมเงินไปเรื่อยๆ เป็นระยะเวลาที่ยาวนาน อัตราดอกเบี้ยที่ได้ก็คงตัวอยู่ในระดับเดิม แทนที่คุณจะได้ดอกผลที่งอกเงยไปกว่านี้ อย่าลืมแบ่งเงินออมสักส่วนหนึ่งไปลงทุนตามตราสารต่างๆ เช่น หุ้นปันผล,กองทุนรวม เพราะการลงทุนต่างๆเหล่านี้ ถึงจะมีความเสี่ยงสูง แต่ก็ช่วยสร้างผลกำไรได้มากกว่าเป็นเท่าตัว
          </Typography>
          
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          9
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           หาวิธีการออมที่เหมาะกับตัวคุณเอง
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            อย่าเลียนแบบวิธีการออมของคนอื่น หากมันไม่ใช่วิธีที่เหมาะกับคุณ เพราะนั่นจะทำให้คุณไม่สนุกกับการออมเงินและไปสู่เป้าหมายได้ยากขึ้น ควรกำหนดรูปแบบการออมที่เหมาะกับตัวคุณเอง เพื่อที่คุณจะได้รู้สึกสนุก และผ่อนคลาย กับการออมในครั้งนี้
          </Typography>
          
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          10
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           การออมจะต้องมีความเสี่ยงที่ต่ำกว่าการลงทุน
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เช่น หากคุณคิดจะลงทุนกับตลาดหลักทรัพย์โดยการเล่นหุ้น คุณควรศึกษาข้อมูลให้ดีก่อนทุกครั้ง ทบทวนหาอัตราความเสี่ยง โดยคำนวณให้ต่ำกว่าจำนวนเงินที่ลงทุนลงไป เพื่อที่คุณจะได้ไม่เจ็บตัวมาก เมื่อประสบกับสภาวะล้มเลวในบางช่วงจังหวะของชีวิต
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

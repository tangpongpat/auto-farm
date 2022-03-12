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
      5เคล็ด(ไม่)ลับในการปลดหนี้
      </Typography>
      <Box component="div" className={classes.timeLine}>
        
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
            ในปัจจุบันการกู้เงินเป็นเรื่องที่ทำได้ง่ายกว่าแต่ก่อนมาก ประกอบกับการแข่งขันทางการตลาดสูงที่กระตุ้นให้อยาก ประกอบกับการแข่งขันทางการตลาดสูงที่กระตุ้นให้อยากจับจ่ายอยู่เสมอ ทำให้คนทุกวันนี้ต่างมีหนี้ติดตัวกันเป็นเรื่องธรรมดา ทั้งหนี้ระยะสั้น เช่น หนี้บัตรเครดิต หนี้บัตรกดเงินสด หรือหนี้ระยะยาว เช่น หนี้รถยนต์และหนี้บ้าน อย่างไรก็ตามถึงแม้การกู้ยืมจะช่วยให้เราบรรลุความต้องการหรือเป้าหมายมาได้ แต่เมื่อถึงเวลาที่ต้องชดใช้คืนหนี้สินดูเป็นสิ่งน่ากลัวไม่น้อย ทำอย่างไรเราจึงจะจัดการกับหนี้สินที่พอกพูนทั้งหลายของเราได้ บทความนี้ได้รวบรวม 5 เคล็ด(ไม่)ลับที่จะช่วยให้คุณสามารถปลดหนี้ที่ได้ผลจริง ด้วยวิธีการดังต่อไปนี้
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
            ยอมรับความจริง
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            หลายคนเมื่อเป็นหนี้จะรู้สึกอับอายไม่กล้ายอมรับความจริง และพยายามปกปิดไม่ให้ใครรู้ว่าตนเองมีภาระต้องรับผิดชอบมีการใช้จ่ายในชีวิตประจำวันเหมือนปกติ เช่น เพื่อนชวนไปสังสรรค์ก็ไม่กล้าปฏิเสธ หรือออกไปเที่ยวทุกเดือน ทั้งๆที่มีรายได้ไม่เพียงพอในแต่ละเดือน ซึ่งพฤติกรรมเหล่านี้ส่งผลให้มีค่าใช้จ่ายที่เพิ่มขึ้นและเป็นการเพิ่มโอกาสการเป็นหนี้ที่เพิ่มขึ้นอีกด้วย   หากต้องการปลดหนี้ตัวเองสักที เราควรเริ่มต้นจากการตระหนักว่าตัวเองมีภาระหนี้สินที่ต้องรับผิดชอบ มีรายจ่ายเพิ่มมากขึ้น และไม่อายที่จะบอกใครว่าตนมีภาระ เมื่อยอมรับความจริงเหล่านี้ได้ เราจะเห็นปัญหาและช่วยให้เราตั้งต้นจัดการกับหนี้สินต่างๆ อย่างจริงจังและหลีกเลี่ยงการก่อหนี้เพิ่มเติมได้ และหากคนรอบข้างรับรู้ เชื่อว่าหลายคนจะเข้าใจและพยายามหาลู่ทางปลดหนี้ช่วยเรา
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
            สำรวจหนี้สินทั้งหมด
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เคล็ดลับหรือวิธีปลดหนี้ตัวเองข้อสำคัญ คือการสำรวจหนี้สินทั้งหมดของตัวเองทีมีอยู่ซึ่งประโยชน์ของการสำรวจหนี้สินช่วยให้เราเห็นขนาดของภาระที่แท้จริงว่ามีขนาดใหญ่แค่ใหน และเป็นอีกหนึ่งเครื่องมือที่เตือนตัวเองว่าไม่ควรก่อหนี้เพิ่ม และทำให้เรามองเห็นปัญหาและหาทางจัดการแก้ไขต่อไป
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
           จัดลำดับการปิดหนี้สิน
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เมื่อสำรวจหนี้สินทั้งหมดของตัวเองเรียบร้อยแล้ว วิธีการปลดหนี้ลำดับต่อมา คือการจัดลำดับการปิดหนี้สิน ซึ่งเกณฑ์ในการจัดลำดับก็มี 2 วิธี อยู่ด้วยกัน ได้แก่ ปิดหนี้ที่คิดอัตราดอกเบี้ยแพงที่สุดก่อน หรือ ปิดหนี้ที่เหลือระยะเวลาผ่อนน้อยก่อน
            การปิดหนี้ที่คิดอัตราดอกเบี้ยมากที่สุดก่อนเป็นวิธีการที่หลายๆ คนทราบเป็นอย่างดี เพราะยิ่งปิดได้เร็วเท่าไรก็หมายความว่าดอกเบี้ยที่ต้องจ่ายตลอดการผ่อนลดลงไป และสำหรับการปิดหนี้ที่เหลือระยะเวลาผ่อนน้อยก็จะช่วยปิดยอดนี้นั้นไปก่อนและมีเงินเหลือสำหรับปิดหนี้ตัวอื่นได้เร็วขึ้น หรือมีเงินเหลือสำหรับเองและลงทุนสร้างความมั่นคงทางการเงินในอนาคตได้อีกด้วย
            หนี้สินที่ควรปิดก่อนส่วนมากจะเป็นหนี้สินระยะสั้น เช่น หนี้บัตรเครดิตและสินเชื่อส่วนบุคคล เพราะเป็นหนี้สินที่มีระยะเวลาผ่อนชำระไม่มาก และมีดอกเบี้ยสูง การจัดการกับหนี้เหล่านี้จะช่วยลดจำนวนเจ้าหนี้ของเราลงได้ และระงับการแบ่งบานดอกเบี้ยได้อีกด้วย นอกจากนี้หากรู้ว่ากำลังจะมีเงินก้อนใหญ่ เช่น โบนัส หรือเงินคืนภาษี ก็สามารถนำเงินจำนวนนี้ไป “โปะ” หนี้ที่ดอกเบี้ยสูงให้หมดไวๆ ได้
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
          วางแผนชำระหนี้อย่างเป็นระบบ
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เคล็ดลับข้อนี้ คือการวางแผนชำระหนี้สินอย่างเป็นระบบและรอบคอบ ซึ่งนอกจากเราจะนำเคล็ดลับปิดหนี้ที่ดอกเบี้ยสูงก่อนมาใช้แล้ว เราต้องวางแผนให้สัมพันธ์กับค่าใช้จ่ายในชีวิตประจำวันด้วยเพื่อให้เรายังสามารถใช้ชีวิตได้เป็นปกติไม่ลำบาก และมีโอกาสสร้างความมั่นคงทางการเงินแม้จะมีหนี้สิน 
            ทั้งนี้ก่อนจะวางแผนเราต้องรู้จักตัวเองให้ดีก่อน นั่นคือการทำบัญชีรายรับ - รายจ่ายส่วนตัว เพื่อให้เรารู้ว่าในแต่ละเดือนมีรายจ่ายอะไรบ้าง แบ่งเป็นรายจ่ายจำเป็นและรายจ่ายไม่จำเป็น จากนั้นเราจึงจัดสรรรายได้แบ่งมาชำระหนี้สินตามลำดับที่ควรชำระก่อนและเก็บออม 
            การวางแผนรายจ่ายที่รวมภาระหนี้สินเข้าไปด้วย จะช่วยให้เราจัดการกับหนี้ได้อย่างมีประสิทธิภาพมากขึ้นด้วยถือว่าเป็นหน้าที่ที่ต้องรับผิดชอบ ทั้งนี้จะเห็นว่ามีเงินส่วนที่จัดสรรสำหรับการออมไว้ก่อนที่จะใช้จ่าย และนำเงินไปใช้จ่ายส่วนที่จำเป็นก่อน จากนั้นจึงนำมาชำระหนี้สิน เมื่อเหลือจึงค่อยใช้จ่ายอื่นๆ ที่ไม่จำเป็น เช่น รายจ่ายเพื่อความบันเทิง เป็นต้น การวางแผนงบประมาณเช่นนี้ยังช่วยให้คุณเก็บเงินและคุมรายจ่ายได้ และลดโอกาสก่อหนี้เพิ่มได้อีกด้วย และที่สำคัญภาระหนี้ที่เหมาะสมไม่ควรเกิน 40% ของรายได้ต่อเดือน ดังนั้น ภาระหนี้ข้างต้นมีแนวโน้มที่จะผ่อนไม่ได้ตามสัญญาหรือมีแนวโน้มเป็นหนี้เพิ่มได้ ซึ่งถ้าใครกำลังเผชิญปัญหาเช่นนี้ ต้องรีบคุยไกล่เกลี่ยกับเจ้าหนี้โดยด่วน
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
          ติดต่อกับธนาคารหรือเจ้าหนี้
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เคล็ดลับข้อนี้เป็นวิธีปลดหนี้สำหรับผู้ที่มีภาระหนี้สินหนักเกินไปและการเงินขาดสภาพคล่อง สำหรับหลายๆ คนที่กำลัง “จม” หนี้สินอยู่จนไม่สามารถสะสางภาระเหล่านี้ได้ การเข้าไปขอคำปรึกษาหรือเจรจาไกล่เกลี่ยหนี้กับธนาคารหรือเจ้าหนี้คือสิ่งจำเป็น
            ธนาคารหรือเจ้าหนี้ที่ไม่ใช่ธนาคาร (Non-bank) ก็ต้องการเงินคืนอยู่แล้ว ถ้าเราเผชิญหน้ากับปัญหาไปเลย บอกเขาว่าสถานะการเงินของเรากำลังมีปัญหา ไม่สามารถผ่อนชำระได้ตามสัญญา ธนาคารก็จะช่วยเราหา
            แนวทางแก้ไข ซึ่งเราสามารถขอไกล่เกลี่ยหนี้สินได้ด้วยวิธีต่างๆ ดังนี้
            <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          ขอลดดอกเบี้ยชั่วคราว
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           เมื่อสภาพการเงินของเราเริ่มมีปัญหาหนัก ไม่สามารถผ่อนชำระหนี้สินทุกรายการได้ จนอาจต้องไปกู้เงินจากแหล่งอื่นหรือกู้เงินนอกระบบมาเพื่อชำระคืน เพราะกลัวเสียเครดิต การขอลดดอกเบี้ยชั่งคราวจะช่วยลดภาระผ่อนมากยิ่งขึ้น
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          ขอจ่ายเฉพาะดอกเบี้ยชั่วคราว
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            วิธีนี้ก็คล้ายกับการขอลดดอกเบี้ย แต่วิธีนี้จะขอผ่อนแค่ดอกเบี้ยโดยไม่ตัดเงินต้นแม้แต่น้อย วิธีนี้ทำให้ภาระผ่อนของเราลดลง ซึ่งเหมาะสำหรับคนที่ต้องการนำเงินส่วนที่เหลือไปจัดการหรือปิดหนี้ก้อนอื่นที่คิดอัตราดอกเบี้ยแพงกว่าหรือสามารถปิดได้ในไม่กี่เดือน อย่างไรก็ตาม วิธีการนี้ควรทำเพียงชั่วคราวเพราะเงินที่เสียไปก็เป็นแค่ดอกเบี้ยเท่านั้น หนี้สินไม่ได้ลดลง
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          ขอหยุดชำระหนี้
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            เมื่อเข้าตาจนจริงๆ ให้แจ้งกับธนาคารหรือเจ้าหนี้ว่าเราไม่สามารถชำระหนี้สินได้ และขอหยุดจากนั้นเราต้องกลับมาดูแลสุขภาพการเงินของตัวเองให้ดีขึ้นและต้องเตรียมเงินจำนวนหนึ่งไว้สำหรับชำระคืนเมื่อกลับมาผ่อนอีกครั้ง ทั้งนี้ วิธีการนี้ค่อนข้างทำได้ลำบากและมีเรื่องกฎหมายที่ต้องดูให้ดี เพื่อที่ให้ทั้งเราและเจ้าหนี้ไม่มีใครเสียประโยชน์

          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
          รีไฟแนนซ์ 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            วิธีการนี้เหมาะสำหรับสินเชื่อบ้าน โดยการรีไฟแนนซ์หมายถึงการเปลี่ยนธนาคารในการผ่อนชำระช่วยให้ดอกเบี้ยลดลง อีกทั้งสามารถขอเพิ่มวงเงินในการกู้ได้อีกด้วย(ขึ้นอยู่กับเงื่อนไขของแต่ละสถาบันการเงิน) และสามารถนำเงินส่วนที่เพิ่มนี้มาช่วยในการชำระหนี้ระยะที่สั้นได้เร็วขึ้น 
การจะปลดหนี้ได้สำเร็จต้องอาศัยความเพียรและวินัยอย่างยิ่ง วิธีปลดหนี้ต่างๆ ที่รวบรวมในบทความนี้ เป็นเพียงวิธีที่จะช่วยให้สามารถจัดการกับหนี้สินให้มีประสิทธิภาพและง่ายขึ้นเท่านั้น แต่สิ่งที่สำคัญไปมากกว่านั้น คือการวางแผนการเงิน ให้ดีตั้งแต่แรกรวมถึงการสร้างนิสัยที่จะป้องกันการเป็นหนี้ซ้ำซ้อน
          </Typography>
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

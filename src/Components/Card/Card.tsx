import { Avatar, Box, Typography } from "@mui/material";
import styles from "./styles.module.css";

interface ICardProps {
  name?: string;
  comment?: string;
  avatarImage?: any;
}

const Card = ({ name, comment, avatarImage }: ICardProps) => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["user-info"]}>
        <Avatar className={styles["avatar"]} src={avatarImage} />
        <Typography className={styles["name"]}>
          {name} <span className={styles["title"]}>Verified Buyer</span>
        </Typography>
      </Box>
      <Typography className={styles["comment"]}>" {comment} "</Typography>
    </Box>
  );
};

export default Card;

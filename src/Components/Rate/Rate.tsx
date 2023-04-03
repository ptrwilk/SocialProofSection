import { Box, List, ListItem, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { ReactComponent as IconStar } from "../../assets/icon-star.svg";

interface IRateProps {
  name?: string;
}

const Rate = ({ name }: IRateProps) => {
  return (
    <Box className={styles["container"]}>
      <List className={styles["stars"]}>
        {[1, 2, 3, 4, 5].map((_, key) => (
          <ListItem key={key}>
            <IconStar />
          </ListItem>
        ))}
      </List>
      <Typography className={styles["name"]}>
        Rated 5 Stars in {name}
      </Typography>
    </Box>
  );
};

export default Rate;

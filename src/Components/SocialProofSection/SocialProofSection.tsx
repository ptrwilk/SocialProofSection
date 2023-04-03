import { Box, List, ListItem, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import ImageColton from "../../assets/image-colton.jpg";
import ImageIrene from "../../assets/image-irene.jpg";
import ImageAnne from "../../assets/image-anne.jpg";
import buyers from "../../Data/buyers.json";
import rates from "../../Data/rates.json";
import overview from "../../Data/overview.json";
import Rate from "../Rate/Rate";

const imageMap: { [key: string]: any } = {
  "image-colton": ImageColton,
  "image-irene": ImageIrene,
  "image-anne": ImageAnne,
};

const SocialProofSection = () => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["overview-rates"]}>
        <Box className={styles["overview"]}>
          <Typography className={styles["title"]} variant="h1">
            {overview.title}
          </Typography>
          <Typography className={styles["text"]} variant="h2">
            {overview.text}
          </Typography>
        </Box>
        <List className={styles["rates"]}>
          {rates.map((rate, key) => (
            <ListItem key={key} className={styles["rate"]}>
              <Rate {...rate} />
            </ListItem>
          ))}
        </List>
      </Box>
      <List className={styles["cards"]}>
        {buyers.map((buyer, key) => (
          <ListItem className={styles["card"]} key={key}>
            <Card {...buyer} avatarImage={imageMap[buyer.image]} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SocialProofSection;

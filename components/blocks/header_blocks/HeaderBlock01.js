import Image from "next/image";

import styles from "../../../styles/header_block_styles/HeaderBlock.module.css";

import Header from "../../elements/Header";
import Button from "../../elements/Button";

export default function HeaderBlock01(props) {
  const { data, setCurrentElement } = props;

  const imageData = () => {
    let key;
    let type;
    let url;

    for (let i = 0; i < data.length; i++) {
      if (data[i].type === "IMAGE") {
        key = data[i].key;
        type = data[i].type;
        url = data[i].imageUrl;
        break;
      }
    }

    return {
      key: key,
      type: type,
      url: url,
    };
  };

  return (
    <div className={styles.blockContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContentContainer}>
          {data !== null
            ? data.map((item) => {
                switch (item.type) {
                  case "HEADER":
                    return (
                      <div
                        ket={item.key}
                        onClick={() =>
                          setCurrentElement({
                            key: item.key,
                            type: item.type,
                          })
                        }
                      >
                        <Header
                          className={styles.headerElement}
                          style={item.style}
                          content={item.headerContent}
                        />
                      </div>
                    );
                  case "SUBHEADER":
                    return (
                      <div
                        key={item.key}
                        onClick={() =>
                          setCurrentElement({
                            key: item.key,
                            type: item.type,
                          })
                        }
                      >
                        <h3
                          className={styles.subheaderElement}
                          style={item.style}
                        >
                          {item.subheaderContent}
                        </h3>
                      </div>
                    );
                  case "BUTTON":
                    return (
                      <div
                        key={item.key}
                        onClick={() =>
                          setCurrentElement({
                            key: item.key,
                            type: item.type,
                          })
                        }
                      >
                        <Button
                          className={styles.buttonElement}
                          style={item.style}
                          buttonName={item.buttonName}
                          buttonUrl={item.buttonUrl}
                        />
                      </div>
                    );
                }
              })
            : null}
        </div>
      </div>
      <div
        className={styles.imageContainer}
        onClick={() =>
          setCurrentElement({
            key: imageData().key,
            type: imageData().type,
          })
        }
      >
        <Image
          className={styles.imageElement}
          layout="fill"
          objectFit="cover"
          alt=""
          src={imageData().url}
        />
      </div>
    </div>
  );
}

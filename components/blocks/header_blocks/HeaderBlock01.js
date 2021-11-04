import Image from "next/image";

import styles from "../../../styles/header_block_styles/HeaderBlock.module.css";

import Header from "../../elements/Header";

export default function HeaderBlock01(props) {
  const { data, setCurrentElement, header } = props;

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
                          content={header.headerContent}
                        />
                      </div>
                    );
                  case "SUBHEADER":
                    return (
                      <div
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
                        onClick={() =>
                          setCurrentElement({
                            key: item.key,
                            type: item.type,
                          })
                        }
                      >
                        <button
                          className={styles.buttonElement}
                          style={item.style}
                          onClick={() => alert(item.buttonUrl)}
                        >
                          {item.buttonName}
                        </button>
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
export default function SideBar(props) {
  const {
    sidebarElements: elements,
    currentElement,
    setCurrentElement,
    header,
    setHeader,
    button,
    setButton,
    image,
    setImage,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        heigth: 300,
        backgroundColor: "#D5D5D5",
        margin: 20,
      }}
    >
      {elements !== null
        ? elements.map((elementItem) => {
            switch (elementItem.type) {
              case "HEADER":
                return (
                  <>
                    <label>header text</label>
                    <input
                      key={elementItem.key}
                      value={
                        Object.values(header).length > 0
                          ? header.headerContent
                          : ""
                      }
                      onClick={() => {
                        setCurrentElement({
                          key: elementItem.key,
                          type: elementItem.type,
                        });
                      }}
                      onChange={(e) => {
                        if (elementItem.key === currentElement.key) {
                          const headerData = {
                            key: elementItem.key,
                            type: elementItem.type,
                            origin: elementItem.origin,
                            originType: elementItem.originType,
                            headerContent: e.target.value,
                            style: header.style,
                          };
                          setHeader(headerData);
                        }
                      }}
                    />
                    <label>header text color</label>
                    <input
                      key={elementItem.key}
                      value={
                        Object.values(header).length > 0
                          ? header.style.color
                          : ""
                      }
                      onClick={() => {
                        setCurrentElement({
                          key: elementItem.key,
                          type: elementItem.type,
                        });
                      }}
                      onChange={(e) => {
                        if (elementItem.key === currentElement.key) {
                          const headerData = {
                            key: elementItem.key,
                            type: elementItem.type,
                            origin: elementItem.origin,
                            originType: elementItem.originType,
                            headerContent: header.headerContent,
                            style: {
                              color: e.target.value,
                            },
                          };
                          setHeader(headerData);
                        }
                      }}
                    />
                  </>
                );
              case "SUBHEADER":
                return (
                  <>
                    <label>subheader text</label>
                    <textarea
                      key={elementItem.key}
                      value={elementItem.subheaderContent}
                      rows="10"
                      cols="30"
                    />
                  </>
                );
              case "BUTTON":
                return (
                  <>
                    <label>button name</label>
                    <input
                      key={elementItem.key}
                      value={
                        Object.values(button).length > 0
                          ? button.buttonName
                          : ""
                      }
                      onClick={() => {
                        setCurrentElement({
                          key: elementItem.key,
                          type: elementItem.type,
                        });
                      }}
                      onChange={(e) => {
                        if (elementItem.key === currentElement.key) {
                          const buttonData = {
                            key: elementItem.key,
                            type: elementItem.type,
                            origin: elementItem.origin,
                            originType: elementItem.originType,
                            buttonName: e.target.value,
                            buttonUrl: button.buttonUrl,
                            style: button.style,
                          };
                          setButton(buttonData);
                        }
                      }}
                    />
                    <label>button url</label>
                    <input
                      key={elementItem.key}
                      value={
                        Object.values(button).length > 0 ? button.buttonUrl : ""
                      }
                      onClick={() => {
                        setCurrentElement({
                          key: elementItem.key,
                          type: elementItem.type,
                        });
                      }}
                      onChange={(e) => {
                        if (elementItem.key === currentElement.key) {
                          const buttonData = {
                            key: elementItem.key,
                            type: elementItem.type,
                            origin: elementItem.origin,
                            originType: elementItem.originType,
                            buttonName: button.buttonName,
                            buttonUrl: e.target.value,
                            style: button.style,
                          };
                          setButton(buttonData);
                        }
                      }}
                    />
                    <label>button background color</label>
                    <input
                      key={elementItem.key}
                      value={
                        Object.values(button).length > 0
                          ? button.style.backgroundColor
                          : ""
                      }
                      onClick={() => {
                        setCurrentElement({
                          key: elementItem.key,
                          type: elementItem.type,
                        });
                      }}
                      onChange={(e) => {
                        if (elementItem.key === currentElement.key) {
                          const buttonData = {
                            key: elementItem.key,
                            type: elementItem.type,
                            origin: elementItem.origin,
                            originType: elementItem.originType,
                            buttonName: button.buttonName,
                            buttonUrl: button.buttonUrl,
                            style: {
                              backgroundColor: e.target.value,
                            },
                          };
                          setButton(buttonData);
                        }
                      }}
                    />
                  </>
                );
              case "IMAGE":
                return (
                  <>
                    <label>image url</label>
                    <input
                      key={elementItem.key}
                      value={
                        Object.values(image).length > 0 ? image.imageUrl : ""
                      }
                      onClick={() => {
                        setCurrentElement({
                          key: elementItem.key,
                          type: elementItem.type,
                        });
                      }}
                      onChange={(e) => {
                        if (elementItem.key === currentElement.key) {
                          const imageData = {
                            key: elementItem.key,
                            type: elementItem.type,
                            origin: elementItem.origin,
                            originType: elementItem.originType,
                            imageUrl: e.target.value,
                          };
                          setImage(imageData);
                        }
                      }}
                    />
                  </>
                );
            }
          })
        : null}
    </div>
  );
}

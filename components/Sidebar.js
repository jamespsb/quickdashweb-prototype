export default function SideBar(props) {
  const {
    sidebarElements: elements,
    currentElement,
    setCurrentElement,
    header,
    setHeader,
    button,
    setButton,
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
                      value={header.headerContent}
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
                            style: elementItem.style,
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
                      value={button.buttonName}
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
                            buttonUrl: elementItem.buttonUrl,
                          };
                          setButton(buttonData);
                        }
                      }}
                    />
                    <label>button url</label>
                    <input
                      key={elementItem.key}
                      value={elementItem.buttonUrl}
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
                            buttonName: elementItem.buttonName,
                            buttonUrl: e.target.value,
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
                    <input key={elementItem.key} value={elementItem.imageUrl} />
                  </>
                );
            }
          })
        : null}
    </div>
  );
}

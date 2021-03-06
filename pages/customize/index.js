import { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import HeaderBlock01 from "../../components/blocks/header_blocks/HeaderBlock01";

const headerBlock01Data = [
  {
    key: "image01",
    type: "IMAGE",
    imageUrl:
      "https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  },
  {
    key: "header01",
    type: "HEADER",
    headerContent: "welcome to APPLE",
    style: {
      color: "#2F2727",
    },
  },
  // {
  //   key: "subHeader01",
  //   type: "SUBHEADER",
  //   subheaderContent:
  //     "ullamco nisi aute elit occaecat laboris anim mollit nostrud aute ex laborum eu. Aliquip voluptate nisi dolore ad ipsum veniam dolor.",
  //   style: {
  //     color: "#2F2727",
  //   },
  // },
  {
    key: "button01",
    type: "BUTTON",
    buttonName: "buy me",
    buttonUrl: "https://www.google.com",
    style: {
      backgroundColor: "#CACACA",
    },
  },
];
const headerBlock02Data = [
  {
    key: "image01",
    type: "IMAGE",
    imageUrl:
      "https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  },
  {
    key: "header01",
    type: "HEADER",
    headerContent: "welcome to APPLE 2",
    style: {
      color: "#2F2727",
    },
  },
  // {
  //   key: "subHeader01",
  //   type: "SUBHEADER",
  //   subheaderContent:
  //     "ullamco nisi aute elit occaecat laboris anim mollit nostrud aute ex laborum eu. Aliquip voluptate nisi dolore ad ipsum veniam dolor.",
  //   style: {
  //     color: "#2F2727",
  //   },
  // },
  {
    key: "button01",
    type: "BUTTON",
    buttonName: "buy me 2",
    buttonUrl: "https://www.google.com",
    style: {
      backgroundColor: "#CACACA",
    },
  },
];

const fetchedBlocks = [
  {
    key: "headerBlock01",
    type: "HEADER_BLOCK",
    data: headerBlock01Data,
  },
  {
    key: "headerBlock02",
    type: "HEADER_BLOCK",
    data: headerBlock02Data,
  },
];

export default function Home() {
  const [blocks, setBlocks] = useState([]);
  const [sidebarElements, setSidebarElements] = useState([]);
  const [currentBlock, setCurrentBlock] = useState({});
  const [currentElement, setCurrentElement] = useState({});

  // header state
  const [header, setHeader] = useState({});

  // image state
  const [image, setImage] = useState({});

  // button state
  const [button, setButton] = useState({});

  // setting blocks from fetched data
  useEffect(() => {
    setBlocks(fetchedBlocks);
  }, []);

  // setting sidebar elements when changing current block
  useEffect(() => {
    blocks.map((blockItem) => {
      if (blockItem.key === currentBlock.key) {
        setSidebarElements(blockItem.data);
      }
    });
  }, [blocks, currentBlock]);

  // setting state for each element
  useEffect(() => {
    sidebarElements.map((elementItem) => {
      switch (elementItem.type) {
        case "HEADER":
          setHeader(elementItem);
          break;
        case "IMAGE":
          setImage(elementItem);
          break;
        case "BUTTON":
          setButton(elementItem);
          break;
      }
    });
  }, [sidebarElements]);

  // reflecting changes from individual elements to updated blocks
  useEffect(() => {
    const focusedElement = () => {
      switch (currentElement.type) {
        case "HEADER":
          return header;
        case "BUTTON":
          return button;
        case "IMAGE":
          return image;
      }
    };

    // get block index
    const blockIndex = blocks.findIndex((x) => x.key === currentBlock.key);

    // get element index
    const elementIndex = blocks[blockIndex]
      ? blocks[blockIndex].data.findIndex((x) => x.key === currentElement.key)
      : null;

    // clone the blocks array
    const blocksClone = [...blocks];

    // return the data (elements) of the cloned array
    const dataClone = blocksClone[blockIndex]
      ? blocksClone[blockIndex].data
      : [];

    // replace the old data/object of the element with the updated version
    dataClone[elementIndex] = focusedElement();

    // delete the replaced index
    delete dataClone[-1];

    // create new block to replace the old block
    // TODO: test with multiple blocks
    const newBlock = {
      key: currentBlock.key,
      type: currentBlock.type,
      data: dataClone,
    };

    blocksClone[blockIndex] = newBlock;
    delete blocksClone[-1];

    // set new block, added this condition to prevent the infinite loop
    if (blockIndex !== -1 && blocksClone[blockIndex].key !== undefined) {
      setBlocks((state) => [...state, blocksClone]);
    }
  }, [header, button, image]);

  const sidebarProps = {
    sidebarElements,
    currentElement,
    setCurrentElement,
    header,
    setHeader,
    button,
    setButton,
    image,
    setImage,
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#FFFFFF",
      }}
    >
      {Object.values(currentBlock).length > 0 ? (
        <Sidebar {...sidebarProps} />
      ) : null}
      {blocks !== null
        ? blocks.map((blockItem) => {
            switch (blockItem.type) {
              case "HEADER_BLOCK":
                const element = blockItem.data;

                return (
                  <div
                    style={{ width: "100%" }}
                    onClick={() =>
                      setCurrentBlock({
                        key: blockItem.key,
                        type: blockItem.type,
                      })
                    }
                  >
                    <HeaderBlock01
                      key={element.key}
                      header={header}
                      data={element}
                      setCurrentElement={setCurrentElement}
                    />
                  </div>
                );
            }
          })
        : null}
    </div>
  );
}

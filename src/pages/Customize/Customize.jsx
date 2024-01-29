import React, { useEffect, useState } from "react";
import "./Customize.css";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useShoppingCart } from "../../Context/ShoopingCartContext";
import { getOneClothes } from "../../services/clothes";
import { useNavigate } from "react-router-dom";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" color="inherit" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="" component="div">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function Customize() {
  const { id, encodedImageUrl } = useParams();
  const [selectedItem, setSelectedItem] = useState();
  const [image, setImage] = useState("");
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedLapel, setSelectedLapel] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [customize, setCustomize] = useState("");
  const [colorButton, setColorButton] = useState(false);
  const { addToCart } = useShoppingCart();
  const navigate = useNavigate();

  const startProgress = () => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(timer);
          setFinishedLoading(true);
          return 100;
        }
        return newProgress;
      });
    }, 800);
  };

  async function getOneItem(clotheId) {
    const item = await getOneClothes(clotheId);
    setSelectedItem(item);
  }

  useEffect(() => {
    const numericId = parseInt(id, 10);
    getOneItem(numericId);

    // Si el artículo se encuentra, usa su primera imagen, si no, usa la URL de la imagen codificada
    setImage(
      selectedItem ? selectedItem.image1 : decodeURIComponent(encodedImageUrl)
    );
    console.log("ID:", id, "Encoded Image URL:", encodedImageUrl);
  }, [id, encodedImageUrl]);

  const handleClickImage = (newImage) => {
    setImage(newImage);
  };
  const handleCustomize = () => {
    setLoading(true);
    startProgress();
    setCustomize(
      "https://static.zara.net/photos///2024/V/0/1/p/2094/745/800/2/w/850/2094745800_2_1_1.jpg?ts=1701278486022"
    );
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      image: customize || selectedItem.image1,
    };
    addToCart(productToAdd);
  };

  const changeSelectedLength = (id) => {
    setSelectedLength(selectedLength === id ? null : id);
  };

  const changeSelectedColor = (id) => {
    setSelectedColor(selectedColor === id ? null : id);
  };

  const changeSelectedLapel = (id) => {
    setSelectedLapel(selectedLapel === id ? null : id);
  };

  const changeSelectedButton = (id) => {
    setSelectedButton(selectedButton === id ? null : id);
  };

  const changeSelectedShape = (id) => {
    setSelectedShape(selectedShape === id ? null : id);
  };

  const changeColorButton = (id) => {
    setColorButton(colorButton === id ? null : id);
  };

  const handleContinueShopping = () => {
    navigate("/couture");
  };

  return (
    <>
      <div className="body-customize">
        <div className="elements">
          <div className="composition">
            <h5>{selectedItem?.title}</h5>
            <h5>{selectedItem?.titleComposition}</h5>
            <p className="text-composition">{selectedItem?.composition}</p>
          </div>
          <div className="main-image-container">
            {loading && !finishedLoading ? (
              <CircularProgressWithLabel value={progress} />
            ) : finishedLoading && customize ? (
              <img className="main-image" src={customize} />
            ) : (
              <img className="main-image" src={image} />
            )}
          </div>
          <div className="customize">
            <h4>{selectedItem?.name}</h4>
            <div className="price">{selectedItem?.price}</div>
            <hr className="customize-line" />
            <h5>LENGHTS</h5>
            <div className="lengths">
              <div
                className={`length-1 
                  ${selectedLength === "length1" ? "select-custom" : ""}`}
                onClick={() => {
                  changeSelectedLength("length1");
                  handleClickImage(
                    "https://static.zara.net/photos///2024/V/0/1/p/2146/745/800/2/w/850/2146745800_6_1_1.jpg?ts=1703060648425"
                  );
                }}
                src="https://static.zara.net/photos///2024/V/0/1/p/2146/745/800/2/w/850/2146745800_6_1_1.jpg?ts=1703060648425"
              />

              <div
                className={`length-2 ${
                  selectedLength === "length2" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedLength("length2");
                  handleClickImage(
                    "https://static.zara.net/photos///2024/V/0/1/p/2110/775/800/2/w/850/2110775800_6_1_1.jpg?ts=1701418623170"
                  );
                }}
                src="https://static.zara.net/photos///2024/V/0/1/p/2110/775/800/2/w/850/2110775800_6_1_1.jpg?ts=1701418623170"
              />

              <div
                className={`length-3 ${
                  selectedLength === "length3" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedLength("length3");
                  handleClickImage(
                    "https://static.zara.net/photos///2023/I/0/1/p/7649/187/800/2/w/850/7649187800_6_1_1.jpg?ts=1693931380345"
                  );
                }}
                src="https://static.zara.net/photos///2023/I/0/1/p/7649/187/800/2/w/850/7649187800_6_1_1.jpg?ts=1693931380345"
              />
            </div>

            <div className="small-size">
              <button
                className={`button-small-size ${
                  colorButton === "xs" ? "button-click" : ""
                }`}
                onClick={() => changeColorButton("xs")}
              >
                XS
              </button>{" "}
              <button
                className={`button-small-size ${
                  colorButton === "s" ? "button-click" : ""
                }`}
                onClick={() => changeColorButton("s")}
              >
                S
              </button>
            </div>
            <div className="large-size">
              <button
                className={`button-large-size ${
                  colorButton === "m" ? "button-click" : ""
                }`}
                onClick={() => changeColorButton("m")}
              >
                M
              </button>{" "}
              <button
                className={`button-large-size ${
                  colorButton === "l" ? "button-click" : ""
                }`}
                onClick={() => changeColorButton("l")}
              >
                L
              </button>
            </div>
            <h5>COLOR</h5>
            <div className="colours">
              <div
                className={`color-1 ${
                  selectedColor === "color1" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedColor("color1");
                  handleClickImage(
                    "https://static.zara.net/photos///2024/V/0/1/p/2052/142/802/2/w/850/2052142802_6_1_1.jpg?ts=1700651707403"
                  );
                }}
              ></div>
              <div
                className={`color-2 ${
                  selectedColor === "color2" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedColor("color2");
                  handleClickImage(
                    "https://static.zara.net/photos///2024/V/0/1/p/2052/102/711/2/w/850/2052102711_6_1_1.jpg?ts=1703172088307"
                  );
                }}
              ></div>
              <div
                className={`color-3 ${
                  selectedColor === "color3" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedColor("color3");

                  handleClickImage(
                    "https://static.zara.net/photos///2023/I/0/1/p/8863/745/800/2/w/850/8863745800_6_1_1.jpg?ts=1697702569369"
                  );
                }}
              ></div>
              <div
                className={`color-4 ${
                  selectedColor === "color4" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedColor("color4");

                  handleClickImage(
                    "https://static.zara.net/photos///2023/I/0/1/p/8606/744/507/2/w/850/8606744507_6_1_1.jpg?ts=1697784775518"
                  );
                }}
              ></div>
            </div>
            <h5>LAPEL</h5>
            <div className="lapels">
              <div
                className={`lapel-1 ${
                  selectedLapel === "lapel1" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedLapel("lapel1");
                  handleClickImage(
                    "https://static.zara.net/photos///2024/V/0/1/p/2094/745/800/2/w/850/2094745800_2_1_1.jpg?ts=1701278486022"
                  );
                }}
              ></div>
              <div
                className={`lapel-2 ${
                  selectedLapel === "lapel2" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedLapel("lapel2");
                  handleClickImage(
                    "https://static.zara.net/photos///2024/V/0/1/p/2094/886/806/23/w/850/2094886806_2_9_1.jpg?ts=1702644316625"
                  );
                }}
              ></div>
            </div>
            <h5>BUTTON</h5>
            <div className="buttons">
              <div
                className={`button-1 ${
                  selectedButton === "button1" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedButton("button1");
                  handleClickImage(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460027/ZARA/Screenshot_2024-01-05_at_13.01.45_hp94a5.png"
                  );
                }}
              ></div>
              <div
                className={`button-2 ${
                  selectedButton === "button2" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedButton("button2");
                  handleClickImage(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460026/ZARA/Screenshot_2024-01-05_at_13.02.50_ayxf4c.png"
                  );
                }}
              ></div>
              <div
                className={`button-3 ${
                  selectedButton === "button3" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedButton("button3");
                  handleClickImage(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460025/ZARA/Screenshot_2024-01-05_at_13.05.36_kshhst.png"
                  );
                }}
              ></div>
              <div
                className={`button-4 ${
                  selectedButton === "button4" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedButton("button4");
                  handleClickImage(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704970305/ZARA/PHOTO-2024-01-09-20-11-26_2_uzpd14.jpg"
                  );
                }}
              ></div>
            </div>
            <h5>SHAPE</h5>
            <div className="shapes">
              <div
                className={`shape-1 ${
                  selectedShape === "shape1" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedShape("shape1");
                  handleClickImage(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460689/ZARA/2753341800_6_3_1_fzo3cq.jpg"
                  );
                }}
              ></div>
              <div
                className={`shape-2 ${
                  selectedShape === "shape2" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedShape("shape2");
                  handleClickImage(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460782/ZARA/2753340800_2_2_1_b8bbzz.jpg"
                  );
                }}
              ></div>
              <div
                className={`shape-3 ${
                  selectedShape === "shape3" ? "select-custom" : ""
                }`}
                onClick={() => {
                  changeSelectedShape("shape3");
                  handleClickImage(
                    "https://res.cloudinary.com/dfwcnoezy/image/upload/v1704460885/ZARA/Screenshot_2024-01-05_at_13.20.01_iqucnh.png"
                  );
                }}
              ></div>
            </div>
            <div className="button-container">
              <button
                className={`button-shopping ${
                  colorButton === "shopping" ? "button-click" : ""
                }`}
                onClick={() => {
                  handleContinueShopping();
                  changeColorButton("shopping");
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
            <div className="button-container">
              <button
                className={`button-customize ${
                  colorButton === "customize" ? "button-click" : ""
                }`}
                onClick={() => {
                  handleCustomize();
                  changeColorButton("customize");
                  handleCustomize();
                }}
              >
                CUSTOMIZE
              </button>
            </div>

            <div className="button-container">
              <button
                className={`button-add ${
                  colorButton === "add" ? "button-click" : ""
                }`}
                onClick={() => {
                  handleAddToCart();
                  changeColorButton("add");
                }}
              >
                {" "}
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customize;

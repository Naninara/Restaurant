import { IconButton, Modal } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ResponseModel.css";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import CloseIcon from "@mui/icons-material/Close";
function ResponseModel({
  open,
  EmojiCode,
  ModelText,
  navigateLink,
  ButtonText,
  setOpen,
}) {
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className="model-container">
        <div className="box-model">
          <div className="emoji">
            <span>
              {EmojiCode === "success" ? (
                <EmojiEmotionsIcon />
              ) : (
                <SentimentVeryDissatisfiedIcon />
              )}
            </span>
          </div>
          <h4>{ModelText}</h4>
          <Link to={navigateLink}>
            <button className="btn">{ButtonText}</button>
          </Link>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </Modal>
  );
}

export default ResponseModel;

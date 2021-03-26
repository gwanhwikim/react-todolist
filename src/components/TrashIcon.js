import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TrashIcon = ({ className, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faTrashAlt}
      className={className}
      onClick={onClick}
      size="1x"
    />
  );
};

export default TrashIcon;

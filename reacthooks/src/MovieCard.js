import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div style={styles.card}>
      <img src={posterURL} alt={title} style={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "250px",
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
};

export default MovieCard;

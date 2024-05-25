"use client";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Chip,
} from "@mui/material";
import { Rating } from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import { styled } from "@mui/material/styles";

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    color: "black",
  },
}));

const traits = [
  "Adventurous",
  "Clean",
  "Good listener",
  "Honest",
  "Humorous",
  "Inspiring",
  "Kind",
  "Knowledgable",
  "Non-judgemental",
  "Spontaneous",
  "Talkative",
  "Thoughtful",
  "Trustworthy",
];

const ReviewForm = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommendation, setRecommendation] = useState("");
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSafetyRatingChange = (event, newValue) => {
    setSafetyRating(newValue);
  };

  const handleCommunicationRatingChange = (event, newValue) => {
    setCommunicationRating(newValue);
  };

  const handleRecommendationChange = (event) => {
    setRecommendation(event.target.value);
  };

  const handleTraitToggle = (trait) => {
    setSelectedTraits((prevTraits) =>
      prevTraits.includes(trait)
        ? prevTraits.filter((t) => t !== trait)
        : [...prevTraits, trait]
    );
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Safety Rating: ${safetyRating}, Communication Rating: ${communicationRating}, Recommendation: ${recommendation}, Praise: ${selectedTraits.join(
        ", "
      )}, Review: ${review}`
    );
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "white",
        fontFamily: "Roboto",
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", color: "black" }}
      >
        Leave a Review
      </Typography>
      {submitted ? (
        <Typography
          variant="h6"
          component="p"
          sx={{ color: "green", fontFamily: "Roboto" }}
        >
          Thank you for your review!
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 2,
              color: "black",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Safety
            <span style={{ fontWeight: "normal" }}>
              How safe did you feel with Ayuvya Ayurveda?
            </span>
          </Typography>
          <Rating
            name="safety-rating"
            value={safetyRating}
            onChange={handleSafetyRatingChange}
            size="large"
          />
          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 2,
              color: "black",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Communication
            <span style={{ fontWeight: "normal" }}>
              How easy was it to communicate with Ayuvya Ayurveda?
            </span>
          </Typography>
          <Rating
            name="communication-rating"
            value={communicationRating}
            onChange={handleCommunicationRatingChange}
            size="large"
          />
          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 2,
              color: "black",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Would you recommend Ayuvya Ayurveda?
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 1 }}>
            <RadioGroup
              row
              aria-label="recommendation"
              name="recommendation"
              value={recommendation}
              onChange={handleRecommendationChange}
            >
              <StyledFormControlLabel
                value="yes"
                control={
                  <Radio
                    icon={<ThumbUp />}
                    checkedIcon={<ThumbUp sx={{ color: "green" }} />}
                  />
                }
                label="Yes"
              />
              <StyledFormControlLabel
                value="no"
                control={
                  <Radio
                    icon={<ThumbDown />}
                    checkedIcon={<ThumbDown sx={{ color: "red" }} />}
                  />
                }
                label="No"
              />
            </RadioGroup>
          </FormControl>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 2,
              color: "black",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Praise
            <span style={{ fontWeight: "normal" }}>
              What traits best describe Ayuvya Ayurveda?
            </span>
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {traits.map((trait) => (
              <Chip
                key={trait}
                label={trait}
                onClick={() => handleTraitToggle(trait)}
                color={selectedTraits.includes(trait) ? "primary" : "default"}
                sx={{ cursor: "pointer" }}
              />
            ))}
          </Box>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 2,
              color: "black",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Care to share more?
            <span style={{ fontWeight: "normal" }}>
              How was your overall experience? What's that one thing you won't
              forget Ayuvya Ayurveda for?
            </span>
          </Typography>
          <TextField
            label="Your Review"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            margin="normal"
            value={review}
            onChange={handleReviewChange}
            sx={{ fontFamily: "Roboto" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, fontFamily: "Roboto" }}
          >
            Publish Review
          </Button>
        </form>
      )}
    </Box>
  );
};

export default ReviewForm;
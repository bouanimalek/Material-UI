import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3" component="h1" gutterBottom>
        h3 Heading
      </Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
        praesentium laboriosam quidem quam quis nam nostrum quos minus tenetur
        tempore aut iure aliquid est ea. Nam, rem. Cumque, perferendis magni?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        fuga accusamus quasi dolorum officia vitae, possimus porro odio, aut
        quos inventore voluptate esse nemo temporibus repellendus ullam quas,
        dignissimos placeat.
      </Typography>
    </div>
  );
};

import React from "react";
import { useParams } from "react-router-dom";
import AiCard from "./AiCard";
import { Box, Button, Grid } from "@mui/material";
import { logout } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

const AiListing = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  let ailist = [
    {
      name: "ChatGPT",
      description:
        "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chatgpt.com(opens in a new window).",
      link: "https://openai.com/chatgpt/",
    },
    {
      name: "Meta Ai",
      description:
        "Meta AI brings the power of AI to your WhatsApp group chats! This feature allows you to ask questions and get information without ever leaving the conversation. Here's how to get started: Open the specific group chat where you'd like to use Meta AI.",
      link: "https://www.meta.ai/",
    },
    {
      name: "Black Box Ai",
      description:
        "It refers to an AI system whose internal workings or decision-making processes are opaque or not easily understandable to humans. In other words, when you put data into the black box AI system and get outputs in return, you don't really know how the AI arrived at the conclusions or decisions that it presents to you.",
      link: "https://www.blackbox.ai/",
    },
  ];

  if (id === "content") {
    ailist = [
      {
        name: "Write For Me",
        description:
          " WriteMe is your #1 AI-powered content writing assistant to write high-quality content in a few clicks at only a fraction of the cost! ",
        link: "https://writeme.ai/",
      },
      {
        name: "image generator",
        description:
          "It's free to test out the AI Image generator and it makes creating your own images super easy. Just write a description of the image you'd like to generate and watch the text to image transformation happen in seconds.",
        link: "https://pixlr.com/image-generator/",
      },
      {
        name: "PPT Generator",
        description:
          "Meet your AI-powered design partner🤩Access best-in-class AI for text, images, and search 🎨Apply eye-catching, expert-level designs and layouts 🪄Quickly rewrite or autocomplete your content",
        link: "https://gamma.app/",
      },
    ];
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ position: "relative", minHeight: "95vh", padding: 2 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ position: "absolute", top: 16, right: 16 }}
      >
        Logout
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh", // Center content vertically
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {ailist?.map((ai, index) => (
            <Grid item key={index}>
              <AiCard aiData={ai} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

    // <Box
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     minHeight: '90vh', // Ensures the container covers the full height of the viewport
    //   }}
    // >
    //   <Grid container spacing={3} justifyContent="center">
    //     {ailist?.map((ai, index) => (
    //       <Grid item key={index}>
    //         <AiCard aiData={ai} />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
  );
};

export default AiListing;

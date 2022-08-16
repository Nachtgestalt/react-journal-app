import React from 'react';
import JournalLayout from "../layout/JournalLayout";
import NothingSelectedView from "../view/NothingSelectedView";
import NoteView from "../view/NoteView";
import {ImageGallery} from "../components/ImageGallery";
import {IconButton} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";

const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
      {/*<NoteView/>*/}
      {/*<ImageGallery/>*/}

      <IconButton
      size={'large'}
      sx={{color: 'white',
      backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50,
      }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;

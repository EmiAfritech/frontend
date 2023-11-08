import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEye} from "react-icons/fa";
import { useState } from 'react';


export function UserData(params){
   const [open, setOpen] = useState(false);
   const close = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  function handleOpen() {
    setOpen(!open);
  }

  
  return(
    <>
      <button onClick={handleOpen} className="px-2">
            <FaEye className="icons" />
      </button>
      <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Hello
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {params.row.id}
                    </Typography>
                    
                    <Button onClick={close}>Close</Button>
                </Box>
            </Modal>
    </>

  )
}


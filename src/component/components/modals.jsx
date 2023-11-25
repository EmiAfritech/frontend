import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaEye } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { DEPARTMENTDROPDOWN_URL, OWNERSDROPDOWN_URL } from "../../api/routes";
import { Grid, TextField } from "@mui/material";
import "../comstyles/component.css";

export function UserData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className="modal">
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
  );
}

export function RiskData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [riskName, setRiskName] = useState(params.riskName);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    axios
      .get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        setdeptmentName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(OWNERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        setOwnersName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                value={riskName}
                onChange={(e) => setRiskName(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                value={riskName}
                onChange={(e) => setRiskName(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                value={riskName}
                onChange={(e) => setRiskName(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                value={riskName}
                onChange={(e) => setRiskName(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                value={riskName}
                onChange={(e) => setRiskName(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                value={riskName}
                onChange={(e) => setRiskName(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                value={riskName}
                onChange={(e) => setRiskName(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export function ReviewRiskData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  function handleOpen() {
    setOpen(!open);
  }

  return (
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
  );
}

export function MonitoredRiskData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  function handleOpen() {
    setOpen(!open);
  }

  return (
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
  );
}

export function MitigatedRiskData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  function handleOpen() {
    setOpen(!open);
  }

  return (
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
  );
}

export function DepartmentData(params) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  function handleOpen() {
    setOpen(!open);
  }

  return (
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
  );
}

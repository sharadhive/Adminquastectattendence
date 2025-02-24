import { useState } from "react";
import AdminPanel from "./components/admin/adminpanel";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import "./App.css";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPasskey, setAdminPasskey] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminAccess = () => {
    if (adminPasskey === "Admin1234") {
      setIsAdmin(true);
      setShowAdmin(false);
    } else {
      alert("Incorrect passkey!");
      setAdminPasskey("");
    }
  };

  return (
    <Container maxWidth="md" className="app-container">
      <Box className="intro-section">
        <Typography variant="h3" className="intro-title">
          Admin Panel - Employee Attendance
        </Typography>

        {!isAdmin && (
          <Box mt={2}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => setShowAdmin(true)}
            >
              Admin Access
            </Button>
          </Box>
        )}
      </Box>

      {showAdmin && !isAdmin && (
        <Box mt={2}>
          <TextField
            label="Enter Admin Passkey"
            type="password"
            fullWidth
            value={adminPasskey}
            onChange={(e) => setAdminPasskey(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleAdminAccess}
          >
            Submit
          </Button>
        </Box>
      )}

      {isAdmin && (
        <Box mt={2}>
          <AdminPanel />
        </Box>
      )}
    </Container>
  );
}

export default App;

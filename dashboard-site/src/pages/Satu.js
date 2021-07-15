import React from "react";
import {
  CssBaseline,
  Typography,
  Paper,
  Container,
  Box,
  Grid,
  TextField,
} from "@material-ui/core";
export default function Satu() {
  return (
    <div>
      <Box mt={5} />
      <CssBaseline />
      <Container maxWidth="md">
        <Box border={1} p={2}>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="ketIjin"
                name="ketIjin"
                label="Keterangan Perijinan"
                autoComplete="ketIjin"
                //onChange={(e) => setKetIjin(e.target.value)}
                //value={ketIjin || ""}
                //disabled={!enPerijinan}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="ketIjin"
                name="ketIjin"
                label="Keterangan Perijinan"
                autoComplete="ketIjin"
                //onChange={(e) => setKetIjin(e.target.value)}
                //value={ketIjin || ""}
                //disabled={!enPerijinan}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="ketIjin"
                name="ketIjin"
                label="Keterangan Perijinan"
                autoComplete="ketIjin"
                //onChange={(e) => setKetIjin(e.target.value)}
                //value={ketIjin || ""}
                //disabled={!enPerijinan}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="ketIjin"
                name="ketIjin"
                label="Keterangan Perijinan"
                autoComplete="ketIjin"
                //onChange={(e) => setKetIjin(e.target.value)}
                //value={ketIjin || ""}
                //disabled={!enPerijinan}
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

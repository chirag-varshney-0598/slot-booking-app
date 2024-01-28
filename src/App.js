import { Container } from "@mui/material";

import HomeLayout from "./layouts/HomeLayout";
import Calender from "./componenets/Calender";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <HomeLayout>
        <Container>
          <Calender />
        </Container>
      </HomeLayout>
    </LocalizationProvider>
  );
}

export default App;

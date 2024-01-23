
import { Box, styled } from '@mui/material';

import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFeed from './components/SearchFeed';



const Container = styled(Box)(({theme}) => ({
  margin: '30px auto 0 auto',
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  [theme.breakpoints.down('sm','xs')]:
  {
      width: '100%'
  }
}));

function App() {
  return (
      <Box>
        <Header />
        <Container>
          <InfoHeader />
            <Routes>
              <Route exact path='/articles' element={<Articles />} />
              <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Container>
      </Box>
  );
}

export default App;

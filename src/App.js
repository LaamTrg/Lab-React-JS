import { Route, Routes } from 'react-router-dom';
import Menu from './component/common/Menu';
import Home from './component/page/Home';
import About from './component/page/About';
import Event from './component/page/Event';
import Team from './component/page/Team';
import Work from './component/page/Work';
import Service from './component/page/Service';
import Contact from './component/page/Contact';
import Follow from './component/page/Follow';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={3}>
            <Menu/>
          </Col>
          <Col sm={9}>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About />} />
              <Route path='/event' element={<Event />} />
              <Route path='/team' element={<Team />} />
              <Route path='/work' element={<Work />} />
              <Route path='/service' element={<Service />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/follow' element={<Follow />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
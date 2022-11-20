import './App.css';
import styled from 'styled-components';
import Header from './components/header/Header';
import SidebarContainer from './components/sidebar/SidebarContainer';
const Wrapper = styled.div`
  display : flex;
  flex-direction : row;
  width : 100vw;
  & .left{
    margin-right : auto;
  }
  & .center{
    width : 768px;
  }
  & .right{
    margin-left : auto;
  }
`

function App() {
 
  return (
    <div>
      <Header>header</Header>
      <Wrapper>
        <div className='left'>
          <SidebarContainer/>
        </div>
        <div className='center'>center</div>
        <div className='right'>right</div>
      </Wrapper>
    </div>
  );
}

export default App;

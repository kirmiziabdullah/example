import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
.side1{
    display: flex;  
    flex-direction: column;
    font-weight: bold;
    text-align: center;
    font-size: xx-large;
    width:34%;
    justify-content: flex-start

}
.side2{
    display: flex;  
    flex-direction: column;
    font-weight: bold;
    text-align: center;
    font-size: xx-large;
    width:65%;
    justify-content: flex-end
}
.wrapper {
    display: flex;  
    flex-flow: wrap;
    font-weight: bold;
    text-align: center;
    font-size: xx-large;
    justify-content: space-between;
  }
  
 
  
  .header {
    background: #99CCFF;
    padding:25px;
    flex:99%;
    margin-bottom: 10px;
    
  }
  
  .footer {
    background: #FF8C00;
    padding:25px;
    flex:99%;
    margin-top: 10px;
    
  }
  
  .main {
    text-align: left;
    background: deepskyblue;
  }
  
  .aside-1 {
    background: #DDA0DD	;
    padding: 5px;
    height: 250px;
    text-align: center;
    flex: auto;
    margin-bottom: 10px;
  }
  
  .aside-2 {
    background: #FFA500;
    height: 350px;
    flex: auto;
    margin-bottom: 10px;
  }
  .aside-3 {
    background: #6B8E23;
    flex:auto;
    margin-bottom: 10px;
    height: 350px;
  }
  .aside-4 {
    background: #696969;
    flex-direction: inherit;
    height: 200px;
    flex: auto;
    
    margin-bottom: 10px;
  }
  .aside-5 {
    background: #3CB371;
    width:700px ;
    height: 200px;
    flex: auto;
    margin-right: 10px;
    
  }
  .aside-6 {
    background: 	#FFC0CB;
    width:250px ;
    height: 200px;
    flex: auto;
    
    margin-bottom: 10px;
  }

  
  
  
  @media all{
    
    .aside-1 { order: 1; } 
    .aside-2 { order: 2; }
    .aside-3 { order: 3; }
    .aside-4 { order: 4; }
    .aside-5 { order: 5; }
    .aside-6 { order: 6; }
    .footer  { order: 7; }
  }
  
  body {
    padding: 2em; 
    color:white;
  }
`;
export const Soru3 = (props) => (
  <GridWrapper>
    <div className="wrapper">
      <header className="header">Header</header>
      <div className="side1"><aside class="aside aside-1">Hero</aside>
      <aside className="aside aside-3">SideBar</aside>
      </div>
      <div className="side2"> 
        <aside className="aside aside-2">Main Content <p>**If things do not look right,make sure your browser is in "Experimental Mode"</p></aside>
      
        <aside className="aside aside-4">Extra Content</aside>
      </div>
      
      <aside className="aside aside-5">Related İmages</aside>
      <aside className="aside aside-6">Related Posts</aside>
      <footer className="footer">Footer</footer>
    </div>
  </GridWrapper>
  
)
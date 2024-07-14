/* App.css */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    min-width:1280px;
  }
  
  .App {
    text-align: center;
  }
  
  .Top-header {
    padding: 5px ; 
    white-space: nowrap;
    background-color: #ffffff;
    display: flex;
  }
  
  .top-header-btn {
    margin-left: 20px;
    position: static;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  .App-header {
    background-color: #503737;
    color: rgb(0, 0, 0);
    padding: 20px 120px; 
    text-align: left;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin: 0 10px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  main {
    padding: 20px 120px; 
  }
  
  .menu-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .menu-item {
    width: 200px; 
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; 
  }
  
  .menu-item img {
    width: 100%; 
    height: auto; 
  }
  
  .Uppercase-text {
    text-align: left;
    width: 100%;
    color: rgb(0, 0, 0);
    font-weight: 600;
    font-size: 36px;
    margin: 32px 120px; 
  }
  
  .delivery-text-block-one {
    display: flex;
    justify-content: space-between;
    margin: 0 120px; 
  }
  
  .delivery-text-one,
  .delivery-text-two,
  .delivery-text-three {
    width: 30%; 
    margin-right: 2%; 
    font-weight: 500;
    font-size: 16px;
  }
  
  .delivery-text-three {
    margin-right: 0; 
  }
  
  footer {
    background-color: #333;
    color: white;
    padding: 10px 120px; 
    position: fixed;
    bottom: 0;
    width: 100%;
  }
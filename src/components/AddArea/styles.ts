import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  .plusIcon {
    margin-right: 5px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 18px;
    flex: 1;
    padding-top: 5px;
  }
`
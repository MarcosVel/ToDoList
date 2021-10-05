import styled from "styled-components";

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (`
  display: flex;
  align-items: center;
  background-color: #20212C;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;

  input { 
    width: 25px;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
  }

  label { 
    color: #dedede;
    text-decoration: ${ done ? 'line-through' : 'initial' };
  }
`))


import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const FileDropContainer = styled.div`
  padding: 16px;
  height: 100%;
  width: 50%;
  border-right: 1px solid #ececec;
`;

export const InputContainer = styled.div`
  padding: 16px;
  height: 100%;
  width: 50%;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: none;
  padding: 4px;
  font-size: 12px;
  width: 100%;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.25);
  transition: 0.2s;

  &:focus {
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.75);
  }
`;

export const Label = styled.label`
  color: #ececec;
  font-size: 1rem;
  margin-bottom: 4px;
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;
`;
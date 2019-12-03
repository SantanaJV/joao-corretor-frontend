import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`;

export const Title = styled.h3`
  text-align: center;
  color: #ececec;
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const FileDropContainer = styled.div`
  padding: 0 16px;
  height: 100%;
  width: 50%;
  border-right: 1px solid #ececec;
`;

export const InputContainer = styled.div`
  padding: 0 16px;
  height: 100%;
  width: 50%;
`;

export const ContextGroup = styled.div`
  h3 {
    color: #ececec;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  margin-bottom: 40px;
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 8px;
  margin-bottom: 8px;

  label {
    color: #ececec;
    font-size: 0.9rem;
    margin-bottom: 4px;
  }

  input {
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
  }
`;
